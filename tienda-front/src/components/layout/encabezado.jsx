import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const Encabezado = ({ menuSet, menuOpen }) => {
  // console.log(menuOpen)
  return (
    <div
      className={`
        h-14 bg-white flex items-center px-10 shadow transition-all duration-300
        ${menuOpen ? "ml-[200px]" : "ml-0"}
      `}
    >
      <div className="flex items-center">
        <button onClick={menuSet} className="t">
          <Icon height={25} icon="mdi:menu" />
        </button>
      </div>

      <div className="flex items-center justify-end gap-2 ml-auto">
        <Link to="" className="w-10 h-10 rounded-full overflow-hidden bg-black">
          <img src="/OIP.webp" alt="foto" className="w-full h-full object-cover" />
        </Link>

        <Link to="" className="text-sm">
          <p className="font-medium">Nombre Usuario</p>
          <p className="text-xs text-black/80">Admin</p>
        </Link>
      </div>
    </div>
  );
};


export default Encabezado;