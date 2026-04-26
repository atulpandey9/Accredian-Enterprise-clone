import { CheckCircle2 } from "lucide-react";

export default function Hero({ onOpenModal }) {
  return (
    <section id="home" className="relative bg-[#F0F7FF] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col min-[1005px]:grid min-[1005px]:grid-cols-2 gap-12 items-center">


          <div className="max-w-2xl order-2 min-[1005px]:order-1 mt-8 min-[1005px]:mt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Next-Gen <span className="text-primary">Expertise</span><br />
              For Your <span className="text-primary">Enterprise</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Cultivate high-performance teams through expert learning.
            </p>

            <ul className="space-y-4 mb-10">
              {['Tailored Solutions', 'Industry Insights', 'Expert Guidance'].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-800 font-medium">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={onOpenModal}
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
            >
              Enquire Now
            </button>
          </div>


          <div className="relative order-1 min-[1005px]:order-2 w-full max-w-lg mx-auto min-[1005px]:max-w-none">

            <div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-3 scale-105"></div>
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
              alt="Professionals working"
              className="relative rounded-3xl shadow-2xl object-cover h-[350px] sm:h-[400px] min-[1005px]:h-[500px] w-full border-4 border-white"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
