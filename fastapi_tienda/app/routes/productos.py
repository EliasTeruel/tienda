# app/routes/productos.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.database import SessionLocal
from app.schemas.product_schema import Producto, ProductoCreate
from app.crud import product_crud
from app.utils.security import require_admin

router = APIRouter(prefix="/productos", tags=["productos"])

# Dependencia para obtener la sesión de la DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()




# -----------------------
# Rutas públicas
# -----------------------
@router.get("/", response_model=List[Producto])
def listar_productos(db: Session = Depends(get_db)):
    return product_crud.listar_productos(db)

@router.get("/{producto_id}", response_model=Producto)
def obtener_producto(producto_id: int, db: Session = Depends(get_db)):
    return product_crud.obtener_producto(db, producto_id)

# -----------------------
# Rutas solo para admin
# -----------------------
@router.post("/", response_model=Producto, dependencies=[Depends(require_admin)])
def crear_producto(producto: ProductoCreate, db: Session = Depends(get_db)):
    return product_crud.crear_producto(db, producto)

@router.put("/{producto_id}", response_model=Producto, dependencies=[Depends(require_admin)])
def actualizar_producto(producto_id: int, producto: ProductoCreate, db: Session = Depends(get_db)):
    return product_crud.actualizar_producto(db, producto_id, producto)

@router.delete("/{producto_id}", dependencies=[Depends(require_admin)])
def eliminar_producto(producto_id: int, db: Session = Depends(get_db)):
    return {"ok": product_crud.eliminar_producto(db, producto_id)}









# # Rutas CRUD productos
# @router.get("/", response_model=List[Producto])
# def listar_productos(db: Session = Depends(get_db)):
#     return product_crud.listar_productos(db)

# @router.get("/{producto_id}", response_model=Producto)
# def obtener_producto(producto_id: int, db: Session = Depends(get_db)):
#     producto = product_crud.obtener_producto(db, producto_id)
#     if not producto:
#         raise HTTPException(status_code=404, detail="Producto no encontrado")
#     return producto

# @router.post("/", response_model=Producto)
# def crear_producto(producto: ProductoCreate, db: Session = Depends(get_db)):
#     return product_crud.crear_producto(db, producto)

# @router.put("/{producto_id}", response_model=Producto)
# def actualizar_producto(producto_id: int, producto: ProductoCreate, db: Session = Depends(get_db)):
#     actualizado = product_crud.actualizar_producto(db, producto_id, producto)
#     if not actualizado:
#         raise HTTPException(status_code=404, detail="Producto no encontrado")
#     return actualizado

# @router.delete("/{producto_id}")
# def eliminar_producto(producto_id: int, db: Session = Depends(get_db)):
#     ok = product_crud.eliminar_producto(db, producto_id)
#     if not ok:
#         raise HTTPException(status_code=404, detail="Producto no encontrado")
#     return {"ok": True}
