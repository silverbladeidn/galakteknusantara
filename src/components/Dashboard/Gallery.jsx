// src/components/Gallery.jsx
import React from "react";

const images = [
  { id: 1, src: "/img/gallery1.jpg", title: "Aktivitas A" },
  { id: 2, src: "/img/gallery2.jpg", title: "Aktivitas B" },
  { id: 3, src: "/img/gallery3.jpg", title: "Aktivitas C" },
  { id: 4, src: "/img/gallery4.jpg", title: "Aktivitas D" },
  { id: 5, src: "/img/gallery5.jpg", title: "Aktivitas E" },
  { id: 6, src: "/img/gallery6.jpg", title: "Aktivitas F" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Galeri Kegiatan
          </h2>
          <p className="text-gray-600 mt-2">
            Dokumentasi segala aktivitas Galaksi Teknologi Nusantara
          </p>
        </div>

        {/* Grid Gambar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-lg font-semibold">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
