import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/auth");
  };

  const secciones = [
    { texto: "inicio", ruta: "/", icono: "ic:round-home" },
    { texto: "Gestion Productos", ruta: "/productos", icono: "mdi:hanger" },
    { texto: "entregas", ruta: "/auth", icono: "mdi:truck-delivery" },
    { texto: "Admin", ruta: "/admin", icono: "mdi:credit-card-outline" },
  ];

  function capitalizar(frase) {
    return frase
      .split(" ")
      .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
      .join(" ");
  }

  return (
    <header className="fixed w-full h-[60px] text-black grid grid-cols-3 lg:grid-cols-3 items-center px-5 z-50 bg-slate-100">

      {/* Hamburguesa (mobile) */}
      <button
        onClick={() => setMenuAbierto(true)}
        className="text-3xl lg:hidden"
      >
        <Icon icon="mdi:menu" />
      </button>

      {/* Logo */}
      <Link to="/" className="flex justify-center lg:justify-start">
        <img src="/logo192.png" alt="logo" className="w-[45px]" />
      </Link>

      {/* Menú horizontal (desktop) */}
      <nav className="hidden lg:flex flex-1 justify-center gap-6 order-2">
        {secciones.map((secc, i) => (
          <Link key={i} to={secc.ruta} className="hover:text-blue-400 font-medium">
            {capitalizar(secc.texto)}
          </Link>
        ))}
      </nav>

      {/* 🔒 Autenticación (desktop) */}
      <div className="hidden lg:flex justify-end gap-3 order-3">
        {!usuario ? (
          <>
            <Link to="/login" className="bg-blue-300 px-3 py-1 rounded-sm">Ingresar</Link>
            <Link to="/register" className="bg-green-300 px-3 py-1 rounded-sm">Registrarse</Link>
          </>
        ) : (
          <div className="flex items-center gap-3">
            {usuario.photoURL && (
              <img src={usuario.photoURL} alt="perfil" className="w-8 h-8 rounded-full border" />
            )}
            <span className="font-medium">{usuario.displayName || usuario.email}</span>
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Menú lateral (mobile) */}
      {menuAbierto && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <div className="w-2/3 max-w-[300px] bg-white h-full p-6 flex flex-col gap-4 shadow-lg animate-slide-in-left ">
            <div className="flex justify-end">
              <button onClick={() => setMenuAbierto(false)}>
                <Icon icon="mdi:close" className="text-2xl" />
              </button>
            </div>

            {secciones.map((secc, i) => (
              <Link
                key={i}
                to={secc.ruta}
                className="flex items-center gap-3 text-lg hover:text-orange-400"
                onClick={() => setMenuAbierto(false)}
              >
                <Icon icon={secc.icono} className="text-xl" />
                {capitalizar(secc.texto)}
              </Link>
            ))}

            {/* 🔒 Autenticación en el menú lateral */}
            <div className="mt-6 border-t pt-4 flex flex-col gap-2">
              {!usuario ? (
                <>
                  <Link to="/login" className="bg-blue-300 px-3 py-1 rounded-sm text-center">Ingresar</Link>
                  <Link to="/register" className="bg-green-300 px-3 py-1 rounded-sm text-center">Registrarse</Link>
                </>
              ) : (
                <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded text-white">
                  Logout
                </button>
              )}
            </div>
          </div>
          <div className="flex-1 bg-black bg-opacity-40" onClick={() => setMenuAbierto(false)} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
