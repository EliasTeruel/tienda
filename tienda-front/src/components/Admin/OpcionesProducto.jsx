import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";


const OpcionesProducto = ({ onClose, producto }) => {

  const ref = useRef(null);
  const lista = [
    { texto: "Ver", color: "bg-blue-500", icono: "gg:card-hearts", ruta: "ver" },
    { texto: "Editar", color: "bg-green-500", icono: "iconoir:edit", ruta: "" },
    { texto: "Eliminar", color: "bg-red-500", icono: "material-symbols:delete-outline-rounded", ruta: "" },
  ];

  const handlerClick = () => {
    onClose();
  };

  // Detectar click fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);


  return (
    <div
      ref={ref}
      className="absolute bg-white mt-5 rounded-lg shadow-lg p-1 w-24 space-y-1 border border-gray-200 z-40">
      {lista.map((e, i) => (
        <Link
          state={{ producto }} // 👈 mandamos el producto en la navegación
          to={e.ruta}
          key={i}
          onClick={() => handlerClick()}
          className={`${e.color} w-full px-2 rounded-md text-white text-sm flex justify-start items-center gap-1 hover:opacity-70 transition`}
        >
          <Icon height={16} icon={e.icono} />
          {e.texto}
        </Link>
      ))}
    </div>
  );
};

export default OpcionesProducto;
