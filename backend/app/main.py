from fastapi import FastAPI, UploadFile
import shutil

from app.services.pdf_extractor import extract_pdf_text
from app.services.ocr_extractor import extract_image_text

from backend.app.parsers.pdf_parser import parse_pdf_text
from backend.app.parsers.ocr_parser import parse_ocr_text

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Backend working"}

@app.post("/upload")
async def upload_file(file: UploadFile):
    file_path = f"app/uploads/{file.filename}"
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
        
    if file.filename.endswith(".pdf"):
        text = extract_pdf_text(file_path)
        data = parse_pdf_text(text)
    else:
        text = extract_image_text(file_path)
        data = parse_ocr_text(text)
        
    return {
        "message": "success",
        "data": data
    }
    
    
    
