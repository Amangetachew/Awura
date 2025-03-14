// pages/index.jsx
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Clients from "@/components/Clients";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home"); // Track the active section

  return (
    <main>
      {/* Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      {/* Content Sections */}
      {activeSection === "home" && <Hero />}
      {activeSection === "services" && <Services />}
      {activeSection === "products" && <Products />}
      {activeSection === "clients" && <Clients />}
      {/* Footer */}
      <Footer setActiveSection={setActiveSection} />{" "}
      {/* Pass setActiveSection here */}
    </main>
  );
}
