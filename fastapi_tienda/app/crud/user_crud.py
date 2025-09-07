from sqlalchemy.orm import Session   # Para manejar la sesión de DB
from app.models.user_model import UsuarioDB   # Modelo de usuario en la DB
from app.schemas.user_schema import UsuarioCreate  # Esquema de validación de entrada

# Función que obtiene un usuario por UID, o lo crea si no existe
def get_or_create_user(db: Session, uid: str, email: str, nombre: str = "", apellido: str = ""):
    # Busca en la base si ya existe un usuario con ese UID
    user = db.query(UsuarioDB).filter(UsuarioDB.uid == uid).first()
    if user:  # Si ya existe, lo devuelve
        return user
    
    # Si no existe, se crea un nuevo usuario
    new_user = UsuarioDB(
        uid=uid,          # UID de Firebase
        email=email,      # Email del usuario
        nombre=nombre,    # Nombre
        apellido=apellido,# Apellido
        is_admin=False    # Por defecto no es administrador
    )
    db.add(new_user)      # Lo agrega a la sesión
    db.commit()           # Confirma los cambios en la DB
    db.refresh(new_user)  # Refresca el objeto para obtener el ID y otros valores generados
    return new_user       # Devuelve el usuario recién creado
