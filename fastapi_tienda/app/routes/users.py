# app/routes/users.py

from fastapi import APIRouter, Depends, HTTPException  # APIRouter para agrupar rutas, Depends para inyectar dependencias, HTTPException para manejar errores controlados
from sqlalchemy.orm import Session  # Tipo de dato de la sesión de SQLAlchemy
from pydantic import BaseModel, EmailStr  # BaseModel para validar datos de entrada/salida, EmailStr valida emails
from app.database import SessionLocal  # Sesión local de la base de datos
from app.crud.user_crud import get_or_create_user  # Función que busca o crea un usuario en la DB
import firebase_admin  # SDK Admin de Firebase (requiere inicialización en otra parte de la app)
from firebase_admin import auth as firebase_auth  # Módulo de autenticación de Firebase

# Se crea un router para agrupar las rutas relacionadas con usuarios
router = APIRouter(prefix="/users", tags=["users"])

# Esquema de entrada para registrar un usuario
class UsuarioRegister(BaseModel):
    nombre: str        # Nombre del usuario
    apellido: str      # Apellido del usuario
    email: EmailStr    # Email validado con formato correcto
    password: str      # Contraseña (se usará solo en Firebase, no se guarda en la DB local)

# Dependencia que abre y cierra automáticamente la sesión de base de datos
def get_db():
    db = SessionLocal()  # Abre conexión
    try:
        yield db         # Devuelve la conexión para usar en el endpoint
    finally:
        db.close()       # Cierra la conexión al terminar

# Endpoint para registrar un usuario
@router.post("/register")
def register_user(user: UsuarioRegister, db: Session = Depends(get_db)):
    try:
        user_firebase = firebase_auth.create_user(
            email=user.email,
            password=user.password,
            display_name=f"{user.nombre} {user.apellido}"
        )
        db_user = get_or_create_user(
            db,
            uid=user_firebase.uid,
            email=user.email,
            nombre=user.nombre,
            apellido=user.apellido
        )
        return {
            "id": db_user.id,
            "uid": db_user.uid,
            "email": db_user.email,
            "nombre": db_user.nombre,
            "apellido": db_user.apellido,
            "is_admin": db_user.is_admin
        }
    except Exception as e:
        print("ERROR EN REGISTER:", e)
        raise HTTPException(status_code=500, detail=str(e))

