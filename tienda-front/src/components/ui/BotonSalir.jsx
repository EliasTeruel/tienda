import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const BotonSalir = ({ menuSet, menuOpen }) => {

  return (
      <div
        className={`
        flex justify-end order-3 transition-all duration-300 px-10 pb-5
        ${menuOpen ? "ml-[200px]" : "ml-0"}
      `}
      >
        {/* <div className="flex items-center"> */}
          <Link to="/" onClick={menuSet} className="bg-blue-600 text-white px-3 py-1 font- rounded-sm flex items-center gap-2">
            <Icon height={20} icon="ic:twotone-exit-to-app" />
            Salir
          </Link>
        {/* </div> */}

      </div>
  )
}

export default BotonSalir;