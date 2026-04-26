"use client";

import { useState } from "react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);


  const testimonials = [
    {
      id: 1,
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
      quote: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."
    },
    {
      id: 2,
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
      quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."
    },
    {
      id: 3,
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
      quote: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees."
    },

  ];


  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);


  const pages = [];
  for (let i = 0; i < testimonials.length; i += itemsPerSlide) {
    pages.push(testimonials.slice(i, i + itemsPerSlide));
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Testimonials from <span className="text-[#1A73E8]">Our Partners</span>
          </h2>
          <p className="text-gray-600 text-lg">
            What <span className="text-[#1A73E8]">Our Clients</span> Are Saying
          </p>
        </div>

        <div className="relative overflow-hidden w-full max-w-4xl mx-auto">

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {pages.map((page, index) => (
              <div key={index} className="w-full flex-shrink-0 flex flex-col md:flex-row gap-6 md:gap-8 justify-center px-4">
                {page.map((item) => (
                  <div
                    key={item.id}
                    className="flex-1 min-h-[240px] max-w-[400px] border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col bg-white"
                  >

                    <div className="h-12 flex items-center mb-5">
                      {item.logo ? (
                        <img src={item.logo} alt="Partner Logo" className="max-h-full object-contain" />
                      ) : (
                        <div className="w-20 h-10 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400 border border-dashed border-gray-300">
                          // Logo
                        </div>
                      )}
                    </div>

                    <div className="flex-grow">
                      {item.quote ? (
                        <p className="text-gray-600 text-sm leading-relaxed">"{item.quote}"</p>
                      ) : (
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-100 rounded w-full"></div>
                          <div className="h-3 bg-gray-100 rounded w-11/12"></div>
                          <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                          <div className="h-3 bg-gray-100 rounded w-full"></div>
                          <p className="text-xs text-gray-400 mt-2">// Quote here</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>


          <div className="flex justify-center mt-10 gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx ? "bg-[#1A73E8] w-4" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
