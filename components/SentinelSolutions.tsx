"use client";

import { motion } from "framer-motion";
import { Smartphone, Cpu, Wifi, BrainCircuit, Siren, ArrowRight } from "lucide-react";

// --- ÍCONOS ---
const HybridDetectionIcon = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <Smartphone strokeWidth={1.5} size={40} className="text-brand-sky relative z-10 -ml-2" />
    <div className="absolute bottom-0 right-0 bg-brand-navy p-1 rounded-lg border border-brand-sky/30 z-20">
      <Cpu strokeWidth={1.5} size={24} className="text-brand-sky/60" />
    </div>
    <Wifi strokeWidth={2} size={20} className="absolute -top-1 -right-1 text-brand-sky animate-pulse" />
  </div>
);

// --- DATOS DE LAS TARJETAS ---
const solutions = [
  {
    icon: <HybridDetectionIcon />,
    title: "Detección Omnicanal",
    description: "Convertimos cualquier dispositivo en un detonador de seguridad. Desde Apps Móviles hasta sensores LoRaWAN autónomos.",
    cta: "VER INTEGRACIONES",
    color: "text-brand-sky",
    // Color para el efecto Shimmer interno
    shimmerColor: "from-brand-sky/20", 
    glow: "group-hover:shadow-[0_0_50px_-12px_rgba(107,204,246,0.6)]",
    border: "group-hover:border-brand-sky/60"
  },
  {
    icon: <BrainCircuit strokeWidth={1.5} size={48} />,
    title: "Analítica Predictiva",
    description: "Transformamos millones de datos en patrones claros, permitiendo anticipar incidentes antes de que ocurran.",
    cta: "VER ANALÍTICA",
    // Mantenemos el violeta/púrpura para diferenciar el "cerebro"
    color: "text-violet-400", 
    shimmerColor: "from-violet-400/20",
    glow: "group-hover:shadow-[0_0_50px_-12px_rgba(167,139,250,0.6)]",
    border: "group-hover:border-violet-400/60"
  },
  {
    icon: <Siren strokeWidth={1.5} size={48} />,
    title: "Acción Disuasiva",
    description: "Orquestamos respuesta física en un clic: alarmas comunitarias, cámaras y despacho de servicios de seguridad en menos de 3 segundos.",
    cta: "VER RESPUESTA",
    color: "text-accent-DEFAULT",
    shimmerColor: "from-accent-DEFAULT/20",
    glow: "group-hover:shadow-[0_0_50px_-12px_rgba(245,158,11,0.6)]",
    border: "group-hover:border-accent-DEFAULT/60"
  }
];

export default function SentinelSolutions() {
  return (
    <section className="py-32 bg-brand-navy relative overflow-hidden">
      
      {/* LUCES AMBIENTALES DE FONDO (Profundidad) */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-teal/20 rounded-full blur-[150px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-brand-sky/20 rounded-full blur-[150px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ENCABEZADO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Tecnología Núcleo para <br />
            {/* Gradiente ajustado para mejor contraste sobre Navy */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-white to-brand-sky">
              Familias y Corporaciones.
            </span>
          </h2>
          <p className="text-brand-slate text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Sincronización total entre la App Zephira, el hardware IoT y el Dashboard Sentinel en un solo cerebro.
          </p>
        </motion.div>

        {/* GRID DE TARJETAS DINÁMICAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }} // Easing "físico" suave
              // CLASES DE LA TARJETA PRINCIPAL
              className={`
                group relative flex flex-col p-10 rounded-[2.5rem] 
                bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-xl 
                border border-white/[0.08]
                /* COREOGRAFÍA DE HOVER: Levanta, escala sutilmente y cambia el borde */
                hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 ease-out
                ${item.border} ${item.glow} overflow-hidden
              `}
            >
              
              {/* EFECTO "SHIMMER" INTERNO (El destello de luz al pasar el mouse) */}
              <div className={`
                absolute inset-0 -z-10 bg-gradient-to-br ${item.shimmerColor} via-transparent to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out
                bg-[length:250%_250%] bg-[0%_0%] group-hover:bg-[100%_100%] // Mueve el gradiente
              `} />


              {/* CONTENEDOR DEL ÍCONO (Icon Pop) */}
              <div className={`
                mb-8 p-5 rounded-2xl w-fit relative z-10
                bg-brand-navy/80 border border-white/10 shadow-xl
                /* Animación del contenedor del icono */
                group-hover:scale-110 group-hover:border-white/30 group-hover:bg-brand-navy/95 transition-all duration-500 ease-out
                ${item.color}
              `}>
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{item.title}</h3>
              <p className="text-brand-slate leading-relaxed mb-8 text-base relative z-10 flex-grow">{item.description}</p>

              {/* CTA LINK */}
              <div className={`relative z-10 flex items-center gap-2 text-xs font-black tracking-[0.2em] ${item.color} cursor-pointer`}>
                {item.cta} <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}