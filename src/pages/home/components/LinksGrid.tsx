import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt
} from "react-icons/fa";

const LinksGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6">

      {/* WhatsApp */}
      <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition">
        <FaWhatsapp className="text-green-500 text-2xl mb-2" />
        <span className="text-sm font-medium text-gray-700">WHATSAPP</span>
      </div>

      {/* Localização */}
      <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition">
        <FaMapMarkerAlt className="text-red-500 text-2xl mb-2" />
        <span className="text-sm font-medium text-gray-700">LOCALIZAÇÃO</span>
      </div>

      {/* E-mail */}
      <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition">
        <FaEnvelope className="text-gray-600 text-2xl mb-2" />
        <span className="text-sm font-medium text-gray-700">E-MAIL</span>
      </div>

      {/* Website */}
      <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition">
        <FaGlobe className="text-gray-700 text-2xl mb-2" />
        <span className="text-sm font-medium text-gray-700">WEBSITE</span>
      </div>

      {/* Instagram */}
      <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition">
        <FaInstagram className="text-pink-500 text-2xl mb-2" />
        <span className="text-sm font-medium text-gray-700">INSTAGRAM</span>
      </div>

      {/* Facebook */}
      <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition">
        <FaFacebook className="text-blue-500 text-2xl mb-2" />
        <span className="text-sm font-medium text-gray-700">FACEBOOK</span>
      </div>

    </div>
  );
};

export default LinksGrid;
