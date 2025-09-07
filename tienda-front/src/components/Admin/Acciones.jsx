import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Acciones = ({ titulo }) => {
  const acciones = [
    { nombre: "Lista", icono: "f7:square-list", ruta: "lista" },
    { nombre: "Agregar", icono: "solar:widget-add-line-duotone", ruta: "agregar" },
    // { nombre: "Dashboard", icono: "fluent-mdl2:b-i-dashboard", ruta: "" },
    // { nombre: "Configuración", icono: "ion:settings-outline", ruta: "" },
  ];

  return (
    <div className="bg-red grid grid-cols-1 lg:grid-cols-2 z-40 gap-1  h-8">
      <div className="flex lg:items-end text-xl font-medium ">
        <h2 className="text-2xl">{titulo}</h2>
      </div>
      <div className=" flex gap-5 h-8 lg:justify-end">

        {acciones.map((e, i) => (
          <Link to={e.ruta} key={i} className="bg-blue-600 rounded-sm flex text-white items-center gap-2 py-1 px-2">
            <Icon height={20} icon={e.icono}></Icon>
            {e.nombre}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Acciones;