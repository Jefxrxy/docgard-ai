from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image, ImageChops, ImageEnhance, ImageStat
import fitz  # PyMuPDF
import io
import base64

app = FastAPI(title="DocGard ELA Engine")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def generate_ela_heatmap(image: Image.Image, quality: int = 90) -> Image.Image:
    try:
        original = image.convert('RGB')
        
        temp_buffer = io.BytesIO()
        original.save(temp_buffer, 'JPEG', quality=quality)
        temp_buffer.seek(0)
        compressed = Image.open(temp_buffer)
        
        ela_image = ImageChops.difference(original, compressed)
        
        extrema = ela_image.getextrema()
        max_diff = max([ex[1] for ex in extrema])
        if max_diff == 0:
            max_diff = 1 
            
        scale = 255.0 / max_diff
        ela_image = ImageEnhance.Brightness(ela_image).enhance(scale)
        
        return ela_image
    except Exception as e:
        raise ValueError(f"Failed to process image: {str(e)}")

@app.post("/analyze")
async def analyze_document(file: UploadFile = File(...)):
    print(f"Receiving file: {file.filename} | Type: {file.content_type}")
    
    content_type = str(file.content_type).lower()
    if "pdf" not in content_type and "image" not in content_type:
        raise HTTPException(status_code=400, detail=f"Unsupported file type blocked: {content_type}")
    
    try:
        contents = await file.read()
        page_count_multiplier = 1
        
        if "pdf" in content_type:
            print("Converting Multi-Page PDF to Image...")
            pdf_document = fitz.open(stream=contents, filetype="pdf")
            
            max_pages = min(3, len(pdf_document))
            page_count_multiplier = max_pages
            pdf_images = []
            
            for page_num in range(max_pages):
                page = pdf_document.load_page(page_num) 
                pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False) 
                img_data = pix.tobytes("png")
                pdf_images.append(Image.open(io.BytesIO(img_data)))
            
            widths, heights = zip(*(i.size for i in pdf_images))
            total_width = max(widths)
            total_height = sum(heights)
            
            combined_image = Image.new('RGB', (total_width, total_height), (255, 255, 255))
            y_offset = 0
            for img in pdf_images:
                combined_image.paste(img, (0, y_offset))
                y_offset += img.height
                
            image = combined_image
            print(f"Stitched {max_pages} pages successfully!")
        else:
            image = Image.open(io.BytesIO(contents))
        
        print("Generating Heatmap...")
        heatmap = generate_ela_heatmap(image)
        
        print("Calculating dynamic percentage...")
        stat = ImageStat.Stat(heatmap.convert('L'))
        avg_pixel_brightness = stat.mean[0]
        
        adjusted_brightness = avg_pixel_brightness * page_count_multiplier
        dynamic_score = int((adjusted_brightness / 12.0) * 100)
        
        if dynamic_score < 1: dynamic_score = 1
        if dynamic_score > 99: dynamic_score = 99
        
        # --- NEW: Match Output Format to Input Format ---
        output_format = "JPEG"
        mime_out = "image/jpeg"
        
        if "pdf" in content_type:
            output_format = "PDF"
            mime_out = "application/pdf"
        elif "png" in content_type:
            output_format = "PNG"
            mime_out = "image/png"
            
        result_buffer = io.BytesIO()
        # Save dynamically as PDF, PNG, or JPEG
        heatmap.save(result_buffer, format=output_format) 
        encoded_data = base64.b64encode(result_buffer.getvalue()).decode('utf-8')
        
        print(f"Success! Score calculated: {dynamic_score}%")
        return {
            "status": "success",
            "confidence_score": dynamic_score,
            "message": "Analysis complete.",
            "heatmap_base64": f"data:{mime_out};base64,{encoded_data}",
            "mime_type": mime_out # Send the file type to the frontend
        }
        
    except Exception as e:
        print(f"CRITICAL AI ERROR: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))