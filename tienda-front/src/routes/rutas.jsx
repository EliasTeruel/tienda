import { Routes, Route, Navigate } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Login from "../pages/Login";
import ProductosPage from "../pages/Admin/ProductosPage";
import Error from "../pages/Error";
import Admin from "../pages/Admin/Admin";
import Ventas from "../pages/Admin/Ventas";
import ListaProductos from "../components/Admin/ListaProductos";
import AgregarProducto from "../components/Admin/AgregarProducto";
import Dashboard from "../pages/Admin/Dashboard";
import Configuracion from "../pages/Admin/Configuracion";
import VerProducto from "../components/Admin/VerProducto";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Inicio />}>
        <Route path="auth" element={<Login />} /> {/* Login como modal */}
      </Route>

      <Route path="productos" element={<ProductosPage />} /> {/* Login como modal */}

      {/* ruta padre */}
      <Route path="/admin" element={<Admin />}>
        {/* redirige a /admin/productos */}
        <Route index element={<Navigate to="productos" replace />} />

        <Route path="productos" element={<ProductosPage />}>
          <Route index element={<ListaProductos />} />   {/* /admin/productos */}
          <Route path="lista" element={<ListaProductos />}>
            <Route path="ver" element={<VerProducto/>}/> 
          </Route>
          <Route path="agregar" element={<AgregarProducto />} />
        </Route>

        <Route path="ventas" element={<Ventas />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="configuracion" element={<Configuracion />} />
      </Route>


      {/* Ruta de error (catch all) */}
      <Route path="*" element={<Error />} />

    </Routes>
  );
};

export default AppRoutes;
