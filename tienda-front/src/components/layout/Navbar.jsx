import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";


const Navbar = ({ secciones, usuarioLogueado }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const loginBotones = [
    {
      nombre: "Registrarse",
      estilo: "bg-blue-300"
    },
    {
      nombre: "Ingresar",
      estilo: "bg-green-300"
    }
  ]

  const redes = [
    { nombre: "qlementine-icons:user-24", estilo: "hover:text-fuchsia-500" },
    // { nombre: "ic:baseline-facebook", estilo: "hover:text-blue-600" },
    // { nombre: "ic:baseline-whatsapp", estilo: "hover:text-green-500" },
    // { nombre: "mdi:gmail", estilo: "hover:text-red-600" }
  ];

  function capitalizar(frase) {
    return frase
      .split(" ")
      .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
      .join(" ");
  }

  const handlerRedes = (id) => {
    switch (id) {
      case 0:
        alert("Instagram");
        break;
      case 1:
        alert("Facebook");
        break;
      case 2:
        break;
      default:
        alert("Gmail");
        break
    }
  }

  return (
    <header className="fixed w-full h-[60px] text-black grid grid-cols-2 lg:grid-cols-3 items-center px-5 z-50 bg-slate-100">

      {/* Hamburguesa (solo mobile/tablet) */}
      <button
        onClick={() => setMenuAbierto(true)}
        className="text-3xl lg:hidden"
      >
        <Icon icon="mdi:menu" />
      </button>

      {/* Logo (derecha en mobile, izquierda en desktop) */}
      <Link to="/" className="flex justify-end lg:justify-start">
        <img src="/logo192.png" alt="logo-y2kat" className="w-[45px]" />
      </Link>

      {/* Menú horizontal solo en desktop */}
      <nav className="hidden lg:flex flex-1 justify-center gap-6 order-2">
        {secciones?.map((secc, i) => (
          <Link
            key={i}
            to={secc.ruta}
            className="text-base hover:text-blue-400 duration-300 font-medium"
          >
            {capitalizar(secc.texto)}
          </Link>
        ))}
      </nav>

      <div className="order-3 lg:flex hidden lg:justify-end">
        {usuarioLogueado ? (
          // 👉 Si hay usuario logueado, muestra foto y nombre
          <div className="flex items-center justify-end gap-2 ml-auto">
            <Link to="" className="w-10 h-10 rounded-full overflow-hidden bg-black">
              <img src="/OIP.webp" alt="foto" className="w-full h-full object-cover" />
            </Link>

            <Link to="" className="text-sm">
              <p className="font-medium">username</p>
              <p className="text-xs text-black/80">Admin</p>
            </Link>
          </div>
        ) : (
          // 👉 Si NO hay usuario, muestra los botones de login
          <div className="hidden lg:flex gap-3">
            {loginBotones.map((e, i) => (
              <Link
                key={i}
                to="/auth"
                className={`${e.estilo} px-3 py-1 font-medium rounded-sm`}
              >
                {e.nombre}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* botones log */}
      {/* <div className="hidden lg:flex justify-end gap-3 order-3">
        {loginBotones.map((e, i) => (
          <Link
            key={i}
            to="/auth"
            className={`${e.estilo} px-3 py-1 font-medium rounded-sm`}
          >
            {e.nombre}
          </Link>
        ))}
      </div> */}

      {/* <div className="lg:hidden flex justify-end">
        {redes.map((icono, i) => (
          <button key={i} onClick={() => handlerRedes(i)}>
            <Icon
              icon={icono.nombre}
              className={`text-2xl duration-300 ${icono.estilo}`}
            />

          </button>
        ))}
      </div> */}

      {/* Menú lateral mobile/tablet */}
      {menuAbierto && (
        <div className="fixed inset-0  flex lg:hidden z-50">

          <div className="w-2/3 max-w-[300px] bg-white h-full p-6 flex flex-col gap-4 shadow-lg animate-slide-in-left ">
            <div className="flex justify-end">
              <button onClick={() => setMenuAbierto(false)}>
                <Icon icon="mdi:close" className="text-2xl" />
              </button>
            </div>

            {secciones?.map((secc, i) => (
              <Link
                to={secc.ruta}
                key={i}
                className="flex items-center gap-3 text-lg hover:text-blue-400 duration-300"
                onClick={() => setMenuAbierto(false)}
              >
                <Icon icon={secc.icono} className="text-xl" />
                {capitalizar(secc.texto)}
              </Link>
            ))}

            <div className={`order-3 mt-auto flex pt-6 border-t border-gray-200 ${usuarioLogueado ? "justify-start" : "justify-center" } `}>
              {usuarioLogueado ? (
                // 👉 Si hay usuario logueado, muestra foto y nombre
                <div className="flex items-center gap-2">
                  <Link to="" className="w-10 h-10 rounded-full overflow-hidden bg-black">
                    <img src="/OIP.webp" alt="foto" className="w-full h-full object-cover" />
                  </Link>

                  <Link to="" className="text-sm">
                    <p className="font-medium">username</p>
                    <p className="text-xs text-black/80">Admin</p>
                  </Link>
                </div>
              ) : (
                // 👉 Si NO hay usuario, muestra los botones de login
                <div className="lg:hidden flex w-full flex-col gap-3">
                  {loginBotones.map((e, i) => (
                    <Link
                      key={i}
                      to="/auth"
                      className={`${e.estilo}  py-1 text-center font-medium rounded-sm`}
                    >
                      {e.nombre}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* <div className="mt-auto flex gap-4 pt-6 border-t border-gray-200 justify-center">
              {redes.map((icono, i) => (
                <button key={i} onClick={() => handlerRedes(i)}>
                  <Icon
                    icon={icono.nombre}
                    className={`text-2xl duration-300 ${icono.estilo}`}
                  />

                </button>
              ))}
            </div> */}
          </div>

          <div
            className="flex-1 bg-black bg-opacity-40"
            onClick={() => setMenuAbierto(false)}
          />
        </div>
      )}
    </header>
  );
}

export default Navbar;

