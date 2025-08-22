// import AppRoutes from "../routes/rutas";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Tablero from "../components/productos/Tablero";

const Inicio = () => {

  return (
    <div className="h-scren bg-gradient-to-tl from-sky-200 via-pink-300 to-sky-200  ">
      <Navbar></Navbar>

      <Tablero />

      {/* <main className="">
        <AppRoutes />
      </main> */}

      {/* Aquí se montan las rutas hijas como modales */}
      <Outlet />
    </div>
  )
}

export default Inicio;