"use client";

import React from "react";
import { inter } from "@/shared/lib/fonts/inter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={`${inter.className} flex flex-col min-h-screen`}>
      <main className="flex-grow flex items-center justify-center">
        {children}
      </main>
    </body>
  );
}
