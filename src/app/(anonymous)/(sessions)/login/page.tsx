"use client";

import Link from "next/link";
import { redirect } from "next/navigation";

async function handleSubmit() {
  redirect("/dashboard");
}

export default function LogIn() {
  return (
    <div className="my-12 p-8">
      <form action={handleSubmit} className="w-full p-6">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">Login</h1>
          <p className="text-gray-600 text-sm mt-1">
            Acesse sua conta utilizando e-mail ou CPF.
          </p>
        </div>

        <fieldset className="space-y-6">
          <div>
            <label
              htmlFor="login"
              className="block text-sm font-medium text-gray-900"
            >
              E-mail ou CPF
            </label>
            <input
              type="text"
              id="login"
              name="login"
              className="block w-full rounded-md border-gray-300 shadow-sm
                         focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Digite seu e-mail ou CPF"
            />
          </div>

          <div>
            <label
              htmlFor="senha"
              className="block text-sm font-medium text-gray-900"
            >
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              className="block w-full rounded-md border-gray-300 shadow-sm
                         focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Digite sua senha"
            />
          </div>
        </fieldset>

        <div className="mt-6 flex flex-col gap-4">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white text-sm font-semibold rounded-md px-4 py-2
                       hover:bg-indigo-500 shadow-md"
          >
            Entrar
          </button>
          <button
            type="button"
            className="w-full text-sm font-semibold text-gray-700"
          >
            Esqueceu sua senha?
          </button>
          <p className="text-center text-sm text-gray-600">
            Ainda não tem uma conta?&nbsp;
            <Link href="/register" className="text-indigo-600 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
