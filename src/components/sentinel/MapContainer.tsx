"use client";
import * as React from "react";

export default function MapContainer() {
  // Coordenadas: Sector Iñaquito, Quito (Cerca de la Plataforma Gubernamental)
  const lat = -0.1807;
  const lng = -78.4678;
  const zoom = 16;

  return (
    <div className="relative w-full h-full bg-[#0B1120] rounded-[2rem] overflow-hidden border border-white/5">
      {/* MAPA NÍTIDO: Filtro suavizado para evitar el blur */}
      <iframe
        title="Sentinel Live Map"
        width="100%"
        height="100%"
        style={{ 
            border: 0, 
            filter: 'grayscale(100%) invert(90%) contrast(110%) brightness(95%)' 
        }}
        allowFullScreen
        loading="lazy"
        src={`https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&t=m&output=embed`}
        className="absolute inset-0 w-full h-full scale-110" // Escala ligera para ocultar bordes de Google
      />

      {/* OVERLAY DE MARCA: Filtro táctico azulado */}
      <div className="absolute inset-0 pointer-events-none bg-blue-500/5 mix-blend-overlay" />
      
      {/* PUNTO DE INCIDENCIA: Centrado y nítido */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-12 w-12 bg-red-500/20 rounded-full animate-ping" />
          <div className="relative h-4 w-4 bg-red-600 rounded-full border-2 border-white shadow-[0_0_15px_rgba(220,38,38,1)]" />
        </div>
      </div>

      {/* Gradientes de profundidad para el modo oscuro */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(11,17,32,0.8)]" />
    </div>
  );
}