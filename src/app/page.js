"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Partnerships from "@/components/Partnerships";
import AccredianEdge from "@/components/AccredianEdge";
import DomainExpertise from "@/components/DomainExpertise";
import CourseSegmentation from "@/components/CourseSegmentation";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header onOpenModal={openModal} />
      <main className="flex-grow w-full">
        <Hero onOpenModal={openModal} />
        <Stats />
        <Partnerships />
        <AccredianEdge />
        <DomainExpertise />
        <CourseSegmentation />
      </main>
      <Footer onOpenModal={openModal} />
      <LeadModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
