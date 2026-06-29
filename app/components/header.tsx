"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/70 border-b-white ${
        scrolled ? "bg-black/90 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="grid grid-cols-3 items-center px-6 py-8">
        {/* Left side */}
        <div></div>

        {/* Middle */}
        <div className="text-center">
          <Link
            href="/"
            className="text-3xl font-black tracking-widest uppercase text-teal-50"
          >
            Jackdaw
          </Link>
          <p className="text-xs text-white">Paradise Island, Bahamas</p>
        </div>

        {/* Right Side */}
        <nav className="flex justify-end gap-8 text-teal-50">
          <ol></ol>
        </nav>
      </div>
    </header>
  );
}
