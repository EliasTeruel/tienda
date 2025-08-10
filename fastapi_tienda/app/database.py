from sqlalchemy import create_engine  # Importa el motor de base de datos
from sqlalchemy.orm import sessionmaker  # Permite crear sesiones para interactuar con la BD
import os  # Para manejar variables de entorno

# DATABASE_URL = os.getenv("DATABASE_URL")  # (opcional) Obtiene la URL de la BD desde .env
DATABASE_URL="postgresql://neondb_owner:npg_8aLYUf1uRnVk@ep-damp-salad-a84orj40-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"  # URL de conexión a la BD

# Crea el motor de la base de datos. Si es SQLite, agrega argumentos especiales.
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False} if "sqlite" in DATABASE_URL else {})

# Crea la fábrica de sesiones para interactuar con la BD.
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)