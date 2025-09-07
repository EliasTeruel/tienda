// src/hooks/useAuth.jsx
import { useAuthContext } from "../context/authContext";

export const useAuth = () => {
  return useAuthContext();
};
