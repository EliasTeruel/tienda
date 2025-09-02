# app/schemas/product_schema.py

from pydantic import BaseModel
from typing import List

class ProductoBase(BaseModel):
    nombre: str
    descripcion: str
    precio: float
    imagenes: List[str] = []

class ProductoCreate(ProductoBase):
    pass

class Producto(ProductoBase):
    id: int

    class Config:
        from_attributes = True
