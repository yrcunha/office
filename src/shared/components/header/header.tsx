import headerStyles from "./header.module.css";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <nav id={headerStyles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/status">Status</Link>
      </nav>
    </header>
  );
}
