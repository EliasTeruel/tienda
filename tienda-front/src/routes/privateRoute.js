// src/routes/privateRoute.js

import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { usuario, loading } = useAuth();
  if (loading) return <p>Cargando...</p>;
  return usuario ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
