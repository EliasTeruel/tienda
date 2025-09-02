from sqlalchemy import create_engine, Column, Integer, String, Float, Text  # Tipos y motor de BD
from sqlalchemy.ext.declarative import declarative_base  # Base para modelos
from sqlalchemy.orm import sessionmaker  # Para crear sesiones

# Cadena de conexión a la BD
DATABASE_URL="postgresql://neondb_owner:npg_8aLYUf1uRnVk@ep-damp-salad-a84orj40-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"

Base = declarative_base()  # Base para modelos

# Modelo para la tabla productos (igual que ProductoDB)
class Producto(Base):
    __tablename__ = "productos"
    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    descripcion = Column(Text)
    precio = Column(Float, nullable=False)
    imagenes = Column(Text)  # Guarda URLs o JSON serializado

# Crea el motor y la sesión
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)

def init_db():
    # Crea las tablas en la BD si no existen
    Base.metadata.create_all(bind=engine)

    # Inserta productos de ejemplo si la tabla está vacía
    session = SessionLocal()
    if session.query(Producto).count() == 0:
        prod1 = Producto(
            nombre="Zapatillas Urbans",
            descripcion="Zapatillas negras con detalles rojos",
            precio=12500.99,
            imagenes=""
        )
        prod2 = Producto(
            nombre="Remera Oversize",
            descripcion="Remera blanca oversize de algodón",
            precio=6900.50,
            imagenes=""
        )
        session.add_all([prod1, prod2])  # Agrega los productos
        session.commit()  # Guarda los cambios
        print("✅ Productos insertados correctamente.")
    else:
        print("ℹ️ La tabla ya tiene datos.")
    session.close()  # Cierra la sesión

if __name__ == "__main__":
    init_db()  # Ejecuta la inicialización si se corre el script directamente