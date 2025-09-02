# app/services/cloudinary_service.py
import cloudinary.uploader
def subir_imagen_a_cloudinary(file_bytes):
    """
    Sube una imagen a Cloudinary y devuelve la URL segura.
    file_bytes: contenido en bytes del archivo
    """
    result = cloudinary.uploader.upload(file_bytes)
    return result["secure_url"]

def eliminar_imagen_de_cloudinary(url):
    """
    Elimina una imagen de Cloudinary usando su URL.
    """
    # Extrae el public_id de la URL (puede variar según tu configuración de Cloudinary)
    # Ejemplo para URLs estándar: https://res.cloudinary.com/<cloud_name>/image/upload/v<timestamp>/<public_id>.jpg
    public_id = url.split("/")[-1].split(".")[0]
    cloudinary.uploader.destroy(public_id)

    