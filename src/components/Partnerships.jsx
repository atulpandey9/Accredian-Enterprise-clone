export default function Partnerships() {
  const logos = [
    { src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png", alt: "Reliance" },
    { src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png", alt: "HCL" },
    { src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png", alt: "IBM" },
    { src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png", alt: "CRIF" },
    { src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg", alt: "ADP" },
    { src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg", alt: "BAYER" }
  ];

  return (
    <section id="clients" className="py-16 pt-1 bg-white overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Our Proven <span className="text-primary">Partnerships</span>
        </h2>
        <p className="text-gray-500 mb-12">
          Successful Collaborations With the <span className="text-primary/80">Industry's Best</span>
        </p>

        {/* Desktop Logos Grid (> 770px) */}
        <div className="hidden min-[771px]:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex justify-center items-center w-full h-12 md:h-16">
              <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>

        {/* Mobile Marquee (<= 770px) */}
        <div className="block min-[771px]:hidden overflow-hidden relative w-full pt-2">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {/* Set 1 */}
            <div className="flex gap-12 px-6 items-center">
              {logos.map((logo, idx) => (
                <div key={`set1-${idx}`} className="flex justify-center items-center h-12 w-32 shrink-0">
                  <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
            {/* Set 2 */}
            <div className="flex gap-12 px-6 items-center">
              {logos.map((logo, idx) => (
                <div key={`set2-${idx}`} className="flex justify-center items-center h-12 w-32 shrink-0">
                  <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
