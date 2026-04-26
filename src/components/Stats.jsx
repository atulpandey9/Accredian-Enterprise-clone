"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function Stats() {
  const [startCount, setStartCount] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  const stats = [
    {
      number: 10,
      suffix: "K+",
      desc: "Professionals Trained For Exceptional Career Success",
    },
    {
      number: 200,
      suffix: "+",
      desc: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      number: 5,
      suffix: "K+",
      desc: "Active Learners Engaged In Dynamic Courses",
    },
  ];

  return (
    <section
      id="stats"
      ref={ref}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-b border-gray-100 pb-20">

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Our <span className="text-primary">Track Record</span>
        </h2>

        <p className="text-gray-500 mb-16 font-medium">
          The Numbers Behind <span className="text-primary/80">Our Success</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-gray-200">

          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center pt-8 md:pt-0 px-6"
            >
              <div className="text-5xl font-bold mb-4 bg-primary/10 w-32 h-16 rounded-full flex items-center justify-center">

                <span className="text-primary">
                  {startCount && (
                    <>
                      <CountUp
                        end={stat.number}
                        duration={3}
                      />
                      {stat.suffix}
                    </>
                  )}
                </span>

              </div>

              <p className="text-gray-700 font-medium max-w-xs">
                {stat.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}