"use client";

import * as React from "react";
import dynamic from 'next/dynamic';
import { 
  ShieldAlert, LayoutDashboard, Building2, FileText, 
  Users, RefreshCcw, AlertTriangle, ChevronDown 
} from "lucide-react";

// --- IMPORTACIÓN DE COMPONENTES UI ---
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

// --- MAPA DINÁMICO ---
// Importamos el componente MapContainer de forma dinámica para evitar errores de SSR
const DynamicMap = dynamic(() => import("./MapContainer"), { 
  ssr: false,
  loading: () => <div className="h-full w-full bg-white/5 flex items-center justify-center text-[10px] animate-pulse">Cargando Mapa...</div>
});

const MOCK_INCIDENCIAS = [
  {
    id: "1",
    asistencia: "Botón Anti-Secuestro SOS",
    zona: "Sector Iñaquito, Quito",
    empresa: "SEGURIDAD CORPORATIVA LATAM",
    usuario: "ANDRÉS JARAMILLO",
    estado: "INICIADO",
    ultimaActualizacion: "19:43",
  },
  {
    id: "2",
    asistencia: "Alerta Médica",
    zona: "Cumbayá",
    empresa: "ZEPHIRA FAMILIAR",
    usuario: "MARÍA ELENA PONCE",
    estado: "CERRADO",
    ultimaActualizacion: "14:20",
  }
];

// --- SUB-COMPONENTES ---

function Sidebar() {
  const item = (Icon: any, label: string, active?: boolean) => (
    <div className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all cursor-pointer ${active ? "bg-white/10 text-white font-bold" : "text-slate-500 hover:text-white"}`}>
      <Icon size={18} />
      <span>{label}</span>
    </div>
  );

  return (
    <aside className="hidden h-screen w-[280px] flex-col border-r border-white/5 bg-[#0B1120] md:flex">
      <div className="px-6 py-8">
        <img src="https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-xbqfqjzj8smhyksbb8z7.webp" alt="AsecuriTech" className="h-8 w-auto" />
      </div>

      <div className="px-4 pb-6">
        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 border border-white/5 shadow-xl">
          <img src="https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-user.webp" alt="Admin" className="h-10 w-10 rounded-full object-cover" />
          <div className="min-w-0 text-left">
            <div className="truncate text-xs font-bold text-white uppercase tracking-tight">SANTIAGO PAZMIÑO</div>
            <div className="text-[10px] text-brand-sky font-black tracking-widest">SUPERVISOR QUITO</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-4 mt-4">
        {item(LayoutDashboard, "Dashboard")}
        {item(FileText, "Incidencias", true)}
        {item(Building2, "Empresas")}
        {item(Users, "Usuarios")}
      </nav>
    </aside>
  );
}

function EmergenciaFlowSheet({ selected }: { selected: any }) {
  const inc = selected ?? MOCK_INCIDENCIAS[0];
  return (
    <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] p-8 h-full overflow-y-auto pb-20">
      <div className="space-y-4">
        <div className="h-[450px] w-full rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl relative bg-black/40">
           <DynamicMap />
        </div>
        <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-[10px] font-mono text-slate-500 flex justify-between">
           <span>COORD: -0.1807, -78.4678</span>
           <span className="animate-pulse text-red-500 font-bold">● VIVO</span>
        </div>
      </div>

      <div className="space-y-4">
        <Card className="bg-white/5 border-white/10 rounded-[2rem] overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <img src="https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-Botones%20Asischeck%20(5).webp" className="h-14 w-14 rounded-2xl" alt="SOS" />
              <div>
                <h3 className="font-bold text-white uppercase text-lg leading-tight">{inc.asistencia}</h3>
                <span className="text-[10px] text-brand-sky font-black tracking-widest uppercase">{inc.usuario}</span>
              </div>
            </div>
            
            <Tabs defaultValue="ticket" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-black/20 p-1">
                <TabsTrigger value="ticket">INFO</TabsTrigger>
                <TabsTrigger value="avisar">AVISAR</TabsTrigger>
                <TabsTrigger value="cierre">CIERRE</TabsTrigger>
              </TabsList>
              <TabsContent value="ticket" className="mt-4">
                <p className="text-xs text-slate-400 mb-4 italic">"Confirmar apertura de ticket operativo para sector Iñaquito."</p>
                <Button className="w-full font-black text-xs uppercase tracking-widest py-6">Confirmar Ticket</Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 rounded-[2rem]">
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Bitácora Operativa</label>
              <Textarea placeholder="Ingresar novedades..." className="bg-black/20 border-white/10 text-white rounded-xl min-h-[120px]" />
            </div>
            <Button className="w-full bg-brand-sky text-brand-navy font-black text-xs uppercase tracking-widest hover:bg-white transition-all py-6">
              Guardar en Bitácora
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL (EXPORT DEFAULT) ---
export default function IncidenciasDashboard() {
  const [selectedId, setSelectedId] = React.useState<string | null>(MOCK_INCIDENCIAS[0].id);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const selected = React.useMemo(
    () => MOCK_INCIDENCIAS.find((i) => i.id === selectedId) ?? null,
    [selectedId]
  );

  return (
    <div className="flex min-h-screen bg-[#0B1120] text-slate-300">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <header className="flex items-center justify-between border-b border-white/5 px-8 py-6">
          <div className="text-left">
            <h1 className="text-2xl font-black text-white tracking-tighter">SENTINEL OS</h1>
            <p className="text-xs text-slate-500 font-medium">Gestión Crítica de Incidencias • Quito</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="rounded-xl border-white/10 text-slate-400 gap-2 text-xs">
              <RefreshCcw size={14} /> Refrescar
            </Button>
            <Button 
              variant="destructive" 
              className="rounded-xl font-black text-xs uppercase tracking-widest px-6 animate-pulse"
              onClick={() => { setSelectedId("1"); setIsSheetOpen(true); }}
            >
              Simular SOS
            </Button>
          </div>
        </header>

        <div className="p-8 text-left">
           <Card className="bg-white/5 border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <CardHeader className="px-8 pt-8">
                <CardTitle className="text-white">Listado de Alertas Activas</CardTitle>
              </CardHeader>
              <CardContent className="px-4">
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/5 hover:bg-transparent">
                      <TableHead className="text-slate-500 font-bold">ASISTENCIA</TableHead>
                      <TableHead className="text-slate-500 font-bold">USUARIO</TableHead>
                      <TableHead className="text-slate-500 font-bold">ZONA</TableHead>
                      <TableHead className="text-slate-500 font-bold">ESTADO</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {MOCK_INCIDENCIAS.map((i) => (
                      <TableRow 
                        key={i.id} 
                        className="border-white/5 hover:bg-white/5 cursor-pointer"
                        onClick={() => { setSelectedId(i.id); setIsSheetOpen(true); }}
                      >
                        <TableCell className="text-white font-bold">{i.asistencia}</TableCell>
                        <TableCell className="text-brand-sky font-bold text-xs uppercase">{i.usuario}</TableCell>
                        <TableCell className="text-slate-400">{i.zona}</TableCell>
                        <TableCell>
                           <Badge variant={i.estado === "INICIADO" ? "destructive" : "outline"} className="font-bold uppercase text-[9px]">
                              {i.estado}
                           </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
           </Card>
        </div>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetContent side="right" className="w-full sm:max-w-[950px] bg-[#0B1120] border-l border-white/10 p-0 overflow-hidden">
             <div className="h-full flex flex-col">
                <div className="px-8 py-8 border-b border-white/5 text-left">
                   <SheetTitle className="text-white text-3xl font-black flex items-center gap-3 tracking-tighter">
                      <AlertTriangle className="text-red-500" /> MONITOR OPERATIVO
                   </SheetTitle>
                </div>
                <div className="flex-1">
                   <EmergenciaFlowSheet selected={selected} />
                </div>
             </div>
          </SheetContent>
        </Sheet>
      </main>
    </div>
  );
}