"use client";

import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-screen">
      <aside className="flex flex-col justify-center items-center w-2/6 bg-blue-50">
        <h1 className="text-3xl font-bold text-gray-700">Em Construção</h1>
        <p className="text-gray-500 mt-4 text-center max-w-xs">
          Esta área está em desenvolvimento. Em breve, traremos novidades!
        </p>
      </aside>
      <section className="flex flex-col justify-center items-center w-4/6 bg-white p-8 shadow-md">
        <div className="w-full">{children}</div>
      </section>
    </div>
  );
}
