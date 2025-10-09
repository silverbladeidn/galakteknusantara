import React from "react";
import heroImg from "../../assets/meeting.jpg"; // ganti dengan gambar sendiri

export default function HeroSlider() {
    return (
        <section
            className="relative w-full min-h-screen flex items-center justify-center bg-center bg-cover"
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            {/* Overlay gelap */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Konten */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
                {/* Teks Kiri */}
                <div className="text-white max-w-lg">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Masa depan digital, tiada batas!
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Solsui cerdas untuk memudahkan masyarakat.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#features"
                            className="bg-indigo-400 hover:bg-indigo-700 hover:text-white transition px-6 py-3 rounded-md font-semibold"
                        >
                            Pelajari Lebih Lanjut
                        </a>
                        <a
                            href="#contact"
                            className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
                        >
                            Konsultasi
                        </a>
                    </div>
                </div>

                {/* Card Statistik */}
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl text-gray-800 grid grid-cols-2 gap-6 w-72">
                    <div>
                        <h2 className="text-3xl font-bold">2,3K+</h2>
                        <p className="text-sm">Armada Aktif</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">98%</h2>
                        <p className="text-sm">Efisiensi</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">50+</h2>
                        <p className="text-sm">Klien Besar</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">3,2K+</h2>
                        <p className="text-sm">Lokasi</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
