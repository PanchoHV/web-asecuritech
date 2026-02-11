"use client";

import * as React from "react";
import dynamic from "next/dynamic";

// 1. Dashboard: Asumimos que es 'export default'
const IncidenciasDashboard = dynamic(
  () => import("@/components/sentinel/IncidenciasDashboard"),
  { 
    ssr: false, 
    loading: () => <div className="h-screen bg-[#0B1120] flex items-center justify-center text-blue-400 font-black animate-pulse uppercase tracking-widest text-xs">Cargando Sentinel OS...</div> 
  }
);

// 2. SmartSwitcher: Forzamos la extracción del componente
// Si tu archivo usa 'export const SmartSwitcher', esta es la única forma correcta:
const SmartSwitcher = dynamic(
  () => import("@/components/sentinel/SmartSwitcher").then((mod) => mod.SmartSwitcher),
  { ssr: false }
);

export default function SentinelPage() {
  return (
    <main className="min-h-screen bg-[#0B1120]">
      {/* MONITOR OPERATIVO */}
      <section className="relative">
        <IncidenciasDashboard />
      </section>

      {/* SECCIÓN COMERCIAL */}
      <section className="py-24 px-6 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <SmartSwitcher />
        </div>
      </section>
    </main>
  );
}