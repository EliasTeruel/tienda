from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_productos():
    return [{"id": 1, "nombre": "Producto demo"}]
