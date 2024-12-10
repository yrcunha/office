"use client";

import Link from "next/link";
import { redirect } from "next/navigation";

async function handleSubmit() {
  redirect("/login");
}

export default function Register() {
  return (
    <div className="my-12 p-8">
      <form action={handleSubmit}>
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Cadastro</h1>
          <p className="text-gray-600 text-sm mt-1">
            Preencha as informações abaixo para criar seu cadastro.
          </p>
        </div>

        <fieldset className="mb-8">
          <legend className="text-lg font-medium text-gray-900 mb-4">
            Informações Pessoais
          </legend>
          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full rounded-md border-gray-300 shadow-sm
                   focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label
                htmlFor="socialName"
                className="block text-sm font-medium text-gray-900"
              >
                Nome Social
              </label>
              <input
                type="text"
                id="socialName"
                name="socialName"
                className="block w-full rounded-md border-gray-300 shadow-sm
                   focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Seu nome social (opcional)"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
              <div>
                <label
                  htmlFor="document"
                  className="block text-sm font-medium text-gray-900"
                >
                  Documento
                </label>
                <input
                  type="text"
                  id="document"
                  name="document"
                  className="block w-full rounded-md border-gray-300 shadow-sm
                     focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="CPF"
                />
              </div>

              <div>
                <label
                  htmlFor="oab"
                  className="block text-sm font-medium text-gray-900"
                >
                  OAB
                </label>
                <input
                  type="text"
                  id="oab"
                  name="oab"
                  className="block w-full rounded-md border-gray-300 shadow-sm
                     focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="OAB/BA"
                />
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className="mb-8">
          <legend className="text-lg font-medium text-gray-900 mb-4">
            Contato
          </legend>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full rounded-md border-gray-300 shadow-sm
                           focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="telefone"
                className="block text-sm font-medium text-gray-900"
              >
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                className="block w-full rounded-md border-gray-300 shadow-sm
                           focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="(99) 9 9999-9999"
              />
            </div>
          </div>
        </fieldset>

        <div className="mt-6 flex flex-col gap-4">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white text-sm font-semibold rounded-md px-4 py-2
                       hover:bg-indigo-500 shadow-md"
          >
            Salvar
          </button>
          <p className="text-center text-sm text-gray-600">
            Já tem uma conta?&nbsp;
            <Link href="/login" className="text-indigo-600 hover:underline">
              Faça login
            </Link>
          </p>
        </div>

        <div className="mt-6 text-sm text-gray-600">
          <p>Após o teste, não é gerada nenhuma cobrança automática.</p>
          <br />
          <p>
            Confirmando seu cadastro, você declara que leu e aceitou:&nbsp;
            <a href="#" className="text-indigo-600 hover:underline">
              os Termos de Uso
            </a>
            &nbsp;e a&nbsp;
            <a href="#" className="text-indigo-600 hover:underline">
              Política de Privacidade do JurisAgenda
            </a>
            , além da&nbsp;
            <a href="#" className="text-indigo-600 hover:underline">
              Política de Privacidade dos nossos sites
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
