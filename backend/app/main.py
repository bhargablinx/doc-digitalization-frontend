from fastapi import FastAPI, UploadFile
import shutil

from app.services.pdf_extractor import extract_pdf_text
from app.services.ocr_extractor import extract_image_text

from app.parsers.pdf_parser import parse_pdf_text
from app.parsers.ocr_parser import parse_ocr_text

app = FastAPI()


@app.post("/upload")
async def upload_file(file: UploadFile):

    try:
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
            "success": True,
            "filename": file.filename,
            "data": data
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }
    
    
    
