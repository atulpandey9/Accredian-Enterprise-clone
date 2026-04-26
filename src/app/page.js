"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Partnerships from "@/components/Partnerships";
import AccredianEdge from "@/components/AccredianEdge";
import DomainExpertise from "@/components/DomainExpertise";
import CourseSegmentation from "@/components/CourseSegmentation";
import StrategicSkill from "@/components/StrategicSkill";
import CatFramework from "@/components/CatFramework";
import HowItWorks from "@/components/HowItWorks";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import Testimonials from "@/components/Testimonials";
import ContactBanner from "@/components/ContactBanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header onOpenModal={openModal} />
      <main className="flex-grow w-full overflow-x-hidden">
        <Hero onOpenModal={openModal} />
        <ScrollReveal><Stats /></ScrollReveal>
        <ScrollReveal><Partnerships /></ScrollReveal>
        <ScrollReveal><AccredianEdge /></ScrollReveal>
        <ScrollReveal><DomainExpertise /></ScrollReveal>
        <ScrollReveal><CourseSegmentation /></ScrollReveal>
        <ScrollReveal><StrategicSkill /></ScrollReveal>
        <ScrollReveal><CatFramework /></ScrollReveal>
        <ScrollReveal><HowItWorks /></ScrollReveal>
        <ScrollReveal><Faqs onOpenModal={openModal} /></ScrollReveal>
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><ContactBanner onOpenModal={openModal} /></ScrollReveal>
      </main>
      <ScrollReveal><Footer onOpenModal={openModal} /></ScrollReveal>
      <LeadModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
