"use client";

import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-white">
      <nav className="flex p-8 justify-between items-center border-b border-lightgray max-w-7xl mx-auto">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/resources" className="hover:underline">
          Recursos
        </Link>
        <Link href="/plans" className="hover:underline">
          Planos e Preços
        </Link>
        <Link href="/about" className="hover:underline">
          Sobre o JurisAgenda
        </Link>
        <div className="flex space-x-4">
          <Link href="/login" className="hover:underline">
            <button className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
              Acessar Sistema
            </button>
          </Link>
          <Link href="/register">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Experimente o Sistema
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
