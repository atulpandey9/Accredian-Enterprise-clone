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

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
          <div className="flex justify-center items-center w-full h-12 md:h-16"><img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png" alt="Reliance" className="max-h-full max-w-full object-contain" /></div>
          <div className="flex justify-center items-center w-full h-12 md:h-16"><img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png" alt="HCL" className="max-h-full max-w-full object-contain" /></div>
          <div className="flex justify-center items-center w-full h-12 md:h-16"><img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png" alt="IBM" className="max-h-full max-w-full object-contain" /></div>
          <div className="flex justify-center items-center w-full h-12 md:h-16"><img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png" alt="CRIF" className="max-h-full max-w-full object-contain" /></div>
          <div className="flex justify-center items-center w-full h-12 md:h-16"><img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg" alt="ADP" className="max-h-full max-w-full object-contain" /></div>
          <div className="flex justify-center items-center w-full h-12 md:h-16"><img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg" alt="BAYER" className="max-h-full max-w-full object-contain" /></div>
        </div>
      </div>
    </section>
  );
}
