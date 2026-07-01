"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/our-story" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-black/50 backdrop-blur-md border-white/20 shadow-lg"
          : "bg-transparent border-transparent"
      }`}
    >
      <div
        className={`grid grid-cols-3 items-center px-6 transition-all duration-300 ${
          scrolled ? "py-4" : "py-8"
        }`}
      >
        {/* Left side */}
        <div className="justify-start flex items-center gap-2 md:gap-4">
          <Image
            src="/images/michelinstar.webp"
            alt="Michelin Star"
            width={35}
            height={35}
          />
          <Image
            src="/images/michelinstar.webp"
            alt="Michelin Star"
            width={35}
            height={35}
          />
          <Image
            src="/images/michelinstar.webp"
            alt="Michelin Star"
            width={35}
            height={35}
          />
        </div>

        {/* Middle */}
        <div className="text-center font-tangerine">
          <Link
            href="/"
            className="text-3xl font-bold tracking-widest uppercase text-teal-50"
          >
            Jackdaw
          </Link>
          <p className="text-lg text-white">Paradise Island, Bahamas</p>
        </div>

        {/* Right Side (Desktop) */}
        <nav className="hidden md:flex justify-end text-white">
          <ul className="flex items-center gap-8 text-sm font-semibold tracking-[0.15em] uppercase">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="relative pb-1 transition-colors hover:text-teal-200 after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-teal-200 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/reservations"
                className="border border-white/80 px-6 py-2.5 text-xs tracking-[0.2em] transition-all hover:bg-white hover:text-black"
              >
                Reservations
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right side — mobile burger button */}
        <div className="flex md:hidden justify-end">
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-1.75 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-1.75 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
          }`}
        >
          <nav className="bg-black/70 backdrop-blur-md px-6 py-8">
            <ul className="flex flex-col items-center gap-6 text-sm font-semibold tracking-[0.15em] uppercase text-white">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="transition-colors hover:text-teal-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/reservations"
                  onClick={() => setMenuOpen(false)}
                  className="border border-white/80 px-8 py-2.5 text-xs tracking-[0.2em] transition-all hover:bg-white hover:text-black"
                >
                  Reservations
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
