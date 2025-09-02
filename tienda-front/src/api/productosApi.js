// src/api/ProductosApi.js

import axios from "axios";
import { getAuth } from "firebase/auth";

const API_URL = "http://localhost:8000";

// Helper para adjuntar token si hay usuario
const getAuthHeaders = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) return {};
  const token = await user.getIdToken();
  return { Authorization: `Bearer ${token}` };
};

// -----------------------
// Rutas públicas
// -----------------------
export const getProductos = async () => {
  const res = await axios.get(`${API_URL}/productos`);
  return res.data;
};

// -----------------------
// Rutas solo admin
// -----------------------
export const crearProducto = async (producto) => {
  const headers = await getAuthHeaders();
  const res = await axios.post(`${API_URL}/productos`, producto, { headers });
  return res.data;
};

export const actualizarProducto = async (id, producto) => {
  const headers = await getAuthHeaders();
  const res = await axios.put(`${API_URL}/productos/${id}`, producto, { headers });
  return res.data;
};

export const eliminarProducto = async (id) => {
  const headers = await getAuthHeaders();
  await axios.delete(`${API_URL}/productos/${id}`, { headers });
};




// import axios from "axios";

// const API_URL = "http://localhost:8000";

// // Obtener todos los productos
// export const getProductos = async () => {
//   const res = await axios.get(`${API_URL}/productos`);
//   // console.log("Productos obtenidos API:", res.data);
//   return res.data;
// };

// // Crear un producto
// export const crearProducto = async (producto) => {
//   const res = await axios.post(`${API_URL}/productos`, producto);
//   return res.data;
// };

// // Subir imagen
// export const subirImagen = async (file) => {
//   const formData = new FormData();
//   formData.append("file", file);
//   const res = await axios.post(`${API_URL}/imagenes/subir-imagen`, formData);
//   return res.data.url;
// };

// export const eliminarImagen = async (url) => {
//   await axios.delete(`${API_URL}/imagenes/eliminar-imagen`, { params: { url } });
// };