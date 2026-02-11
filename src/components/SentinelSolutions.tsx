"use client";

import { motion } from "framer-motion";
import { Smartphone, Cpu, Wifi, BrainCircuit, Siren, ArrowRight } from "lucide-react";

// --- ÍCONOS (Mantenemos la lógica de marca) ---
const HybridDetectionIcon = () => (
  <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
    <Smartphone strokeWidth={1.5} size={32} className="md:size-[40px] text-brand-sky relative z-10 -ml-2" />
    <div className="absolute bottom-0 right-0 bg-brand-navy p-1 rounded-lg border border-brand-sky/30 z-20">
      <Cpu strokeWidth={1.5} size={18} className="md:size-[24px] text-brand-sky/60" />
    </div>
    <Wifi strokeWidth={2} size={16} className="md:size-[20px] absolute -top-1 -right-1 text-brand-sky animate-pulse" />
  </div>
);

const solutions = [
  {
    icon: <HybridDetectionIcon />,
    title: "Detección Omnicanal",
    description: "Convertimos cualquier dispositivo en un detonador de seguridad. Desde Apps Móviles hasta sensores LoRaWAN autónomos.",
    cta: "VER INTEGRACIONES",
    color: "text-brand-sky",
    shimmerColor: "from-brand-sky/20", 
    glow: "group-hover:shadow-[0_0_50px_-12px_rgba(107,204,246,0.6)]",
    border: "group-hover:border-brand-sky/60"
  },
  {
    icon: <BrainCircuit strokeWidth={1.5} size={48} />,
    title: "Analítica Predictiva",
    description: "Transformamos millones de datos en patrones claros, permitiendo anticipar incidentes antes de que ocurran.",
    cta: "VER ANALÍTICA",
    color: "text-violet-400", 
    shimmerColor: "from-violet-400/20",
    glow: "group-hover:shadow-[0_0_50px_-12px_rgba(167,139,250,0.6)]",
    border: "group-hover:border-violet-400/60"
  },
  {
    icon: <Siren strokeWidth={1.5} size={48} />,
    title: "Acción Disuasiva",
    description: "Orquestamos respuesta física en un clic: alarmas comunitarias, cámaras y despacho en menos de 3 segundos.",
    cta: "VER RESPUESTA",
    color: "text-accent-DEFAULT",
    shimmerColor: "from-accent-DEFAULT/20",
    glow: "group-hover:shadow-[0_0_50px_-12px_rgba(245,158,11,0.6)]",
    border: "group-hover:border-accent-DEFAULT/60"
  }
];

export default function SentinelSolutions() {
  return (
    // AJUSTE: Reducimos padding superior de py-20 a py-10 en mobile para cerrar la brecha con los logos
    <section className="py-10 md:py-32 bg-brand-navy relative overflow-hidden">
      
      {/* LUCES AMBIENTALES (Sin cambios) */}
      <div className="absolute top-1/4 -left-1/4 w-full md:w-1/2 h-1/2 bg-brand-teal/10 md:bg-brand-teal/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 -right-1/4 w-full md:w-1/2 h-1/2 bg-brand-sky/10 md:bg-brand-sky/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ENCABEZADO RESPONSIVO COMPACTO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // AJUSTE: mb-10 en mobile para reducir el espacio muerto antes del grid
          className="text-center max-w-3xl mx-auto mb-10 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-8 tracking-tight leading-tight">
            Tecnología Núcleo para <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-white to-brand-sky">
              Familias y Corporaciones.
            </span>
          </h2>
          <p className="text-brand-slate text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Sincronización total entre la App Zephira, el hardware IoT y el Dashboard Sentinel en un solo cerebro.
          </p>
        </motion.div>

        {/* GRID ADAPTATIVO CON GAP COMPRIMIDO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              // AJUSTE: p-6 en mobile para tarjetas más ágiles
              className={`
                group relative flex flex-col p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] 
                bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-xl 
                border border-white/[0.08]
                hover:-translate-y-2 transition-all duration-500 ease-out
                ${item.border} ${item.glow} overflow-hidden
              `}
            >
              {/* SHIMMER (Sin cambios) */}
              <div className={`
                absolute inset-0 -z-10 bg-gradient-to-br ${item.shimmerColor} via-transparent to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-700
                bg-[length:250%_250%] bg-[0%_0%] group-hover:bg-[100%_100%]
              `} />

              {/* CONTENEDOR DE ÍCONO COMPACTO */}
              <div className={`
                mb-4 md:mb-8 p-4 md:p-5 rounded-xl md:rounded-2xl w-fit relative z-10
                bg-brand-navy/80 border border-white/10 shadow-xl
                group-hover:scale-110 transition-all duration-500
                ${item.color}
              `}>
                <div className="scale-90 md:scale-100">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4 relative z-10">{item.title}</h3>
              <p className="text-brand-slate leading-relaxed mb-6 md:mb-8 text-[13px] md:text-base relative z-10 flex-grow">{item.description}</p>

              <div className={`relative z-10 flex items-center gap-2 text-[10px] md:text-xs font-black tracking-[0.2em] ${item.color} cursor-pointer`}>
                {item.cta} <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}