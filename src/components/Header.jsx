
export default function Header({ onOpenModal }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            {/* Fake Logo */}
            <a href="#" className="flex items-center text-primary font-bold text-2xl tracking-tighter">
              accredian<span className="text-gray-400 text-xs ml-2 font-normal mt-2 hidden sm:block">credentials that matter</span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-primary transition-colors font-medium">Home</a>
            <a href="#stats" className="text-gray-600 hover:text-primary transition-colors font-medium">Stats</a>
            <a href="#clients" className="text-gray-600 hover:text-primary transition-colors font-medium">Clients</a>
            <a href="#accredian-edge" className="text-gray-600 hover:text-primary transition-colors font-medium">Accredian Edge</a>
            <a href="#faqs" className="text-gray-600 hover:text-primary transition-colors font-medium">FAQs</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenModal}
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg font-medium transition-colors cursor-pointer"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
