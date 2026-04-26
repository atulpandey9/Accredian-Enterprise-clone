import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from "lucide-react";

export default function StrategicSkill() {
  const segments = [
    {
      icon: <MonitorCheck className="w-8 h-8 text-white" strokeWidth={2} />,
      title: "Tech Professionals",
      desc: "Enhance expertise, embrace tech, drive innovation."
    },
    {
      icon: <MonitorX className="w-8 h-8 text-white" strokeWidth={2} />,
      title: "Non-Tech Professionals",
      desc: "Adapt digitally, collaborate in tech environments."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-white" strokeWidth={2} />,
      title: "Emerging Professionals",
      desc: "Develop powerful skills for rapid career growth."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" strokeWidth={2} />,
      title: "Senior Professionals",
      desc: "Strengthen leadership, enhance strategic decisions."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A73E8] rounded-[32px] overflow-hidden flex flex-col lg:flex-row relative shadow-xl">


          <div className="lg:w-5/12 p-10 lg:p-14 pb-0 lg:pb-0 flex flex-col justify-between relative z-10">
            <div>
              <p className="text-white/90 text-xl font-medium mb-2">Who Should Join?</p>
              <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight mb-8">
                Strategic Skill <br /> Enhancement
              </h2>
            </div>

            <div className="mt-auto -ml-4 flex items-end">
              <img
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/imagehuman.png"
                alt="Professionals"
                className="w-full max-w-[400px] h-auto object-contain object-bottom"
              />
            </div>
          </div>


          <div className="lg:w-7/12 p-10 lg:p-16 lg:pl-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 mt-8 lg:mt-0 relative z-10 self-center">
            {segments.map((segment, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {segment.icon}
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">{segment.title}</h3>
                <p className="text-white/80 text-lg leading-relaxed">{segment.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
