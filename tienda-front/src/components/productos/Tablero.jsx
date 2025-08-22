import { useState, useEffect } from "react";
import { getProductos } from "../../api/productosApi";
import Card from "./Card";
import Categorias from "./Categorias";


const Tablero = () => {
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

    console.log(listaProductos);

  return (
    <section className="pt-20 space-y-5 px-4 lg:px-20">
      <Categorias></Categorias>
        <h3 className="text-2xl">Novedades</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-16">
          {listaProductos.map((producto, i) => (
            <Card key={i} producto={producto} ></Card>
          ))}
        </div>
    </section>
  )
}

export default Tablero;