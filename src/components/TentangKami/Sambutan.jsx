import React from "react";
import Img2 from "../../assets/desain.png";

const Sambutan = () => {
  return (
    <section
      id="sambutan"
      className="relative w-full bg-gradient-to-b from-gray-50 to-white py-16"
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-black text-3xl md:text-4xl font-semibold uppercase tracking-wide mb-4">
            Tentang Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Segalanya menjelaskan tentang perusahaan kami yaitu Galaksi
            Teknologi Nusantara.
          </p>
        </div>
      </div>

      {/* Bagian Gambar - kiri, tetap proporsional */}

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="flex justify-center px-10">
          <img
            src={Img2}
            alt="Founder GalakTek Nusantara"
            className="rounded-lg shadow-md w-[760px] h-[460px] object-cover"
          />
        </div>

        {/* Bagian Teks */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Sambutan dari Founder
          </h2>
          <div className="h-1 w-54 bg-indigo-600 mt-3 mb-6"></div>

          <strong className="text-gray-700 leading-relaxed text-justify mb-4">
            Assalamu’alaikum warahmatullahi wabarakatuh.
          </strong>
          <br />
          <br />
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Segala puji bagi Allah Subhanahu wa Ta’ala atas rahmat dan
            kesempatan yang diberikan hingga akhirnya mimpi yang telah lama
            dirancang sejak tahun 2023 kini dapat terwujud dalam bentuk nyata.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Semula dari tekad sederhana yaitu bagaimana agar ilmu dan
            kreativitas di bidang teknologi informasi tidak hanya berhenti
            sebagai pengetahuan pribadi, tetapi bisa menjadi jalan untuk
            menciptakan peluang, karya, dan manfaat bagi banyak orang.
            Persaingan dunia kerja yang semakin ketat justru menjadi pemicu
            untuk berani melangkah dari angka nol dengan semangat, keyakinan,
            dan kepercayaan diri.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Kata <strong>“Galaksi”</strong> sendiri berasal dari bahasa Yunani{" "}
            <em>“galaxías kýklos”</em> yang berarti “lingkaran susu”,
            menggambarkan luasnya jagat raya tanpa batas. Filosofi inilah yang
            menjadi dasar dari lahirnya nama{" "}
            <strong>Galaksi Teknologi Nusantara</strong> — sebuah simbol dari
            visi untuk membangun{" "}
            <strong>masa depan digital yang tiada batas</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Bagi kami, teknologi bukan sekadar alat, melainkan jembatan
            penghubung menuju masa depan yang lebih baik, di mana setiap ide,
            kreativitas, dan inovasi dapat bersinar layaknya bintang-bintang di
            galaksi yang luas, membawa cahaya bagi kemajuan bangsa.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Melalui visi perusahaan kami,{" "}
            <em>
              “Menjadi mitra teknologi terpercaya dalam membangun masa depan
              digital tanpa batas”
            </em>
            , kami berkomitmen untuk terus berinovasi, beradaptasi, dan
            berkolaborasi dalam menghadirkan solusi digital yang bermanfaat bagi
            masyarakat dan dunia usaha.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify mb-6">
            Terima kasih kepada semua yang telah menjadi bagian dari perjalanan
            ini dan senantiasa memberikan dukungan serta kepercayaan. Mari kita
            terus melangkah bersama, menciptakan karya yang memberi arti bagi
            bangsa.
          </p>
          <p className="text-gray-900 font-semibold text-lg mt-6">
            Wassalamu’alaikum warahmatullahi wabarakatuh.
          </p>
          <p className="text-gray-800 font-bold mt-2">Ari Royani Biya</p>
          <p className="text-gray-600">
            Founder & CEO Galaksi Teknologi Nusantara
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sambutan;
