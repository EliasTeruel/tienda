import React, { useEffect, useState } from "react"; // Importa React y hooks
import { getProductos } from "../api/productosApi"; // Función para obtener productos desde la API
import ProductoCard from "../components/ProductoCard"; // Componente para mostrar cada producto
import ProductoForm from "../components/ProductoForm"; // Componente para crear productos

const ProductosPage = () => {
  const [productos, setProductos] = useState([]); // Estado para la lista de productos

  useEffect(() => {
    fetchProductos(); // Al montar el componente, carga los productos
  }, []);

  // Función para obtener los productos desde la API
  const fetchProductos = async () => {
    try {
      const data = await getProductos(); // Llama a la función que hace el fetch
      console.log("Productos obtenidos:", data); // Muestra los productos en la consola
      setProductos(data); // Actualiza el estado con los productos recibidos
    } catch (error) {
      console.error("Error al obtener productos:", error); // Muestra el error si falla la petición
    }
  };

  // Función para agregar un nuevo producto a la lista (cuando se crea desde el formulario)
  const handleNuevoProducto = (producto) => {
    console.log("Nuevo producto creado:", producto); // Depura el producto recibido
    setProductos([...productos, producto]); // Agrega el nuevo producto al estado
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Gestión de Productos</h2>
      {/* Formulario para crear productos, le pasa la función para agregar al estado */}
      <ProductoForm onProductoCreado={handleNuevoProducto} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* Muestra cada producto usando ProductoCard */}
        {productos.map((p, idx) => {
          // Depura cada producto antes de renderizar la card
          if (!p || !p.id) {
            console.warn("Producto inválido:", p);
            return null;
          }
          return <ProductoCard key={p.id} producto={p} />;
        })}
      </div>
    </div>
  );
};

export default ProductosPage; // Exporta el componente para usarlo