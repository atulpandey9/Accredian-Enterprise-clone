"use client";

import { Headset, ChevronRight } from "lucide-react";

export default function ContactBanner({ onOpenModal }) {
  return (
    <section className="pb-20 bg-white flex justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="relative bg-[#3483fa] rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:px-12 md:py-10 shadow-lg">


          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full h-[500px] pointer-events-none opacity-20 flex justify-center items-center">
            <div className="absolute w-[400px] h-[400px] rounded-full border-[80px] border-white/40"></div>
            <div className="absolute w-[700px] h-[700px] rounded-full border-[100px] border-white/20"></div>
            <div className="absolute w-[1000px] h-[1000px] rounded-full border-[120px] border-white/10"></div>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 w-full md:w-auto">

            <div className="bg-white rounded-[20px] w-[72px] h-[72px] flex items-center justify-center flex-shrink-0 shadow-sm ring-[6px] ring-white/30">
              <Headset className="w-[34px] h-[34px] text-[#1A73E8]" aria-hidden="true" />
            </div>


            <div className="flex flex-col justify-center gap-1 mt-1 sm:mt-0">
              <h2 className="text-2xl sm:text-[28px] font-bold text-white leading-tight">
                Want to Learn More About Our Training Solutions?
              </h2>
              <p className="text-blue-50 text-[15px] font-medium mt-1">
                Get Expert Guidance for Your Team's Success!
              </p>
            </div>
          </div>


          <div className="relative z-10 mt-8 md:mt-0 flex-shrink-0 w-full sm:w-auto md:ml-8">
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto bg-white text-[#1A73E8] hover:bg-gray-50 font-bold px-6 py-3.5 rounded-xl flex items-center justify-center gap-1 transition-colors duration-200 shadow-sm"
            >
              Contact Us <ChevronRight className="w-[18px] h-[18px]" strokeWidth={2.5} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
