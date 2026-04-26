"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function ScrollReveal({ children, delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    fallbackInView: true,
  });


  const [failsafeTrigger, setFailsafeTrigger] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFailsafeTrigger(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const isVisible = inView || failsafeTrigger;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 transform ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
    >
      {children}
    </div>
  );
}
