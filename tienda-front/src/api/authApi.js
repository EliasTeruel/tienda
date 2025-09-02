// src/api/authApi.js
import { getAuth } from "firebase/auth";

export async function apiFetch(url, options = {}) {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No hay usuario autenticado");
  }

  const token = await user.getIdToken();

  const headers = {
    ...options.headers,
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  return fetch(url, {
    ...options,
    headers,
  });
}
