import os  # Para manejar variables de entorno
import cloudinary  # SDK de Cloudinary
from dotenv import load_dotenv  # Para cargar variables desde .env
from fastapi.middleware.cors import CORSMiddleware  # Middleware para CORS

load_dotenv()  # Carga las variables de entorno desde el archivo .env

# Configuración de Cloudinary usando las variables de entorno
cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET")
)

# Configuración de CORS para la API
CORS_SETTINGS = {
    "allow_origins": ["*"],  # Permite todos los orígenes
    "allow_credentials": True,
    "allow_methods": ["*"],  # Permite todos los métodos HTTP
    "allow_headers": ["*"]   # Permite todos los headers
}