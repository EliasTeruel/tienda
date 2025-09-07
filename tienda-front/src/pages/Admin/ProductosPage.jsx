<<<<<<< HEAD
import { useEffect, useState } from "react"; // Importa React y hooks
import { getProductos } from "../../api/productosApi";
import Acciones from "../../components/Admin/Acciones";
import { Outlet } from "react-router-dom";
=======
import React, { useEffect, useState } from "react"; // Importa React y hooks
import { getProductos } from "../../api/productosApi";
import Acciones from "../../components/Admin/Acciones";
import { Outlet } from "react-router-dom";
import VerProdcuto from "../../components/Admin/VerProducto";
>>>>>>> 2681b39bb6a30aeb24cdf2817cd92e5eafd0e13e

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
<<<<<<< HEAD
    <div className="flex flex-col h-full min-h-0 gap-12 lg:gap-5 px-10 pb-5 lg:pt-20 pt-16">
      <Acciones titulo={"Lista de productos"}></Acciones>
      <Outlet></Outlet>
=======
    <div className="flex flex-col h-full min-h-0  gap-5">

      {/* Formulario para crear productos, le pasa la función para agregar al estado */}
      <Acciones titulo={"Lista de productos"}></Acciones>
      {/* <div className="flex-1 bg-yellow-400">
        <ProductoForm onProductoCreado={handleNuevoProducto} />
      </div> */}

      {/* <VerProdcuto></VerProdcuto>9 */}
      <Outlet></Outlet>
      {/* <div className="bg-red-500 flex justify-end gap-3 order-3 h-8">
        <Link
          to="/"
          className={`bg-blue-500 text-white px-3 py-1 font-medium rounded-sm`}
        >
          Salir
        </Link>
      </div> */}
      {/* <Tablero></Tablero> */}
      {/*       
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {productos.map((p, idx) => {
          if (!p || !p.id) {
            console.warn("Producto inválido:", p);
            return null;
          }
          return <ProductoCard key={p.id} producto={p} />;
        })}
      </div> */}
>>>>>>> 2681b39bb6a30aeb24cdf2817cd92e5eafd0e13e
    </div>
  );
};

export default ProductosPage; // Exporta el componente para usarlo