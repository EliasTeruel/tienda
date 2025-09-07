import { Outlet } from "react-router-dom";
import { useState } from "react";
import Menu from "../../components/layout/Menu";
import Encabezado from "../../components/layout/encabezado";
import BotonSalir from "../../components/ui/BotonSalir";
<<<<<<< HEAD
import Navbar from "../../components/layout/Navbar";

const Admin = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  const secciones = [
    { texto: "Productos", ruta: "productos", icono: "bx:box" },
    { texto: "Ventas", ruta: "ventas", icono: "carbon:sales-ops" }, // ícono de ropa en móvil
    { texto: "Dashboard", ruta: "dashboard", icono: "fluent-mdl2:b-i-dashboard" },
    { texto: "Configuración", ruta: "Configuracion", icono: "ion:settings-outline" },
    // { texto: "sobre mi", ruta: "sobremi", icono: "mdi:account-circle-outline" }
  ];

  return (
    <div className="bg-slate-200 h-screen flex flex-col items-cente">
      <Navbar secciones={secciones} usuarioLogueado={true}></Navbar>
      <BotonSalir></BotonSalir>
      {/* <div className="flex flex-1 min-h-0"> */}
        {/* Sidebar con animación */}
        {/* <Menu menuOpen={menuOpen} /> */}

        {/* Contenido dinámico */}
        {/* <main
=======

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
>>>>>>> 2681b39bb6a30aeb24cdf2817cd92e5eafd0e13e
          className={`
          flex-1 px-10 pt-5 pb-3 transition-all duration-300
          ${menuOpen ? "ml-[200px]" : "ml-0"}
           flex flex-col min-h-0 overflow-hidden  
        `}
<<<<<<< HEAD
        > */}
          <Outlet />
        {/* </main> */}
      {/* </div> */}
=======
        >
          <Outlet />
        </main>
      </div>
>>>>>>> 2681b39bb6a30aeb24cdf2817cd92e5eafd0e13e
    </div>
  )
}

export default Admin;