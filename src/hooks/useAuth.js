import { useMutation } from "@tanstack/react-query";

const app = import.meta.env.VITE_APIURL;

const register = async (data) => {
  const res = await fetch(`${app}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message);
  }

  return result;
};

const login = async (data) => {
  const res = await fetch(`${app}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message);
  }

  return result;
};

export const useRegister = () =>
  useMutation({
    mutationFn: register,
  });

export const useLogin = () =>
  useMutation({
    mutationFn: login,
  });