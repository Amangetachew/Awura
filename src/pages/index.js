// pages/index.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Clients from "@/components/Clients";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section (Home) */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-blue-500 text-white">
          <Hero />
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen flex items-center justify-center bg-gray-100">
          <Services />
        </section>

        {/* Products Section */}
        <section id="products" className="min-h-screen flex items-center justify-center bg-green-200">
          <Products />
        </section>

        {/* Clients Section */}
        <section id="clients" className="min-h-screen flex items-center justify-center bg-yellow-200">
          <Clients />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
