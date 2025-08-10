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