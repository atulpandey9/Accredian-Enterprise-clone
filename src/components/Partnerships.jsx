export default function Partnerships() {
  return (
    <section id="clients" className="py-16 pt-1 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Our Proven <span className="text-primary">Partnerships</span>
        </h2>
        <p className="text-gray-500 mb-12">
          Successful Collaborations With the <span className="text-primary/80">Industry's Best</span>
        </p>

        {/* Placeholder for Logos - doing a static flex layout */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-bold text-gray-800 tracking-wider">Reliance</div>
          <div className="text-2xl font-black text-blue-800 italic">HCL</div>
          <div className="text-3xl font-bold text-blue-600 tracking-widest">IBM</div>
          <div className="text-2xl font-bold text-gray-700">CRIF</div>
          <div className="text-3xl text-red-600 font-bold uppercase track">ADP</div>
          <div className="w-16 h-16 rounded-full border-4 border-green-600 flex items-center justify-center font-bold text-green-700 text-xs text-center leading-none">BAYER</div>
        </div>
      </div>
    </section>
  );
}
