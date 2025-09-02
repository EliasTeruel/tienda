import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <div className="fixed inset-0 flex items-center justify-center flex-col bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white rounded-xl shadow-lg p-5 w-[400px]">
        <div className="bg-red-40 flex justify-end">
          <Link to="/" >
            <Icon icon="mdi:close" className="text-2xl" />
          </Link>
        </div>
        <h2 className="text-xl font-bold mb-4">Login Users</h2>
        {/* tu formulario acá */}
      </div>
    </div>
  )
}

export default Login;