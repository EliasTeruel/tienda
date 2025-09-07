import { useState, useEffect } from "react";
import { getProductos } from "../../api/productosApi";
import { Icon } from "@iconify/react/dist/iconify.js";
import OpcionesProducto from "./OpcionesProducto";
import { Outlet } from "react-router-dom";

const ListaProductos = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);


  const [listaProductos, setListaProductos] = useState([]);
  useEffect(() => {
    fetchProductos(); // Al montar el componente, carga los productos
  }, []);

  const fetchProductos = async () => {
    try {
      const data = await getProductos(); // Llama a la función que hace el fetch
      // console.log("Productos obtenidos:", data); // Muestra los productos en la consola
      setListaProductos(data); // Actualiza el estado con los productos recibidos
    } catch (error) {
      console.error("Error al obtener productos:", error); // Muestra el error si falla la petición
    }
  };

  // obtenemos los keys de los productos para el encabezado
  const keys = listaProductos.length > 0
    ? [...Object.keys(listaProductos[0]), "acción"].filter(e => e !== "imagenes")
    : ["acción"];

  const handlerOpciones = (id) => {
    // Si el mismo id ya está abierto, lo cerramos
    if (productoSeleccionado === id) {
      setProductoSeleccionado(null);
    } else {
      setProductoSeleccionado(id);

    }
  };



  return (
    <div className="flex-1 shadow-md flex flex-col min-h-0 overflow-hidden rounded-md">
      <div className="flex-1 overflow-x-auto overflow-y-auto scroll-container">
        <table className="min-w-full bg-white rounded-md">
          <thead className="bg-zinc-900 sticky top-0 shadow-sm text-white z-40">
            <tr>
              {keys.map((e, i) => (
                <th key={i} className="px-4 py-1 font-normal ">{e.charAt(0).toUpperCase() + e.slice(1)}</th>

              ))}
            </tr>
          </thead>
          <tbody>
            {listaProductos.map((p) => (
              <tr key={p.id} className="text-center hover:bg-gray-100 border-b text-sm">
                <td className="px-4  border-r">{p.id}</td>
                <td className="px-4  border-r">{p.nombre}</td>
                <td className="px-4 border-r">{p.descripcion}</td>
                <td className="px-4 border-r">${p.precio}</td>
                <td className="px-4 relative flex justify-center">
                  <button
                    onClick={() => handlerOpciones(p.id)}
                    className=" text-gray-500 px-3 hover:scale-125 hover:text-black duration-300 transition"

                  >
                    <Icon height={25} icon="hugeicons:more-horizontal-square-01" />
                    {/* {productoSeleccionado === p.id ? "Ocultar" : "Mostrar"} */}
                  </button>
                  {/* Mostrar solo si el productoSeleccionado coincide con este id */}
                  {productoSeleccionado === p.id && (
                    <OpcionesProducto
                      producto={p}
                      onClose={() => setProductoSeleccionado(null)} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Outlet />
    </div>
  )
}

export default ListaProductos