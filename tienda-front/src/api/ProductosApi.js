import axios from "axios";

const API_URL = "http://localhost:8000";

// Obtener todos los productos
export const getProductos = async () => {
  const res = await axios.get(`${API_URL}/productos`);
  console.log("Productos obtenidos API:", res.data);
  return res.data;
};

// Crear un producto
export const crearProducto = async (producto) => {
  const res = await axios.post(`${API_URL}/productos`, producto);
  return res.data;
};

// Subir imagen
export const subirImagen = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const res = await axios.post(`${API_URL}/imagenes/subir-imagen`, formData);
  return res.data.url;
};

export const eliminarImagen = async (url) => {
  await axios.delete(`${API_URL}/imagenes/eliminar-imagen`, { params: { url } });
};