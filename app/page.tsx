import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import SentinelSolutions from "../components/SentinelSolutions";
import FinalCTA from "../components/FinalCTA"; // <--- Nuevo
import Footer from "../components/Footer";     // <--- Nuevo

export default function Home() {
  return (
    <main className="bg-[#050A14] min-h-screen text-white">
      <Navbar />
      <Hero /> 
      <TechStack /> 
      <SentinelSolutions />
      <FinalCTA /> {/* <--- Insertar */}
      <Footer />   {/* <--- Insertar */}
    </main>
  );
}