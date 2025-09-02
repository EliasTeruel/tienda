# app/models/product_model.py
from sqlalchemy import Column, Integer, String, Float, Text
from app.models.base import Base

class ProductoDB(Base):
    __tablename__ = "productos"
    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(100), nullable=False)
    descripcion = Column(Text, nullable=True)
    precio = Column(Float, nullable=False)
    imagenes = Column(Text, nullable=True)  # guardadas separadas por coma
