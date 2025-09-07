from pydantic import BaseModel, EmailStr   # BaseModel para validación, EmailStr para validar emails
from datetime import datetime              # Para campos de fecha y hora

# Esquema base de usuario (lo común entre crear, leer, etc.)
class UsuarioBase(BaseModel):
    nombre: str | None = None     # Nombre opcional
    apellido: str | None = None   # Apellido opcional
    email: EmailStr               # Email obligatorio, validado

# Esquema para cuando se crea un usuario (incluye el UID de Firebase)
class UsuarioCreate(UsuarioBase):
    uid: str   # UID generado por Firebase

# Esquema completo de un usuario (lo que devuelve la DB)
class Usuario(UsuarioBase):
    id: int                  # ID autoincremental de la base local
    uid: str                 # UID de Firebase
    is_admin: bool = False   # Flag para saber si es administrador
    created_at: datetime     # Fecha en la que se creó el usuario

    class Config:
        orm_mode = True  # Permite que SQLAlchemy devuelva objetos que se interpretan como dict
