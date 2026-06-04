from fastapi import FastAPI, UploadFile
from app.services.pdf_extractor import extract_pdf_text

import shutil

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Backend working"}

@app.post("/upload")
async def upload_file(file: UploadFile):
    file_path = f"app/uploads/{file.filename}"
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
        
    text = extract_pdf_text(file_path) 
    
    return {
        "message": "File uploaded successfully",
        "text": text
    }
    
