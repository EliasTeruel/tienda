// import AppRoutes from "../routes/rutas";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Tablero from "../components/productos/Tablero";

const Inicio = () => {

<<<<<<< HEAD
  const secciones = [
    { texto: "inicio", ruta: "/", icono: "ic:round-home" },
    { texto: "Gestion", ruta: "/productos", icono: "mdi:hanger" }, // ícono de ropa en móvil
    { texto: "entregas", ruta: "/auth", icono: "mdi:truck-delivery" },
    { texto: "Admin", ruta: "/admin", icono: "mdi:credit-card-outline" },
    // { texto: "sobre mi", ruta: "sobremi", icono: "mdi:account-circle-outline" }
  ];
  return (
    <div className="h-scren bg-gradient-to-tl from-sky-200 via-pink-300 to-sky-200  ">
      <Navbar secciones={secciones} usuarioLogueado={false}></Navbar>
      <Tablero />
=======
  return (
    <div className="h-scren bg-gradient-to-tl from-sky-200 via-pink-300 to-sky-200  ">
      <Navbar></Navbar>

      <Tablero />

      {/* <main className="">
        <AppRoutes />
      </main> */}

      {/* Aquí se montan las rutas hijas como modales */}
>>>>>>> 2681b39bb6a30aeb24cdf2817cd92e5eafd0e13e
      <Outlet />
    </div>
  )
}

export default Inicio;