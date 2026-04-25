import { Hash, MessageCircle, Link2, Image as ImageIcon, Video } from "lucide-react";

export default function Footer({ onOpenModal }) {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">accredian</h2>
            <p className="text-gray-400">credentials that matter</p>
          </div>
          <button 
            onClick={onOpenModal}
            className="mt-6 md:mt-0 bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium transition-colors cursor-pointer"
          >
            Enquire Now
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-6">Programs</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Data Science & AI</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Product Management</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Business Analytics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Digital Transformation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Important Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Enterprise Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Career Outcomes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <p className="text-gray-400 mb-2">Email: admissions@accredian.com</p>
            <p className="text-gray-400 mb-6">Phone: +91 9069 595959</p>
            
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Hash className="w-5 h-5"/></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><MessageCircle className="w-5 h-5"/></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Link2 className="w-5 h-5"/></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><ImageIcon className="w-5 h-5"/></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Video className="w-5 h-5"/></a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Accredian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
