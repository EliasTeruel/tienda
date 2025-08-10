from fastapi import APIRouter, Depends  # Para crear rutas y dependencias
from sqlalchemy.orm import Session  # Para manejar sesiones de la BD
from typing import List  # Tipo para listas
from app.models import Producto  # Modelo Pydantic para la API
from app.database import SessionLocal  # Fábrica de sesiones de la BD
from app import crud  # Funciones CRUD

router = APIRouter()  # Crea el router para las rutas de productos

# Dependencia para obtener la sesión de la BD
def get_db():
    db = SessionLocal()
    try:
        yield db  # Devuelve la sesión
    finally:
        db.close()  # Cierra la sesión al finalizar

# Ruta para listar productos, usa la función listar_productos de crud.py
@router.get("/productos", response_model=List[Producto])
def listar_productos(db: Session = Depends(get_db)):
    return crud.listar_productos(db)

@router.get("/productos/{producto_id}", response_model=Producto)
def obtener_producto(producto_id: int, db: Session = Depends(get_db)):
    producto = crud.obtener_producto(db, producto_id)
    if not producto:
        return {"error": "Producto no encontrado"}
    return producto

@router.post("/productos", response_model=Producto)
def crear_producto(producto: Producto, db: Session = Depends(get_db)):
    producto_data = producto.dict()
    return crud.crear_producto(db, producto_data)

@router.put("/productos/{producto_id}", response_model=Producto)
def actualizar_producto(producto_id: int, producto: Producto, db: Session = Depends(get_db)):
    producto_data = producto.dict()
    producto_actualizado = crud.actualizar_producto(db, producto_id, producto_data)
    if not producto_actualizado:
        return {"error": "Producto no encontrado"}
    return producto_actualizado