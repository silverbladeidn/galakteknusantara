import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Tambahkan ini

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-gray-300 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">
          Galaksi Teknologi Nusantara
        </h1>
        <div className="space-x-6">
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-700"
            }
          >
            Beranda
          </Link>

          {/* Dropdown Tentang Kami */}
          <div
            className="relative inline-block"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link
              to="/tentang-kami"
              className={`font-semibold cursor-pointer ${
                location.pathname === "/tentang-kami"
                  ? "text-indigo-600"
                  : "text-gray-700 hover:text-indigo-700"
              }`}
            >
              Tentang Kami
            </Link>

            {isDropdownOpen && (
              <div
                className="absolute left-0 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
                style={{ top: "100%" }}
              >
                <HashLink
                  smooth
                  to="/tentang-kami#sambutan"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  Sambutan
                </HashLink>
                <HashLink
                  smooth
                  to="/tentang-kami#sejarah"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  Sejarah Perusahaan
                </HashLink>
                <HashLink
                  smooth
                  to="/tentang-kami#visi-misi"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  Visi & Misi
                </HashLink>
                <HashLink
                  smooth
                  to="/tentang-kami#tim-kami"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  Tim Kami
                </HashLink>
              </div>
            )}
          </div>

          <Link
            to="/solusi-kami"
            className={
              location.pathname === "/solusi-kami"
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-700"
            }
          >
            Solusi Kami
          </Link>
          <Link
            to="/portofolio"
            className={
              location.pathname === "/portofolio"
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-700"
            }
          >
            Portfolio Kami
          </Link>
          <Link
            to="/galeri-kami"
            className={
              location.pathname === "/galeri-kami"
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-700"
            }
          >
            Galeri
          </Link>
          <Link
            to="/kontak-kami"
            className={
              location.pathname === "/kontak-kami"
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-700"
            }
          >
            Kontak
          </Link>
        </div>
      </div>
    </nav>
  );
}
