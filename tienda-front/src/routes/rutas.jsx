import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Login from "../pages/Login";
import ProductosPage from "../pages/ProductosPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />}>
        <Route path="auth" element={<Login />} /> {/* Login como modal */}
      </Route>
      <Route path="productos" element={<ProductosPage />} /> {/* Login como modal */}
    </Routes>
  );
};

export default AppRoutes;
