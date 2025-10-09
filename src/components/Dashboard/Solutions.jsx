// src/components/Solutions.jsx
import React from "react";
import { MdOutlineDevices, MdDesignServices } from "react-icons/md";
import { FaTruckMoving } from "react-icons/fa";

const solutions = [
  {
    id: 1,
    icon: <MdOutlineDevices size={40} className="text-indigo-500" />,
    title: "Jasa Pengembangan Aplikasi",
    desc: "Solusi aplikasi yang dirancang untuk meningkatkan efisiensi, produktivitas, dan daya saing perusahaan Anda.",
  },
  {
    id: 2,
    icon: <MdDesignServices size={40} className="text-green-500" />,
    title: "Jasa Desain Grafis, Video, dan Animasi",
    desc: "Menyediakan solusi visual profesional yang menarik, informatif, dan sesuai identitas perusahaan.",
  },
  {
    id: 3,
    icon: <FaTruckMoving size={40} className="text-red-500" />,
    title: "IFAM (Integrated Fleet and Asset Management)",
    desc: "Sistem terpadu untuk mengelola armada serta aset pendukungnya, seperti sparepart, bahan bakar, dan perawatan, secara efisien, akurat, dan real-time.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Apa yang Kami Tawarkan
          </h2>
          <p className="text-gray-600 mt-2">
            Menghadirkan produk dan layanan digital untuk membantu bisnis lebih berkembang ke masa depan.
          </p>
        </div>

        {/* Grid Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="group perspective cursor-pointer"
            >
              <div className="relative preserve-3d group-hover:rotate-x-180 duration-700 w-full h-64">
                
                {/* Depan: Icon + Judul */}
<div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-700 text-white shadow-lg rounded-xl backface-hidden p-6">
  {item.icon}
  <h3 className="text-xl font-semibold mt-4 text-center leading-snug max-w-[220px]">
    {item.title}
  </h3>
</div>

                
                {/* Belakang: Deskripsi */}
                <div className="absolute inset-0 flex items-center justify-center bg-indigo-600 text-white rounded-xl backface-hidden rotate-x-180 p-6">
                  <p className="text-center">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
