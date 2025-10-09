import React from "react";
import Img1 from "../../assets/it.jpg";
import Img2 from "../../assets/desain.png";

const Perkenalan = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Bagian Gambar - sejajar kiri */}
        <div className="flex items-center justify-between px-10 py-20 gap-6">
          <div className="-translate-y-4">
            <img
              src={Img1}
              alt="Gedung KNEKS 1"
              className="rounded-lg shadow-md w-[760px] h-[460px] object-cover"
            />
            <div className="h-1 w-5/1 bg-indigo-600 mt-3 mx-auto md:mx-0"></div>
          </div>
          <div className="translate-y-4">
            <img
              src={Img2}
              alt="Gedung KNEKS 2"
              className="rounded-lg shadow-md w-[760px] h-[460px] object-cover"
            />
          </div>
        </div>

        {/* Bagian Teks - kanan */}
        <div>
          <h4 className="text-indigo-600 font-semibold uppercase tracking-wide mb-2">
            Perkenalkan
          </h4>
          <div className="h-1 w-1/3 bg-indigo-600 mt-3 mx-auto md:mx-0"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Galaksi Teknologi Nusantara
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Hadirnya kami dapat membangun ruang ide, inovasi, dan teknologi
            untuk tumbuh bersama. Visi kami adalah menjadi mitra teknologi
            terpercaya dalam membangun masa depan digital tanpa batas. Dengan
            melalui inovasi aplikasi, desain, dan sistem terintegrasi yang
            memberdayakan bisnis dan masyarakat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Perkenalan;
