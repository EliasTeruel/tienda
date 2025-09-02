import { Link, useLocation } from "react-router-dom";
import Card from "../productos/Card";
import { Icon } from "@iconify/react/dist/iconify.js";

const VerProducto = () => {
  const { state } = useLocation();
  const producto = state?.producto;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
    >
      {/* Contenedor del modal */}
      <div className="bg-white p-4 rounded-md shadow-xl max-w-lg flex flex-col gap-4">

        <div className="w-[220px]">
          {producto ? (<Card producto={producto} />) : (<p>No se encontró producto</p>)}
        </div>
        

        <div className="flex justify-center gap-4">
          <button className="text-white py-1 w-full rounded-md hover:bg-black/80 flex justify-center bg-green-500">Editar</button>
          <button className="text-white py-1 w-full rounded-md hover:bg-black/80 flex justify-center bg-red-500">Eliminar</button>
        </div>
        {/* Botón de cierre */}
        <Link
          to=".."
          relative="path"
          className="text-white py-1 rounded-md hover:bg-black/80 flex justify-center bg-black/90"
        >
          {/* <Icon height={24} icon="gg:close-r"></Icon> */}
          Cerrar
        </Link>

      </div>
    </div>
  );
};

export default VerProducto;
