from sqlalchemy import Column, Integer, String, Float, Text  # Tipos de columnas para la BD
from sqlalchemy.orm import declarative_base  # Base para modelos SQLAlchemy
from pydantic import BaseModel  # Base para modelos de validación de la API
from typing import List  # Tipo para listas

Base = declarative_base()  # Crea la base para los modelos de la BD

# Modelo SQLAlchemy: representa la tabla 'productos' en la BD
class ProductoDB(Base):
    __tablename__ = "productos"  # Nombre de la tabla
    id = Column(Integer, primary_key=True, index=True)  # ID único
    nombre = Column(String(100), nullable=False)  # Nombre del producto
    descripcion = Column(Text, nullable=True)  # Descripción
    precio = Column(Float, nullable=False)  # Precio
    imagenes = Column(Text, nullable=True)  # URLs de imágenes (string, puede ser JSON o separado por comas)

# Modelo Pydantic: representa el producto en la API
class Producto(BaseModel):
    id: int  # ID único
    nombre: str  # Nombre del producto
    descripcion: str  # Descripción
    precio: float  # Precio
    imagenes: List[str] = []  # Lista de URLs de imágenes

    class Config:
        orm_mode = True  # Permite convertir desde objetos ORM (SQLAlchemy) a Pydantic