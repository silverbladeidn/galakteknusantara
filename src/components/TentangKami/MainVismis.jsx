import React from "react";

export default function MainVismis() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-3xl font-extrabold text-center mb-20 text-gray-800">
          Visi & Misi Kami
        </h2>

        {/* Garis diagonal dekoratif */}
        <div className="absolute left-1/2 top-20 w-px h-[500px] bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative">
          {/* Visi di kiri atas */}
          <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 md:translate-y-[-40px]">
            <h3 className="text-2xl font-bold mb-4 text-indigo-600">Visi</h3>
            <p className="text-gray-700 leading-relaxed">
              Menjadi mitra teknologi terpercaya dalam membangun masa depan
              digital tanpa batas — melalui inovasi, kreativitas, dan solusi
              digital yang memberdayakan bisnis serta masyarakat.
            </p>
          </div>

          {/* Misi di kanan bawah */}
          <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 md:translate-y-[60px]">
            <h3 className="text-2xl font-bold mb-4 text-indigo-600">Misi</h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                Mengembangkan solusi aplikasi dan sistem digital yang
                meningkatkan efisiensi, produktivitas, dan daya saing.
              </li>
              <li>
                Menyediakan layanan desain dan multimedia yang profesional untuk
                memperkuat citra dan komunikasi merek.
              </li>
              <li>
                Mendorong penerapan teknologi terintegrasi yang memudahkan
                pengelolaan sumber daya dan operasional.
              </li>
              <li>
                Menumbuhkan kolaborasi lintas sektor untuk mempercepat
                transformasi digital nasional.
              </li>
              <li>
                Menjalin kemitraan strategis untuk memperluas jangkauan layanan.
              </li>
              <li>
                Mewujudkan budaya kerja inovatif, adaptif, dan berorientasi pada
                keberlanjutan teknologi.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
