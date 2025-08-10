from app.models import ProductoDB  # Importa el modelo de la BD
from sqlalchemy.orm import Session  # Para manejar sesiones de la BD

# Función para listar todos los productos desde la BD
def listar_productos(db: Session):
    productos_db = db.query(ProductoDB).all()  # Consulta todos los productos
    productos = []
    for prod in productos_db:  # Itera sobre cada producto
        imagenes = []
        if prod.imagenes:  # Si hay imágenes, las separa por comas
            imagenes = [img for img in prod.imagenes.split(",") if img.strip()]
        productos.append({  # Crea un diccionario con los datos del producto
            "id": prod.id,
            "nombre": prod.nombre,
            "descripcion": prod.descripcion,
            "precio": prod.precio,
            "imagenes": imagenes
        })
    return productos  # Devuelve la lista de productos en formato dict