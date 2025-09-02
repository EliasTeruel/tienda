# app/routes/imagenes.py
from fastapi import APIRouter, UploadFile, File, HTTPException, Query
from app.services.cloudinary_service import subir_imagen_a_cloudinary, eliminar_imagen_de_cloudinary

router = APIRouter(prefix="/imagenes", tags=["imagenes"])

@router.post("/subir-imagen")
async def subir_imagen(file: UploadFile = File(...)):
    try:
        contenido = await file.read()  # Leemos el contenido en memoria
        url = subir_imagen_a_cloudinary(contenido)
        return {"url": url}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/eliminar-imagen")
def eliminar_imagen(url: str = Query(...)):
    try:
        eliminar_imagen_de_cloudinary(url)
        return {"mensaje": "Imagen eliminada"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))