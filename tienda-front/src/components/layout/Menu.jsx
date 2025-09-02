import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Menu = ({ menuOpen }) => {
  const secciones = [
    { nombre: "Productos", icono: "bx:box", ruta: "productos" },
    { nombre: "Ventas", icono: "carbon:sales-ops", ruta: "ventas" },
    { nombre: "Dashboard", icono: "fluent-mdl2:b-i-dashboard", ruta: "dashboard" },
    { nombre: "Configuración", icono: "ion:settings-outline", ruta: "configuracion " },
  ];

  return (
    <div
      className={`
        bg-black/90 w-[200px] h-screen fixed top-0 left-0 z-50 text-white space-y-10
        transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="flex gap-2 items-center justify-center mx-5 pt-3 pb-1 bg-red-0 border-b border-white">
        {/* <Link className="flex justify-center "> */}
          <img src="/logo192.png" alt="logo-y2kat" className="w-10 h-10" />
        {/* </Link> */}
        <h2 className="px-3 text-lg font-bold text-center">Gestionar</h2>
      </div>
      <div className="flex flex-col gap-8 px-3">
        {secciones.map((e, i) => (
          <Link
            key={i}
            to={e.ruta}
            className="flex gap-5 px-2 py-1 rounded-md hover:bg-slate-400 items-center"
          >
            <Icon height={24} icon={e.icono} />
            {e.nombre}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
