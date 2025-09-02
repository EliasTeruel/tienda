import { Outlet } from "react-router-dom";
import { useState } from "react";
import Menu from "../../components/layout/Menu";
import Encabezado from "../../components/layout/encabezado";
import BotonSalir from "../../components/ui/BotonSalir";

const Admin = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-slate-200 h-screen flex flex-col ">
      {/* Encabezado recibe el toggle */}
      <Encabezado
        menuSet={() => setMenuOpen(!menuOpen)}
        menuOpen={menuOpen}  // <--- aquí pasamos el booleano
      />

      <BotonSalir></BotonSalir>
      <div className="flex flex-1 min-h-0">
        {/* Sidebar con animación */}
        <Menu menuOpen={menuOpen} />

        {/* Contenido dinámico */}
        <main
          className={`
          flex-1 px-10 pt-5 pb-3 transition-all duration-300
          ${menuOpen ? "ml-[200px]" : "ml-0"}
           flex flex-col min-h-0 overflow-hidden  
        `}
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Admin;