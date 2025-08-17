import React, { useState } from "react";
import axios from "axios";

const ProductoCard = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagenes, setImagenes] = useState([null, null]);
  const [urlsImagenes, setUrlsImagenes] = useState([]);
  const [mensaje, setMensaje] = useState("");

  // Subir imagen a backend
  const subirImagen = async (file, index) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("http://localhost:8000/imagenes/subir-imagen", formData);
      const nuevaUrls = [...urlsImagenes];
      nuevaUrls[index] = res.data.url;
      setUrlsImagenes(nuevaUrls);
      setMensaje("Imagen subida correctamente");
    } catch (err) {
      setMensaje("Error al subir imagen");
    }
  };

  // Manejar cambio de imagen
  const handleImagenChange = (e, index) => {
    const files = [...imagenes];
    files[index] = e.target.files[0];
    setImagenes(files);
    subirImagen(e.target.files[0], index);
  };

  // Crear producto
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const producto = {
        nombre,
        descripcion,
        precio: parseFloat(precio),
        imagenes: urlsImagenes.filter(Boolean)
      };
      console.log("Producto a crear:", producto);
      await axios.post("http://localhost:8000/productos", producto);
      setMensaje("Producto creado correctamente");
      setNombre(""); setDescripcion(""); setPrecio(""); setImagenes([null, null]); setUrlsImagenes([]);
  } catch (err) {
    setMensaje("Error al crear producto");
    console.error("Error al crear producto:", err.response ? err.response.data : err);
  }
  };

  return (
    <div style={{border: "1px solid #ccc", padding: 20, width: 350, margin: "auto"}}>
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required /><br />
        <textarea placeholder="Descripción" value={descripcion} onChange={e => setDescripcion(e.target.value)} required /><br />
        <input type="number" placeholder="Precio" value={precio} onChange={e => setPrecio(e.target.value)} required /><br />
        <label>Imagen 1:</label>
        <input type="file" accept="image/*" onChange={e => handleImagenChange(e, 0)} /><br />
        <label>Imagen 22:</label>
        <input type="file" accept="image/*" onChange={e => handleImagenChange(e, 1)} /><br />
        <button type="submit" disabled={urlsImagenes.length < 2}>Crear Producto</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
      <div>
        {urlsImagenes.map((url, i) => url && <img key={i} src={url} alt={`img${i}`} style={{width: 80, margin: 5}} />)}
      </div>
    </div>
  );
};

export default ProductoCard;