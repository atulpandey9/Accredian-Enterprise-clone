import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

export default function Footer({ onOpenModal }) {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 pb-6 gap-8 mt-6 border-b border-gray-700">

          <div className="flex flex-col gap-5">
            {/* Logo */}
            <div>
              <h2 className="text-[#1A73E8] text-[32px] font-bold tracking-tight leading-none">accredian</h2>
              <p className="text-gray-400 text-[11px] font-medium tracking-wide mt-1">credentials that matter</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-gray-600 mt-2">
              <a href="https://www.facebook.com/accredianlearn" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A73E8] transition-colors"><FaFacebookF className="w-5 h-5 fill-current" /></a>
              <a href="https://in.linkedin.com/school/accredianedu/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A73E8] transition-colors"><FaLinkedinIn className="w-5 h-5 fill-current" /></a>
              <a href="https://x.com/accredianedu" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A73E8] transition-colors"><FaTwitter className="w-5 h-5 fill-current" /></a>
              <a href="https://www.instagram.com/accredian_edu" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A73E8] transition-colors"><FaInstagram className="w-5 h-5" /></a>
              <a href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A73E8] transition-colors"><FaYoutube className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="flex flex-col md:items-end mt-8 md:mt-0 gap-3">
            <button
              onClick={onOpenModal}
              className="bg-[#1A73E8] hover:bg-blue-600 text-white px-7 py-2.5 rounded font-medium transition-colors cursor-pointer text-sm"
            >
              Enquire Now
            </button>
            <p className="text-[13px] text-gray-700 font-medium">Speak with our Advisor</p>
          </div>

        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between py-8 border-b border-gray-300">

          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-black mb-1">Accredian</h3>
            <ul className="space-y-3.5 text-[15px] text-gray-700">
              <li><a href="https://accredian.com/About" className="hover:text-[#1A73E8] transition-colors">About</a></li>
              <li><a href="https://blog.accredian.com/" className="hover:text-[#1A73E8] transition-colors">Blog</a></li>
              <li><a href="https://accredian.com/whyaccredian" className="hover:text-[#1A73E8] transition-colors">Why Accredian</a></li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 mt-8 md:mt-0">
            <h3 className="text-base font-bold text-black mb-1">Contact Us</h3>
            <div className="space-y-3.5 text-[15px] text-gray-700 max-w-[400px]">
              <p>Email us: <a href="mailto:enterprise@accredian.com" className="text-[#1A73E8] hover:underline">enterprise@accredian.com</a></p>
              <p className="leading-relaxed">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-6 text-center text-[#4B5563] text-sm">
          <p>© 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
}
