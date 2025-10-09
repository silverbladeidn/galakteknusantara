import React from "react";
import { PiBuildingOfficeLight, PiPhoneLight } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
export default function ContactPage() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-black ftext-3xl md:text-4xl font-semibold uppercase tracking-wide text-lg mb-4">
          Kontak Kami
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Silahkan hubungi kontak kami jika ingin bekerjasama atau membangun
          relasi.
        </p>
      </div>

      {/* Contact Info */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="flex justify-center mb-4">
            <PiBuildingOfficeLight className="w-10 h-10 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">
            Alamat Kami
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Apartemen Podomoro Golf View, Tower Dahoma, Unit 1503, Jalan
            Mochamad Thohir Cikudai, RT.32/RW.15, Bojong Nangka, Gunung Putri,
            Kabupaten Bogor, Jawa Barat 16963
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="flex justify-center mb-4">
            <PiPhoneLight className="w-10 h-10 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">
            Telepon Kami
          </h3>
          <p className="text-gray-700 text-sm">+62 859 5002 9053</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="flex justify-center mb-4">
            <MdEmail className="w-10 h-10 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">
            Email Kami
          </h3>
          <a
            href="mailto:galakteknusantara@gmail.com"
            className="text-indigo-600 hover:underline text-sm"
          >
            galakteknusantara@gmail.com
          </a>
        </div>
      </div>

      {/* Google Maps */}
      <div className="w-full h-[400px] mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.1793525417702!2d106.89304213418235!3d-6.430337320966952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb23f1db053b%3A0x152caf71ca139c4!2sPodomoro%20Golf%20View%20Apartemen%20Tower%20Dahoma!5e0!3m2!1sen!2sid!4v1759775851044!5m2!1sen!2sid"
          className="w-full h-full border-0"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
