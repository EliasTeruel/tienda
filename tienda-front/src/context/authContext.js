// src/context/authContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { 
  onAuthStateChanged, 
  signOut, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup 
} from "firebase/auth";
import { auth, googleProvider } from "../api/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user || null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // LOGIN EMAIL
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  // REGISTER EMAIL
  const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  // LOGIN GOOGLE
  const loginGoogle = () => signInWithPopup(auth, googleProvider);

  // LOGOUT
  const logout = () => signOut(auth);


  // ✅ Obtener el token JWT de Firebase
  const getToken = async () => {
    if (!usuario) return null;
    return await usuario.getIdToken();
  };

  return (
    <AuthContext.Provider value={{ usuario, login, register, loginGoogle, logout, loading, getToken }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);