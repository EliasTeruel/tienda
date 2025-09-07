# app/crud/product_crud.py
from sqlalchemy.orm import Session
from app.models.product_model import ProductoDB
from app.schemas.product_schema import ProductoCreate
from typing import List, Dict

def listar_productos(db: Session) -> List[Dict]:
    productos_db = db.query(ProductoDB).all()
    productos = []
    for prod in productos_db:
        productos.append({
            "id": prod.id,
            "nombre": prod.nombre,
            "descripcion": prod.descripcion,
            "precio": prod.precio,
            "imagenes": [img for img in (prod.imagenes or "").split(",") if img.strip()]
        })
    return productos

def obtener_producto(db: Session, producto_id: int) -> Dict | None:
    prod = db.query(ProductoDB).filter(ProductoDB.id == producto_id).first()
    if not prod:
        return None
    return {
        "id": prod.id,
        "nombre": prod.nombre,
        "descripcion": prod.descripcion,
        "precio": prod.precio,
        "imagenes": [img for img in (prod.imagenes or "").split(",") if img.strip()]
    }

def crear_producto(db: Session, producto: ProductoCreate) -> Dict:
    imagenes_str = ",".join(producto.imagenes)
    nuevo = ProductoDB(
        nombre=producto.nombre,
        descripcion=producto.descripcion,
        precio=producto.precio,
        imagenes=imagenes_str
    )
    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)
    return {
        "id": nuevo.id,
        "nombre": nuevo.nombre,
        "descripcion": nuevo.descripcion,
        "precio": nuevo.precio,
        "imagenes": producto.imagenes
    }

def actualizar_producto(db: Session, producto_id: int, producto: ProductoCreate) -> Dict | None:
    prod = db.query(ProductoDB).filter(ProductoDB.id == producto_id).first()
    if not prod:
        return None
    prod.nombre = producto.nombre
    prod.descripcion = producto.descripcion
    prod.precio = producto.precio
    prod.imagenes = ",".join(producto.imagenes)
    db.commit()
    db.refresh(prod)
    return {
        "id": prod.id,
        "nombre": prod.nombre,
        "descripcion": prod.descripcion,
        "precio": prod.precio,
        "imagenes": producto.imagenes
    }

def eliminar_producto(db: Session, producto_id: int) -> bool:
    prod = db.query(ProductoDB).filter(ProductoDB.id == producto_id).first()
    if not prod:
        return False
    db.delete(prod)
    db.commit()
    return True
