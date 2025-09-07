<<<<<<< HEAD
from fastapi import FastAPI  # Framework principal
from fastapi.middleware.cors import CORSMiddleware  # Middleware para CORS
from app.config import CORS_SETTINGS  # Configuración de CORS desde config.py
from app.routes import productos, imagenes  # Importa las rutas de productos e imágenes
=======
# app/main.py
import os
from fastapi import FastAPI  # Framework principal
from fastapi.middleware.cors import CORSMiddleware  # Middleware para CORS
from app.config import CORS_SETTINGS  # Configuración de CORS desde config.py
from app.routes import productos, imagenes, users  # Importa las rutas de productos e imágenes
import firebase_admin
from firebase_admin import credentials
from dotenv import load_dotenv

load_dotenv()  # Carga variables de .env

firebase_key_path = os.getenv("FIREBASE_KEY_PATH")
cred = credentials.Certificate(firebase_key_path)
firebase_admin.initialize_app(cred)
>>>>>>> 2681b39bb6a30aeb24cdf2817cd92e5eafd0e13e

app = FastAPI(title="API Tienda", description="API para productos e imágenes", version="1.0")  # Instancia principal de la API

# Configuración de CORS para permitir peticiones desde otros orígenes
app.add_middleware(
    CORSMiddleware,
    **CORS_SETTINGS
)

# Registrar rutas de productos e imágenes en la API
app.include_router(productos.router)
app.include_router(imagenes.router)
<<<<<<< HEAD
=======
app.include_router(users.router)
>>>>>>> 2681b39bb6a30aeb24cdf2817cd92e5eafd0e13e

@app.get("/")  # Ruta raíz de la API
def root():
    return {"mensaje": "¡Bienvenido a la API de la Tienda!!"}