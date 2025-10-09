import React from "react";
import { Link } from "react-router-dom";

const Kontak = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-6xl mx-auto px-6">
        {/* Flex Container untuk Teks dan Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          {/* Teks di Kiri */}
          <div className="text-start flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ada pertanyaan terkait tentang jasa yang kami tawarkan?
            </h2>
            <p className="text-white mt-2">
              Silahkan bebas bertanya dengan menghubungi kontak kami.
            </p>
          </div>

          {/* Button di Kanan */}
          <div className="flex-shrink-0">
            <Link
              to="/kontak-kami"
              className="px-20 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-400 hover:text-black transition-colors"
            >
              Click Me
            </Link>
          </div>
        </div>

        {/* Grid Flip Cards - jika ada */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card content disini */}
        </div>
      </div>
    </section>
  );
};

export default Kontak;
