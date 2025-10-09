// src/components/Gallery.jsx
import React, { useState } from "react";

const photoGallery = [
  { id: 1, src: "/img/gallery1.jpg", title: "Aktivitas A" },
  { id: 2, src: "/img/gallery2.jpg", title: "Aktivitas B" },
  { id: 3, src: "/img/gallery3.jpg", title: "Aktivitas C" },
  { id: 4, src: "/img/gallery4.jpg", title: "Aktivitas D" },
  { id: 5, src: "/img/gallery5.jpg", title: "Aktivitas E" },
  { id: 6, src: "/img/gallery6.jpg", title: "Aktivitas F" },
];

const videoGallery = [
  { id: 1, src: "/video/company1.mp4", title: "Kegiatan Kantor" },
  { id: 2, src: "/video/company2.mp4", title: "Pelatihan Tim" },
  { id: 3, src: "/video/company3.mp4", title: "Kunjungan Lapangan" },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("foto");

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            GALERI PERUSAHAAN
          </h2>
          <p className="text-gray-600 mt-2">
            Dokumentasi segala aktivitas Galaksi Teknologi Nusantara
          </p>
        </div>

        {/* Tab Header (Centered) */}
        <div className="flex justify-center mb-8">
          <div className="border-b border-gray-300 flex space-x-2">
            <button
              onClick={() => setActiveTab("foto")}
              className={`px-6 py-2 font-medium ${
                activeTab === "foto"
                  ? "bg-gray-100 border border-b-0 border-gray-300 rounded-t-md text-blue-600"
                  : "text-gray-600 hover:bg-gray-100 rounded-t-md"
              }`}
            >
              Foto
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`px-6 py-2 font-medium ${
                activeTab === "video"
                  ? "bg-gray-100 border border-b-0 border-gray-300 rounded-t-md text-blue-600"
                  : "text-gray-600 hover:bg-gray-100 rounded-t-md"
              }`}
            >
              Video
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="border border-gray-300 rounded-b-md bg-white p-6">
          {activeTab === "foto" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {photoGallery.map((item) => (
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
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {videoGallery.map((video) => (
                <div
                  key={video.id}
                  className="relative group overflow-hidden rounded-xl shadow-md"
                >
                  <video
                    src={video.src}
                    controls
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    {video.title}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
