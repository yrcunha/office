"use client";

import React from "react";
import "./global.css";
import Header from "@/shared/components/header/header";
import { inter } from "@/shared/lib/fonts/inter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Office</title>
        <meta name="description" content="Office" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
