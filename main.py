from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import cloudinary
import cloudinary.uploader
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# CORS para conectar desde React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configurar Cloudinary
cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET")
)

# Modelo de producto
class Producto(BaseModel):
    id: int
    nombre: str
    descripcion: str
    precio: float
    imagenes: List[str] = []

productos_db = [
    Producto(id=1, nombre="Zapatillas Urbanas", descripcion="Zapatillas negras con detalles rojos", precio=12500.99, imagenes=[]),
    Producto(id=2, nombre="Remera Oversize", descripcion="Remera blanca oversize de algodón", precio=6900.50, imagenes=[])
]

@app.get("/productos", response_model=List[Producto])
def listar_productos():
    return productos_db

@app.post("/subir-imagen")
def subir_imagen(file: UploadFile = File(...)):
    try:
        result = cloudinary.uploader.upload(file.file)
        return {"url": result["secure_url"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
