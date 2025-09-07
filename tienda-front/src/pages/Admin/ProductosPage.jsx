import { useEffect, useState } from "react"; // Importa React y hooks
import { getProductos } from "../../api/productosApi";
import Acciones from "../../components/Admin/Acciones";
import { Outlet } from "react-router-dom";

const ProductosPage = () => {
  const [productos, setProductos] = useState([]); // Estado para la lista de productos

  useEffect(() => {
    fetchProductos(); // Al montar el componente, carga los productos
  }, []);

  // Función para obtener los productos desde la API
  const fetchProductos = async () => {
    try {
      const data = await getProductos(); // Llama a la función que hace el fetch
      // console.log("Productos obtenidos:", data); // Muestra los productos en la consola
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
    <div className="flex flex-col h-full min-h-0 gap-12 lg:gap-5 px-10 pb-5 lg:pt-20 pt-16">
      <Acciones titulo={"Lista de productos"}></Acciones>
      <Outlet></Outlet>
    </div>
  );
};

export default ProductosPage; // Exporta el componente para usarlo