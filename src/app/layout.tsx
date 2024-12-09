import React from "react";
import Header from "@/shared/components/header/header";
import "./global.css";

export const metadata = {
  title: "Office",
  description: "Office",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
