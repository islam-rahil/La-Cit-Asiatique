"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "LA CARTE", href: "/about" },
  { label: "RÉSERVATIONS", href: "/services" },
  { label: "CONTACT & ACCÈS", href: "/pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-[#FDF9F4]/90 backdrop-blur-md shadow-sm border-b border-[#C4C7C7]/40"
          : "bg-[#FDF9F4]"
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 md:h-20 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0 transition-transform duration-300 hover:scale-[1.02]"
        >
          <Image
            src="/logo.jpg"
            alt="La Cité Asiatique"
            width={40}
            height={40}
            priority
            className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover ring-1 ring-[#C4C7C7]"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm md:text-base font-serif tracking-wide text-[#1C1C19]">
              LA CITÉ ASIATIQUE
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#1C1C19]/50">
              ALGER
            </span>
          </div>
        </Link>

        {/* Desktop nav — centrée */}
        <ul className="hidden md:flex items-center gap-1 justify-self-center">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative inline-block px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-colors duration-200 ${
                    active
                      ? "text-[#AE2F35]"
                      : "text-[#1C1C19] hover:text-[#AE2F35]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Droite : CTA + langue (desktop) / burger (mobile) */}
        <div className="flex items-center justify-end gap-4 justify-self-end">
          <Link
            href="/InscrivezVous"
            className="hidden md:inline-flex text-sm font-semibold tracking-wide text-[#1C1C19] hover:text-[#AE2F35] transition-colors duration-200"
          >
            RÉSERVER
          </Link>

          

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            className="md:hidden p-2 rounded-lg text-[#1C1C19] hover:text-[#AE2F35] transition-colors duration-300"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                }`}
                size={24}
              />
              <X
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                }`}
                size={24}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden bg-[#FDF9F4]/95 backdrop-blur-md transition-[max-height,opacity] duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 border-b border-[#C4C7C7]" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-4 py-4 border-t border-[#C4C7C7]/50">
          {navLinks.map((link, i) => {
            const active = pathname === link.href;
            return (
              <li
                key={link.label}
                style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
                className={`transform transition-all duration-300 ${
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block px-4 py-3 rounded-xl text-lg font-semibold transition-colors duration-200 ${
                    active
                      ? "text-[#AE2F35] bg-[#AE2F35]/10"
                      : "text-[#1C1C19] hover:text-[#AE2F35] hover:bg-[#AE2F35]/10"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/InscrivezVous"
              onClick={() => setIsOpen(false)}
              className="block text-center text-[#AE2F35] hover:text-[#C40723] hover:bg-[#AE2F35]/10 px-4 py-3 rounded-xl font-semibold mt-2 transition-colors duration-200"
            >
              RÉSERVER UNE TABLE
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}