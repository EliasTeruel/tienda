// App.jsx
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/rutas";
import { AuthProvider } from "./context/authContext";
function App() {
  return (
    <AuthProvider>
      <Navbar />
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
