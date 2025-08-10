# app/services/cloudinary_service.py
import cloudinary.uploader
# from app.config import cloudinary
def subir_imagen_a_cloudinary(file_bytes):
    """
    Sube una imagen a Cloudinary y devuelve la URL segura.
    file_bytes: contenido en bytes del archivo
    """
    result = cloudinary.uploader.upload(file_bytes)
    return result["secure_url"]
