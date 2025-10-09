import React from "react";
import inventopia from "../../assets/inventopia.png";

const Portfolio = () => {
  const solutions = [
    {
      id: 1,
      title: "Website Pengelolaan Inventori Sekolah",
      image: inventopia,
      description:
        "Sistem berbasis web yang membantu sekolah dalam mengelola data inventaris seperti peralatan, buku, dan aset sekolah secara efisien. Dilengkapi fitur pencatatan, pelacakan, permintaan, serta laporan real-time untuk mendukung transparansi dan kemudahan administrasi aset.",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-black ftext-3xl md:text-4xl font-semibold uppercase tracking-wide text-lg mb-4">
            Portfolio Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Semua hasil kerja kami menjadi fondasi untuk mendukung pengembangan
            bisnis menuju masa depan digital yang berkelanjutan.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                  {solution.description}
                </p>
                <button className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                  Selengkapnya
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section
        <div className="text-center mt-12">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
            Lihat Semua Solusi
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
