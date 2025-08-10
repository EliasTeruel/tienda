from fastapi import FastAPI  # Framework principal
from fastapi.middleware.cors import CORSMiddleware  # Middleware para CORS
from app.config import CORS_SETTINGS  # Configuración de CORS desde config.py
from app.routes import productos, imagenes  # Importa las rutas de productos e imágenes

app = FastAPI(title="API Tienda", description="API para productos e imágenes", version="1.0")  # Instancia principal de la API

# Configuración de CORS para permitir peticiones desde otros orígenes
app.add_middleware(
    CORSMiddleware,
    **CORS_SETTINGS
)

# Registrar rutas de productos e imágenes en la API
app.include_router(productos.router)
app.include_router(imagenes.router)

@app.get("/")  # Ruta raíz de la API
def root():
    return {"mensaje": "¡Bienvenido a la API de la Tienda!!"}