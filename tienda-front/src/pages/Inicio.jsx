// import AppRoutes from "../routes/rutas";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Tablero from "../components/productos/Tablero";

const Inicio = () => {

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
      <Outlet />
    </div>
  )
}

export default Inicio;