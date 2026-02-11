"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building, Briefcase } from "lucide-react";

export const SmartSwitcher = () => {
  const [activeTab, setActiveTab] = useState<'city' | 'corp'>('city');

  return (
    <div className="w-full">
      <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 max-w-md mx-auto mb-16">
        <button 
          onClick={() => setActiveTab('city')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[11px] font-black tracking-widest transition-all ${activeTab === 'city' ? 'bg-brand-sky text-brand-navy' : 'text-brand-slate hover:text-white'}`}
        >
          <Building size={16} /> GOBIERNOS
        </button>
        <button 
          onClick={() => setActiveTab('corp')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[11px] font-black tracking-widest transition-all ${activeTab === 'corp' ? 'bg-amber-500 text-brand-navy' : 'text-brand-slate hover:text-white'}`}
        >
          <Briefcase size={16} /> EMPRESAS
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {activeTab === 'city' ? "Seguridad Urbana de Vanguardia" : "Protección de Activos Críticos"}
          </h2>
          <p className="text-brand-slate text-lg max-w-2xl mx-auto mb-8 font-light">
            {activeTab === 'city' 
              ? "Integramos alarmas comunitarias y sensores de detección temprana para ciudades inteligentes." 
              : "Optimización de respuesta ante incidentes y protección forense para el sector corporativo."}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};