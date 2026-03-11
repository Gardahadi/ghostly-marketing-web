"use client";

import { useState } from "react";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { ContactModal } from "@/components/contact-modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <>
      <Nav onContact={openModal} />
      <main>
        <Hero onContact={openModal} />
        <Features />
        <HowItWorks onContact={openModal} />
        <CtaSection onContact={openModal} />
      </main>
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
