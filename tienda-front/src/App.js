// App.jsx
<<<<<<< HEAD
import AppRoutes from "./routes/rutas";

function App() {
  return (
    <div>
      <AppRoutes />
    </div>
=======
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/rutas";
import { AuthProvider } from "./context/authContext";
function App() {
  return (
    <AuthProvider>
      <Navbar />
      <AppRoutes />
    </AuthProvider>
>>>>>>> 2681b39bb6a30aeb24cdf2817cd92e5eafd0e13e
  );
}

export default App;
