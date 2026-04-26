import { BarChart2, Presentation, MonitorPlay } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      title: "Skill Gap Analysis",
      desc: "Assess team skill gaps and developmental needs."
    },
    {
      num: "2",
      icon: <Presentation className="w-6 h-6 text-white" />,
      title: "Customized Training Plan",
      desc: "Create a tailored roadmap addressing organizational goals."
    },
    {
      num: "3",
      icon: <MonitorPlay className="w-6 h-6 text-white" />,
      title: "Flexible Program Delivery",
      desc: "Deliver adaptable programs aligned with industry and organizational needs."
    }
  ];

  return (
    <section id="howitworks" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          How We <span className="text-[#1A73E8]">Deliver Results</span> That Matter?
        </h2>
        <p className="text-gray-600 mb-16 text-lg">
          A Structured Three-Step Approach to <span className="text-[#1A73E8]">Skill Development</span>
        </p>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 relative flex">

              <div className="w-full bg-[#f8fbff] border border-blue-100 rounded-xl relative px-6 py-10 flex flex-col items-center justify-start group hover:border-blue-300 transition-colors">


                <div className="absolute top-[20%] bottom-[20%] left-0 w-1 bg-[#1A73E8] rounded-r-md"></div>
                <div className="absolute top-[20%] bottom-[20%] right-0 w-1 bg-[#1A73E8] rounded-l-md"></div>


                <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-white border border-blue-200 text-[#1A73E8] font-bold text-xs flex items-center justify-center">
                  {step.num}
                </div>

                <div className="w-16 h-16 bg-[#1A73E8] rounded-full flex items-center justify-center mb-6 shadow-md mt-4">
                  {step.icon}
                </div>


                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>


                <p className="text-gray-600 text-sm md:text-base leading-relaxed px-2">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
