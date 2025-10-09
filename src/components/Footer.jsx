import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Galaksi Teknologi Nusantara
            </h2>
            <p className="text-sm">Masa depan digital, tiada batas!</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Tautan Cepat
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/tentang-kami"
                  className="hover:text-white transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/solusi-kami"
                  className="hover:text-white transition-colors"
                >
                  Solusi Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/portofolio"
                  className="hover:text-white transition-colors"
                >
                  Portofolio Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/galeri-kami"
                  className="hover:text-white transition-colors"
                >
                  Galeri
                </Link>
              </li>
              <li>
                <Link
                  to="/kontak-kami"
                  className="hover:text-white transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontak</h3>
            <div className="space-y-2">
              <p className="text-sm">
                Alamat: Apartemen Podomoro Golf View, Tower Dahoma, Unit 1503,
                Jalan Mochamad Thohir Cikudai, RT.32/RW.15, Bojong Nangka,
                Gunung Putri, Kabupaten Bogor, Jawa Barat 16963
              </p>
              <p className="text-sm">Email: galakteknusantara@gmail.com</p>
              <p className="text-sm">Telp: +62 859 5002 9053</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.instagram.com/galaktek_nusantara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                >
                  <FaInstagram
                    size={24}
                    className="text-gray-400 hover:text-white"
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                >
                  <FaFacebook
                    size={24}
                    className="text-gray-400 hover:text-white"
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                >
                  <FaXTwitter
                    size={24}
                    className="text-gray-400 hover:text-white"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} PT. Galaksi Teknologi Nusantara. Semua
            Hak Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
