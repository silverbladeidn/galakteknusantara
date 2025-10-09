import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Ari Royani Biya",
    position: "Founder & Chief Executive Officer",
    image: null,
  },
  {
    id: 2,
    name: "Muhammad Inzaghi Alfarizi",
    position: "Chief Marketing Officer",
    image: null,
  },
  {
    id: 3,
    name: "Mufighani Robbiansyah Santoso",
    position: "Vice President of Marketing",
    image: null,
  },
  {
    id: 4,
    name: "Sammy Zishan Hafeez",
    position: "Vice President of Marketing",
    image: null,
  },
];

const TimKami = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-black text-3xl md:text-4xl font-semibold uppercase tracking-wide mb-4">
            Tim Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Inilah tim Galaksi Teknologi Nusantara yang berperan penting dalam
            pengembangan dan perjalanan perusahaan.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              {/* Foto Profil (pakai alt text kalau belum ada gambar) */}
              <div className="w-36 h-36 mb-6 flex items-center justify-center rounded-full border-4 border-indigo-600 bg-gray-100 text-indigo-600 font-semibold text-xl shadow-md">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <span>{member.name.split(" ")[0]}</span>
                )}
              </div>

              {/* Nama dan Jabatan */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimKami;
