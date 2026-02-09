"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-brand-navy border-t border-white/5 pt-32 pb-16 overflow-hidden">
            
            {/* EFECTO DE LUZ DRAMÁTICO */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-sky/50 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-brand-sky/10 via-brand-sky/5 to-transparent blur-3xl rounded-full pointer-events-none" />
            
            {/* PUNTOS DE ACENTO ANIMADOS */}
            <div className="absolute top-20 right-10 w-2 h-2 bg-brand-sky rounded-full animate-pulse" />
            <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-accent-DEFAULT rounded-full animate-pulse delay-700" />

            <div className="container mx-auto px-6 relative z-10">
                
                {/* SECCIÓN PRINCIPAL - GRID IMPACTANTE */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
                    
                    {/* COLUMNA 1: IDENTIDAD (DESTACADA) */}
                    <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-6 text-center md:text-left group">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-brand-sky/20 to-accent-DEFAULT/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                            <Link href="/" className="relative block w-fit transition-transform hover:scale-110">
                                <Image
                                    src="https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-xbqfqjzj8smhyksbb8z7.webp"
                                    alt="Asecuritech Logo"
                                    width={200}
                                    height={70}
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
                                <p className="text-[11px] font-bold tracking-[0.15em] text-brand-sky/80 uppercase hover:text-brand-sky transition-colors">
                                    © 2026 Asecuritech Inc.
                                </p>
                                <p className="text-[10px] text-brand-slate/50">Quito, Ecuador</p>
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA 2-3: LINKS ESTRUCTURADOS */}
                    <div className="md:col-span-4 space-y-12">
                        
                        {/* ECOSISTEMA */}
                        <div>
                            <h4 className="text-white font-black tracking-[0.25em] uppercase text-[11px] mb-6 relative pb-3">
                                Ecosistema
                                <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-gradient-to-r from-brand-sky to-transparent" />
                            </h4>
                            <ul className="space-y-3.5 text-sm">
                                <li>
                                    <Link href="/sentinel" className="text-brand-slate hover:text-brand-sky transition-all duration-300 flex items-center gap-3 group">
                                        <span className="w-1 h-1 bg-brand-sky rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all shadow-[0_0_8px_#6bccf6]" />
                                        <span className="group-hover:translate-x-1 transition-transform">Sentinel OS (B2B)</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/zephira" className="text-brand-slate hover:text-accent-DEFAULT transition-all duration-300 flex items-center gap-3 group">
                                        <span className="w-1 h-1 bg-accent-DEFAULT rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all shadow-[0_0_8px_#f59e0b]" />
                                        <span className="group-hover:translate-x-1 transition-transform">Zephira App (B2C)</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hardware" className="text-brand-slate hover:text-white transition-all duration-300 flex items-center gap-3 group">
                                        <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all" />
                                        <span className="group-hover:translate-x-1 transition-transform">Infraestructura LoRaWAN</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/integraciones" className="text-brand-slate hover:text-white transition-all duration-300 flex items-center gap-3 group">
                                        <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all" />
                                        <span className="group-hover:translate-x-1 transition-transform">SDKs & Integraciones</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* COMPAÑÍA */}
                        <div>
                            <h4 className="text-white font-black tracking-[0.25em] uppercase text-[11px] mb-6 relative pb-3">
                                Compañía
                                <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-gradient-to-r from-brand-teal to-transparent" />
                            </h4>
                            <ul className="space-y-3.5 text-sm">
                                <li><Link href="/nosotros" className="text-brand-slate hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Manifiesto ANKA</Link></li>
                                <li><Link href="/casos" className="text-brand-slate hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Casos de Éxito</Link></li>
                                <li><Link href="/partners" className="text-brand-slate hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Programa de Partners</Link></li>
                                <li><Link href="/contacto" className="text-brand-slate hover:text-brand-teal transition-all duration-300 hover:translate-x-1 inline-block font-semibold">Contacto Corporativo</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* COLUMNA 4: RED DE PROTECCIÓN + CONTACTO */}
                    <div className="md:col-span-4 space-y-12">
                        
                        {/* REDES SOCIALES - IMPACTANTES */}
                        <div>
                            <h4 className="text-white font-black tracking-[0.25em] uppercase text-[11px] mb-6 relative pb-3">
                                Red de Protección
                                <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-gradient-to-r from-brand-sky to-transparent" />
                            </h4>
                            <div className="flex gap-3">
                                {[
                                    { Icon: Linkedin, label: "LinkedIn", color: "from-blue-400 to-blue-600" },
                                    { Icon: Mail, label: "Email", color: "from-sky-400 to-sky-600" },
                                    { Icon: Phone, label: "Phone", color: "from-teal-400 to-teal-600" }
                                ].map(({ Icon, label, color }) => (
                                    <div key={label} className="group relative">
                                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300`} />
                                        <button className="relative p-3.5 rounded-lg bg-brand-navy border border-white/10 hover:border-transparent text-brand-slate hover:text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                                            <Icon size={18} className="transition-transform group-hover:scale-110" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CONTACTO DIRECTO */}
                        <div>
                            <h4 className="text-white font-black tracking-[0.25em] uppercase text-[11px] mb-4 relative pb-3">
                                Contacto Directo
                                <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-gradient-to-r from-accent-DEFAULT to-transparent" />
                            </h4>
                            <ul className="space-y-2.5 text-[12px]">
                                <li>
                                    <a href="tel:+593" className="text-brand-slate hover:text-brand-sky transition-colors flex items-center gap-2 group">
                                        <span className="text-xs text-brand-sky group-hover:animate-pulse">●</span>
                                        +593 (2) XXXX-XXXX
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:info@asecuritech.com" className="text-brand-slate hover:text-brand-sky transition-colors flex items-center gap-2 group">
                                        <span className="text-xs text-brand-sky group-hover:animate-pulse">●</span>
                                        info@asecuritech.com
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* LINKS LEGALES */}
                        <div>
                            <ul className="space-y-2.5 text-[12px]">
                                <li><Link href="/privacidad" className="text-brand-slate/60 hover:text-white transition-colors">Política de Privacidad</Link></li>
                                <li><Link href="/terminos" className="text-brand-slate/60 hover:text-white transition-colors">Términos de Servicio</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* DIVISOR DINÁMICO */}
                <div className="relative mb-12">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-brand-sky/30 to-transparent" />
                </div>
                
                {/* PIE FINAL - IMPACTANTE */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div className="space-y-2">
                        <p className="text-[9px] tracking-[0.25em] text-brand-sky/70 uppercase font-black">Creado por</p>
                        <p className="text-sm text-white font-bold group hover:text-brand-sky transition-colors cursor-default">
                            Trei Creatividad Digital <span className="text-brand-slate">2026</span>
                        </p>
                    </div>
                    
                    {/* TECH BADGE - MEJORADO */}
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-sky/20 to-accent-DEFAULT/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                        <div className="relative px-6 py-2.5 rounded-full border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] text-[9px] text-brand-sky font-black tracking-[0.15em] uppercase shadow-inner group-hover:border-brand-sky/30 transition-all duration-300">
                            Next.js 15 <span className="text-brand-slate/50 mx-2">●</span> VibeVS 2026
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}