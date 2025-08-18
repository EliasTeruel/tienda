import React, { useState } from "react";
import { crearProducto, subirImagen, eliminarImagen } from "../api/productosApi";

const ProductoForm = ({ onProductoCreado }) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [mensaje, setMensaje] = useState("");

  // Maneja el cambio de cada input de imagen
  const handleImagenChange = async (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const url = await subirImagen(file);
      // Actualiza la posición correspondiente en el array de imágenes
      const nuevasImagenes = [...imagenes];
      nuevasImagenes[index] = url;
      setImagenes(nuevasImagenes);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Solo envía si hay dos imágenes
      if (imagenes.length < 2 || !imagenes[0] || !imagenes[1]) {
        setMensaje("Debes subir dos imágenes.");
        return;
      }
      const producto = { nombre, descripcion, precio: parseFloat(precio), imagenes };
      const nuevoProducto = await crearProducto(producto);
      onProductoCreado(nuevoProducto);
      setMensaje("Producto creado correctamente");
      setNombre(""); setDescripcion(""); setPrecio(""); setImagenes([]);
    } catch (err) {
      setMensaje("Error al crear producto");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required /><br />
      <textarea placeholder="Descripción" value={descripcion} onChange={e => setDescripcion(e.target.value)} required /><br />
      <input type="number" placeholder="Precio" value={precio} onChange={e => setPrecio(e.target.value)} required /><br />
      <label>Imagen 1:</label>
      <input type="file" accept="image/*" onChange={e => handleImagenChange(e, 0)} /><br />
      <label>Imagen 2:</label>
      <input type="file" accept="image/*" onChange={e => handleImagenChange(e, 1)} /><br />
      <button type="submit">Crear Producto</button>
      {mensaje && <p>{mensaje}</p>}
      <div>
  {imagenes.map((url, i) => url && (
    <span key={i} style={{ position: "relative", display: "inline-block" }}>
      <img src={url} alt={`img${i}`} style={{ width: 80, margin: 5 }} />
      <button
        type="button"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: 24,
          height: 24,
          cursor: "pointer"
        }}
        onClick={async () => {
          await eliminarImagen(url); // Elimina de Cloudinary
          const nuevasImagenes = [...imagenes];
          nuevasImagenes[i] = null; // Elimina localmente
          setImagenes(nuevasImagenes);
        }}
      >X</button>
    </span>
  ))}
</div>
    </form>
  );
};

export default ProductoForm;