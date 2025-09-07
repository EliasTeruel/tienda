from sqlalchemy import Column, Integer, String, Boolean, TIMESTAMP, func
from app.models.base import Base   # Base declarativa que hereda de SQLAlchemy

# Modelo de la tabla usuarios en la base de datos
class UsuarioDB(Base):
    __tablename__ = "usuarios"   # Nombre de la tabla en la base de datos

    # ID autoincremental, clave primaria, con índice para búsquedas rápidas
    id = Column(Integer, primary_key=True, index=True)

    # UID que viene desde Firebase, único y obligatorio
    uid = Column(String(64), unique=True, nullable=False)

    # Nombre y apellido del usuario, opcionales
    nombre = Column(String(100), nullable=True)
    apellido = Column(String(100), nullable=True)

    # Email único y obligatorio
    email = Column(String(150), unique=True, nullable=False)

    # Campo booleano para saber si el usuario es administrador, por defecto False
    is_admin = Column(Boolean, default=False)

    # Fecha de creación, se setea automáticamente al momento de insertar el registro
    created_at = Column(TIMESTAMP, server_default=func.now())

