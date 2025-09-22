"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/home",
    });
  };

  const handleGoogleSignIn = async () => {
    await signIn("google", {
      redirect: true,
      callbackUrl: "/home",
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Formulario a la izquierda */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-gray-700">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center">
            Bienvenido Nuevamente
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Contacte al administrador si no tiene una cuenta.
            <a href="#" className="text-blue-500 underline"> Sign up</a>.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="flex justify-between items-center text-sm text-gray-500">
              <label className="flex items-center gap-1">
                <input type="checkbox" />
                Recordar contraseña
              </label>
              <a href="#" className="text-blue-500">Olvidé contraseña?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Entrar
            </button>
          </form>

          {/* Botón de Google */}
          <div className="mt-6">
            <button
              onClick={handleGoogleSignIn}
              className="w-full bg-red-400 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition flex items-center justify-center gap-2"
            >
              <img
                src="/icons8-google-48.png" // coloca tu logo de Google en public/google-logo.svg
                alt="Google Logo"
                className="w-5 h-5"
              />
              Entrar con Google
            </button>
          </div>
        </div>
      </div>

      {/* Imagen a la derecha */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-indigo-50">
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
          alt="Login Illustration"
          className="object-contain h-full"
        />
      </div>
    </div>
  );
}
