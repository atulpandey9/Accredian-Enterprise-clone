"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Faqs({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState("About the Course");
  const [openId, setOpenId] = useState(1);

  // You can fill in the rest of the dropdowns here
  const faqData = {
    "About the Course": [
      {
        id: 1,
        question: "What types of corporate training programs does Accredian offer?",
        answer: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech."
      },
      {
        id: 2,
        question: "What domain specializations are available?",
        answer: "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI."
      }
    ],
    "About the Delivery": [
      {
        id: 3,
        question: "Can the courses be customized for specific industries or teams?",
        answer: "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals.",

      }, {
        id: 4,
        question: "Who are the instructors for these programs?",
        answer: "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights."
      },
      {
        id: 5,
        question: "What formats are the programs delivered in?",
        answer: "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based oPrograms can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements.n your team's preferences and requirements."

      }
    ],
    "Miscellaneous": [
      {
        id: 6,
        question: "What is the ideal team size for corporate training?",
        answer: "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts."
      },
      {
        id: 7,
        question: "How do we get started with Accredian?",
        answer: "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs."
      }
    ]
  };

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16 text-center md:text-left">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12">

          {/* Left Side: Tabs */}
          <div className="md:w-1/3 flex flex-col gap-4">
            {Object.keys(faqData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 text-center md:text-left border-2 rounded-lg font-bold text-lg transition-all ${activeTab === tab
                  ? "border-primary text-primary shadow-md"
                  : "border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Right Side: Accordion Questions */}
          <div className="md:w-2/3">
            <div className="flex flex-col gap-4">
              {faqData[activeTab].map((faq) => (
                <div key={faq.id} className="border-b border-gray-100 last:border-0 pb-4">
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className="w-full flex justify-between items-center text-left py-4 hover:text-primary transition-colors cursor-pointer"
                  >
                    <span className={`font-bold text-lg pr-8 ${openId === faq.id ? "text-primary" : "text-gray-900"}`}>
                      {faq.question}
                    </span>
                    {openId === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                    )}
                  </button>

                  {/* Dropdown Answer Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      openId === faq.id ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-4 text-gray-600 leading-relaxed pr-8">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Enquire Now Button bottom centered */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenModal}
            className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors cursor-pointer"
          >
            Enquire Now
          </button>
        </div>

      </div>
    </section>
  );
}
