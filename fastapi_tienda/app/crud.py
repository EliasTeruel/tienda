from app.models import ProductoDB  # Modelo de la base de datos
from sqlalchemy.orm import Session  # Para manejar la sesión de la BD

# 1. Listar todos los productos
def listar_productos(db: Session):
    productos_db = db.query(ProductoDB).all()  # Consulta todos los productos
    productos = []
    for prod in productos_db:
        imagenes = []
        if prod.imagenes:
            imagenes = [img for img in prod.imagenes.split(",") if img.strip()]
        productos.append({
            "id": prod.id,
            "nombre": prod.nombre,
            "descripcion": prod.descripcion,
            "precio": prod.precio,
            "imagenes": imagenes
        })
    return productos  # Devuelve la lista de productos

# 2. Obtener un producto por ID
def obtener_producto(db: Session, producto_id: int):
    # Busca el producto por su ID
    prod = db.query(ProductoDB).filter(ProductoDB.id == producto_id).first()
    if not prod:
        return None  # Si no existe, devuelve None
    imagenes = []
    if prod.imagenes:
        imagenes = [img for img in prod.imagenes.split(",") if img.strip()]
    return {
        "id": prod.id,
        "nombre": prod.nombre,
        "descripcion": prod.descripcion,
        "precio": prod.precio,
        "imagenes": imagenes
    }

# 3. Crear un producto nuevo
def crear_producto(db: Session, producto_data: dict):
    # Crea una instancia del modelo con los datos recibidos
    imagenes_str = ",".join(producto_data.get("imagenes", []))  # Convierte la lista en string
    nuevo_producto = ProductoDB(
        nombre=producto_data["nombre"],
        descripcion=producto_data.get("descripcion", ""),
        precio=producto_data["precio"],
        imagenes=imagenes_str
    )
    db.add(nuevo_producto)  # Agrega el producto a la sesión
    db.commit()  # Guarda los cambios en la BD
    db.refresh(nuevo_producto)  # Actualiza la instancia con el ID generado
    return nuevo_producto  # Devuelve el producto creado

# 4. Actualizar un producto existente
def actualizar_producto(db: Session, producto_id: int, producto_data: dict):
    # Busca el producto por su ID
    prod = db.query(ProductoDB).filter(ProductoDB.id == producto_id).first()
    if not prod:
        return None  # Si no existe, devuelve None
    # Actualiza los campos
    prod.nombre = producto_data.get("nombre", prod.nombre)
    prod.descripcion = producto_data.get("descripcion", prod.descripcion)
    prod.precio = producto_data.get("precio", prod.precio)
    prod.imagenes = ",".join(producto_data.get("imagenes", []))
    db.commit()  # Guarda los cambios
    db.refresh(prod)  # Actualiza la instancia
    return prod  # Devuelve el producto actualizado

# 5. Eliminar un producto
def eliminar_producto(db: Session, producto_id: int):
    # Busca el producto por su ID
    prod = db.query(ProductoDB).filter(ProductoDB.id == producto_id).first()
    if not prod:
        return False  # Si no existe, devuelve False
    db.delete(prod)  # Elimina el producto
    db.commit()  # Guarda los cambios
    return True  # Devuelve True si se eliminó correctamente