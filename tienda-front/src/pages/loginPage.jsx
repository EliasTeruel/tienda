// src/pages/LoginPage.jsx
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login, loginGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginGoogle();
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };



  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Iniciar Sesión</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input 
          type="email" 
          placeholder="Correo" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Entrar
        </button>
      </form>
      <button onClick={handleGoogle} className="bg-red-500 text-white mt-4 p-2 rounded">
        Ingresar con Google
      </button>
    </div>
  );
};

export default LoginPage;
