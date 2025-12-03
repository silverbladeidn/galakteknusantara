import React from "react";
import Img1 from "../../assets/it.jpg";
import Img2 from "../../assets/desain.png";

const Perkenalan = () => {
  return (
    <section id="sejarah" className="w-full bg-white py-16">
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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 leading-snug mb-4">
            Sejarah Berdirinya Galaksi Teknologi Nusantara
          </h2>
          <div className="h-1 w-3/2 bg-indigo-600 mt-3 mx-auto md:mx-0"></div>
          <ol>
            <li>
              <p className="text-gray-700 leading-relaxed text-justify">
                Cikal bakal Galaksi Teknologi Nusantara (GalakTek Nusantara)
                berawal dari sebuah impian yang direncanakan sejak tahun 2023.
                Saat itu, persaingan di dunia kerja semakin ketat, dan semangat
                untuk menciptakan peluang sendiri menjadi pemicu utama lahirnya
                ide besar ini. Berbekal ilmu teknologi informasi yang diperoleh
                dari berbagai kursus dan pengalaman belajar mandiri, pendirinya
                mulai membangun visi untuk menghadirkan inovasi digital yang
                bermanfaat bagi masyarakat luas.
              </p>
            </li>
            <li>
              <p className="text-gray-700 leading-relaxed text-justify">
                Memasuki tahun 2025, semangat tersebut diwujudkan secara nyata.
                Dengan modal ilmu, kreativitas, dan tekad kuat, langkah awal
                dimulai dari membuat website gratis untuk beberapa pelanggan
                sebagai bentuk pembuktian kemampuan dan portofolio awal. Melalui
                proyek-proyek kecil inilah jaringan kerja dan kepercayaan mulai
                terbentuk.
              </p>
            </li>
            <li>
              <p className="text-gray-700 leading-relaxed text-justify">
                Tidak berhenti di situ, pendiri GalakTek Nusantara kemudian
                mengajak kawan-kawan tongkrongannya yang memiliki semangat dan
                visi serupa untuk bersatu membentuk sebuah tim solid di bidang
                teknologi. Kolaborasi ini melahirkan kekuatan baru yang menjadi
                fondasi perusahaan.
              </p>
            </li>
            <li>
              <p className="text-gray-700 leading-relaxed text-justify">
                Akhirnya, pada hari Kamis, 25 September 2025, secara resmi
                berdirilah Galaksi Teknologi Nusantara, atau yang dikenal dengan
                nama GalakTek Nusantara — sebuah perusahaan yang lahir dari
                mimpi, kerja keras, dan semangat kebersamaan untuk menciptakan
                solusi digital inovatif bagi Nusantara.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Perkenalan;
