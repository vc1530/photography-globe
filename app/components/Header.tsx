"use client";

import ThemeToggle from "./ThemeToggle";
import { HeaderMenu } from "./HeaderMenu";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full text-xl z-50">
      <nav className="p-6 relative mx-auto flex justify-between items-center">
        <HeaderMenu />
        <ThemeToggle />
      </nav>
    </header>
  );
}
