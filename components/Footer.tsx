"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-brand-navy border-t border-white/5 pt-20 md:pt-32 pb-12 md:pb-16 overflow-hidden">
            
            {/* 1. EFECTOS DE ILUMINACIÓN AMBIENTAL */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-sky/40 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-brand-sky/5 via-transparent to-transparent blur-3xl rounded-full pointer-events-none" />
            
            {/* ACENTOS PULSANTES - Solo visibles en Desktop para evitar ruido en móvil */}
            <div className="hidden lg:block absolute top-20 right-10 w-2 h-2 bg-brand-sky rounded-full animate-pulse shadow-[0_0_10px_#6bccf6]" />
            <div className="hidden lg:block absolute bottom-32 left-20 w-1.5 h-1.5 bg-accent-DEFAULT rounded-full animate-pulse delay-700 shadow-[0_0_8px_#f59e0b]" />

            <div className="container mx-auto px-6 relative z-10">
                
                {/* 2. GRID PRINCIPAL ADAPTATIVO
                    - Mobile: 1 columna
                    - Tablet: 2 columnas (grid-cols-2)
                    - Desktop: 12 columnas para control total
                */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
                    
                    {/* COLUMNA 1: IDENTIDAD (4 de 12 columnas) */}
                    <div className="lg:col-span-4 flex flex-col items-center md:items-start space-y-8 text-center md:text-left group">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-brand-sky/20 to-accent-DEFAULT/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                            <Link href="/" className="relative block w-fit transition-transform hover:scale-105 active:scale-95">
                                <Image
                                    src="https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-xbqfqjzj8smhyksbb8z7.webp"
                                    alt="Asecuritech Logo"
                                    width={180}
                                    height={60}
                                    className="opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                            </Link>
                        </div>
                        
                        <div className="space-y-4">
                            <p className="text-brand-slate text-sm leading-relaxed max-w-sm font-light">
                                <span className="text-white font-semibold block mb-2">Tu Seguridad, Sincronizada.</span>
                                Conectamos Detección IoT, Inteligencia Artificial y Respuesta Física para transformar el riesgo en control absoluto.
                            </p>
                            
                            <div className="pt-4 space-y-2">
                                <p className="text-[10px] font-black tracking-[0.2em] text-brand-sky/80 uppercase">
                                    © 2026 Asecuritech Inc.
                                </p>
                                <p className="text-[10px] text-brand-slate/40 tracking-widest uppercase">Quito, Ecuador</p>
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA 2: ECOSISTEMA (2 de 12 columnas) */}
                    <div className="lg:col-span-2 space-y-8 text-center md:text-left">
                        <h4 className="text-white font-black tracking-[0.25em] uppercase text-[10px] relative pb-3 inline-block md:block">
                            Ecosistema
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-6 h-0.5 bg-brand-sky" />
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/sentinel" className="text-brand-slate hover:text-brand-sky transition-all flex items-center justify-center md:justify-start gap-3 group">
                                    <span className="w-1 h-1 bg-brand-sky rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-[0_0_8px_#6bccf6]" />
                                    <span className="group-hover:translate-x-1 transition-transform">Sentinel OS</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/zephira" className="text-brand-slate hover:text-accent-DEFAULT transition-all flex items-center justify-center md:justify-start gap-3 group">
                                    <span className="w-1 h-1 bg-accent-DEFAULT rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-[0_0_8px_#f59e0b]" />
                                    <span className="group-hover:translate-x-1 transition-transform">Zephira App</span>
                                </Link>
                            </li>
                            <li><Link href="/hardware" className="text-brand-slate hover:text-white transition-all block md:hover:translate-x-1">Hardware IoT</Link></li>
                        </ul>
                    </div>

                    {/* COLUMNA 3: COMPAÑÍA (2 de 12 columnas) */}
                    <div className="lg:col-span-2 space-y-8 text-center md:text-left">
                        <h4 className="text-white font-black tracking-[0.25em] uppercase text-[10px] relative pb-3 inline-block md:block">
                            Compañía
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-6 h-0.5 bg-brand-teal" />
                        </h4>
                        <ul className="space-y-4 text-sm text-brand-slate">
                            <li><Link href="/nosotros" className="hover:text-white transition-all block md:hover:translate-x-1">Manifiesto ANKA</Link></li>
                            <li><Link href="/partners" className="hover:text-white transition-all block md:hover:translate-x-1">Partners</Link></li>
                            <li><Link href="/contacto" className="hover:text-brand-teal transition-all font-semibold block md:hover:translate-x-1">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* COLUMNA 4: CONTACTO & SOCIAL (4 de 12 columnas) */}
                    <div className="lg:col-span-4 space-y-10 text-center md:text-left">
                        <div>
                            <h4 className="text-white font-black tracking-[0.25em] uppercase text-[10px] mb-8 relative pb-3 inline-block md:block">
                                Red de Protección
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-6 h-0.5 bg-accent-DEFAULT" />
                            </h4>
                            <div className="flex justify-center md:justify-start gap-4">
                                {[
                                    { Icon: Linkedin, color: "hover:text-blue-400" },
                                    { Icon: Mail, color: "hover:text-brand-sky" },
                                    { Icon: Phone, color: "hover:text-brand-teal" }
                                ].map(({ Icon, color }, i) => (
                                    <button key={i} className={`p-3 rounded-xl bg-white/[0.03] border border-white/10 ${color} transition-all hover:-translate-y-1 hover:bg-white/[0.08]`}>
                                        <Icon size={18} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <a href="mailto:info@asecuritech.com" className="text-xs text-brand-slate hover:text-brand-sky transition-colors flex items-center justify-center md:justify-start gap-2 group">
                                <span className="w-1 h-1 bg-brand-sky rounded-full group-hover:animate-ping" />
                                info@asecuritech.com
                            </a>
                            <div className="flex justify-center md:justify-start gap-6 text-[11px] text-brand-slate/50">
                                <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
                                <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* 3. LÍNEA DIVISORA DINÁMICA */}
                <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
                
                {/* 4. PIE FINAL (Copyright y Badge) */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="space-y-2 text-center md:text-left">
                        <p className="text-[9px] tracking-[0.3em] text-brand-slate uppercase font-black">Powered By</p>
                        <p className="text-sm text-white font-bold group">
                            Trei Creatividad Digital <span className="text-brand-slate/40 font-medium">2026</span>
                        </p>
                    </div>
                    
                    {/* TECH BADGE */}
                    <div className="px-6 py-2.5 rounded-full border border-white/5 bg-white/[0.02] text-[9px] text-brand-sky font-black tracking-[0.2em] uppercase shadow-inner">
                        Next.js 15 <span className="mx-2 text-brand-slate/20">|</span> VibeVS 2026
                    </div>
                </div>
            </div>
        </footer>
    );
}