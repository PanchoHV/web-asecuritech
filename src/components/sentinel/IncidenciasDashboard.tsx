"use client";

import * as React from "react";
import {
  AlertTriangle,
  Bell,
  Building2,
  ChevronDown,
  CircleUser,
  Clock,
  FileText,
  Home,
  LayoutDashboard,
  MapPin,
  RefreshCcw,
  Search,
  ShieldAlert,
  Users,
  Wand2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type IncidenciaEstado = "INICIADO" | "PROCESANDO" | "CERRADO";
type IncidenciaCategoria = "Emergencia" | "Asistencia" | "Alerta";

type Incidencia = {
  id: string;
  asistencia: string;
  zona: string;
  empresa: string;
  usuario: string;
  estado: IncidenciaEstado;
  ultimaActualizacion: string;
  categoria: IncidenciaCategoria;
};

const MOCK_INCIDENCIAS: Incidencia[] = [
  {
    id: "1",
    asistencia: "Botón Anti-Secuestro SOS",
    zona: "SOS Anti Secuestro Zephira",
    empresa: "PLAN BÁSICO INDIVIDUAL",
    usuario: "FRANCISCO VASQ...",
    estado: "INICIADO",
    ultimaActualizacion: "Hoy",
    categoria: "Emergencia",
  },
  {
    id: "2",
    asistencia: "Botón SOS GRATUITO",
    zona: "Zona de Gestión Norte",
    empresa: "Zephira",
    usuario: "MICHAEL MUR...",
    estado: "CERRADO",
    ultimaActualizacion: "Hoy",
    categoria: "Asistencia",
  },
  {
    id: "3",
    asistencia: "Botón SOS GRATUITO",
    zona: "Zona de Gestión Centro",
    empresa: "Zephira",
    usuario: "MICHAEL MUR...",
    estado: "PROCESANDO",
    ultimaActualizacion: "Hoy",
    categoria: "Alerta",
  },
];

const SUPERVISORES = [
  { value: "sin-asignar", label: "Supervisor sin Asignar" },
  { value: "sup-1", label: "Supervisor QA 1" },
  { value: "sup-2", label: "Supervisor QA 2" },
];

function EstadoBadge({ estado }: { estado: IncidenciaEstado }) {
  const variant =
    estado === "INICIADO"
      ? "default"
      : estado === "PROCESANDO"
        ? "secondary"
        : "outline";
  return <Badge variant={variant}>{estado}</Badge>;
}

function CategoriaBadge({ categoria }: { categoria: IncidenciaCategoria }) {
  const variant =
    categoria === "Emergencia"
      ? "destructive"
      : categoria === "Alerta"
        ? "secondary"
        : "outline";
  return <Badge variant={variant}>{categoria}</Badge>;
}

function Sidebar() {
  const item = (
    Icon: React.ComponentType<{ className?: string }>,
    label: string,
    active?: boolean,
    pill?: string
  ) => (
    <div
      className={[
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm",
        active ? "bg-muted font-medium" : "hover:bg-muted/60",
      ].join(" ")}
    >
      <Icon className="h-4 w-4" />
      <span className="flex-1">{label}</span>
      {pill ? (
        <span className="rounded-full bg-red-100 px-2 py-0.5 text-[11px] text-red-700">
          {pill}
        </span>
      ) : null}
    </div>
  );

  return (
    <aside className="hidden h-screen w-[260px] flex-col border-r bg-background md:flex">
      <div className="flex items-center gap-2 px-4 py-4">
        <div className="grid h-8 w-8 place-content-center rounded-md bg-primary text-primary-foreground">
          <ShieldAlert className="h-5 w-5" />
        </div>
        <div className="text-base font-semibold">AsecuriTech</div>
      </div>

      <div className="px-4 pb-3">
        <div className="flex items-center gap-3 rounded-xl bg-muted/40 p-3">
          <div className="grid h-10 w-10 place-content-center rounded-full bg-muted">
            <CircleUser className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-medium">FRANCISCO VASQ...</div>
            <div className="text-xs text-muted-foreground">SUPER ADMINISTRADOR</div>
          </div>
        </div>
      </div>

      <div className="px-2">
        <div className="px-3 pb-2 text-xs text-muted-foreground">Menu</div>
        <nav className="space-y-1 px-2">
          {item(LayoutDashboard, "Dashboard")}
          {item(Building2, "Empresas")}
          {item(Wand2, "Servicios")}
          {item(FileText, "Incidencias", true, "new")}
          {item(Users, "Usuarios")}
        </nav>
      </div>

      <div className="mt-auto px-4 py-4 text-xs text-muted-foreground">v0.2 • Sentinel UI</div>
    </aside>
  );
}

function EmergenciaFlowSheet({
  selected,
  supervisor,
  estado,
  comentario,
  historial,
  onSupervisor,
  onEstado,
  onComentario,
  onGuardarComentario,
  onNotificar,
}: {
  selected: Incidencia | null;
  supervisor: string;
  estado: IncidenciaEstado;
  comentario: string;
  historial: string[];
  onSupervisor: (value: string) => void;
  onEstado: (value: IncidenciaEstado) => void;
  onComentario: (value: string) => void;
  onGuardarComentario: () => void;
  onNotificar: () => void;
}) {
  const inc = selected ?? MOCK_INCIDENCIAS[0];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-6 right-6 z-50 gap-2 shadow-lg"
          variant="destructive"
        >
          <ShieldAlert className="h-5 w-5" />
          Emergencia
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-[980px]">
        <SheetHeader className="pb-4">
          <SheetTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Gestión guiada de incidencia
          </SheetTitle>
          <div className="text-sm text-muted-foreground">
            Flujo: <b>detalles → ubicación → notificación → supervisor → estado → comentarios</b>.
          </div>
        </SheetHeader>

        <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-base">Mapa / Ubicación</CardTitle>
              <Button variant="ghost" size="sm" className="gap-2">
                <RefreshCcw className="h-4 w-4" />
                Refrescar
              </Button>
            </CardHeader>
            <CardContent>
              <div className="relative h-[360px] w-full overflow-hidden rounded-xl border bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100">
                <div className="absolute left-[20%] top-[35%] h-3 w-3 rounded-full bg-red-600 shadow-[0_0_0_8px_rgba(220,38,38,0.2)]" />
                <div className="absolute right-[25%] top-[20%] h-2 w-2 rounded-full bg-sky-500" />
                <div className="absolute left-[38%] bottom-[25%] h-2 w-2 rounded-full bg-emerald-500" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(0,0,0,.08),transparent_25%),radial-gradient(circle_at_70%_55%,rgba(0,0,0,.08),transparent_25%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-background/90 px-3 py-1 text-xs text-muted-foreground">
                    Placeholder — conecta Google Maps/Mapbox aquí
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <MapPin className="h-4 w-4" />
                  Historial de Ubicación
                </div>
                <div className="mt-2 overflow-hidden rounded-xl border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">#</TableHead>
                        <TableHead>Ubicación (Lat, Lng)</TableHead>
                        <TableHead className="w-[160px]">Exactitud (m)</TableHead>
                        <TableHead className="w-[180px]">Fecha</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { n: 1, ll: "(-0.13585, -78.46205)", ex: 15.2, f: "2026-02-10 19:43" },
                        { n: 2, ll: "(-0.13586, -78.46206)", ex: 18.4, f: "2026-02-10 19:43" },
                        { n: 3, ll: "(-0.13588, -78.46208)", ex: 20.0, f: "2026-02-10 19:43" },
                      ].map((r) => (
                        <TableRow key={r.n}>
                          <TableCell>{r.n}</TableCell>
                          <TableCell className="font-mono text-xs">{r.ll}</TableCell>
                          <TableCell>{r.ex}</TableCell>
                          <TableCell className="text-muted-foreground">{r.f}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-base">Incidencia</CardTitle>
                <div className="text-sm text-muted-foreground">Incidencias / Abrir Ticket</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-content-center rounded-full border bg-red-100 text-red-700">
                    <ShieldAlert className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-medium">{inc.asistencia}</div>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <span className="text-xs text-muted-foreground">Categoría:</span>
                      <CategoriaBadge categoria={inc.categoria} />
                      <span className="text-xs text-muted-foreground">Estado:</span>
                      <EstadoBadge estado={estado} />
                    </div>
                  </div>
                </div>

                <Button className="w-full" variant="default">
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-base">Notificación</CardTitle>
                <div className="text-sm text-muted-foreground">
                  Servicios disponibles: <b>Email</b>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="rounded-xl border bg-sky-50 p-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    Servicios de notificación disponibles: <b>Email</b>
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { name: "Contacto 1", value: "*********806" },
                    { name: "Contacto 2", value: "*********242" },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center justify-between rounded-xl border p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                          <CircleUser className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{c.name}</div>
                          <div className="text-xs text-muted-foreground">{c.value}</div>
                        </div>
                      </div>
                      <Badge variant="outline">Email</Badge>
                    </div>
                  ))}
                </div>

                <Button className="w-full gap-2" onClick={onNotificar}>
                  <Bell className="h-4 w-4" />
                  Notificar
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-base">Asignación</CardTitle>
                <div className="text-sm text-muted-foreground">Supervisor y estado operativo</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="mb-2 text-xs font-medium text-muted-foreground">Supervisor</div>
                  <Select value={supervisor} onValueChange={onSupervisor}>
                    <SelectTrigger className="bg-amber-100">
                      <SelectValue placeholder="Supervisor sin Asignar" />
                    </SelectTrigger>
                    <SelectContent>
                      {SUPERVISORES.map((s) => (
                        <SelectItem key={s.value} value={s.value}>
                          {s.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <div className="mb-2 text-xs font-medium text-muted-foreground">Estado</div>
                  <Select value={estado} onValueChange={(v) => onEstado(v as IncidenciaEstado)}>
                    <SelectTrigger className="bg-emerald-100">
                      <SelectValue placeholder="ESTADO INICIADO" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="INICIADO">ESTADO INICIADO</SelectItem>
                      <SelectItem value="PROCESANDO">ESTADO PROCESANDO</SelectItem>
                      <SelectItem value="CERRADO">ESTADO CERRADO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-6" />

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Asistente (instrucciones paso a paso)</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="paso-1">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
                <TabsTrigger value="paso-1">1. Ticket</TabsTrigger>
                <TabsTrigger value="paso-2">2. Ubicación</TabsTrigger>
                <TabsTrigger value="paso-3">3. Notificar</TabsTrigger>
                <TabsTrigger value="paso-4">4. Supervisor</TabsTrigger>
                <TabsTrigger value="paso-5">5. Estado</TabsTrigger>
                <TabsTrigger value="paso-6">6. Registro</TabsTrigger>
              </TabsList>

              <TabsContent value="paso-1" className="mt-4 space-y-3">
                <div className="text-sm">
                  <b>Objetivo:</b> identificar la incidencia y abrir/confirmar ticket operativo.
                </div>
                <div className="rounded-xl border p-4 text-sm text-muted-foreground">
                  1) Selecciona la incidencia (fila en la tabla). 2) “Ver Detalles”. 3) Verifica categoría, usuario, zona y empresa.
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <Input placeholder="Buscar por usuario / empresa (mock)" />
                  <Button variant="outline" className="gap-2">
                    <Search className="h-4 w-4" />
                    Buscar
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="paso-2" className="mt-4 space-y-3">
                <div className="text-sm">
                  <b>Objetivo:</b> validar el punto en mapa + revisar historial de coordenadas y exactitud.
                </div>
                <div className="rounded-xl border p-4 text-sm text-muted-foreground">
                  1) Refresca ubicación. 2) Si la exactitud es mala, espera nuevo ping o solicita confirmación al usuario/canal. 3) Guarda evidencia en historial.
                </div>
              </TabsContent>

              <TabsContent value="paso-3" className="mt-4 space-y-3">
                <div className="text-sm">
                  <b>Objetivo:</b> notificar contactos del grupo de respuesta (Email/WhatsApp/SMS).
                </div>
                <div className="rounded-xl border p-4 text-sm text-muted-foreground">
                  1) Selecciona canal. 2) Elige contactos. 3) Envía notificación. 4) Registra “Fecha de envío” + resultado (OK/Fail).
                </div>
              </TabsContent>

              <TabsContent value="paso-4" className="mt-4 space-y-3">
                <div className="text-sm">
                  <b>Objetivo:</b> asignar un supervisor responsable y dejar trazabilidad.
                </div>
                <div className="rounded-xl border p-4 text-sm text-muted-foreground">
                  1) Asigna supervisor. 2) Confirma que queda registrado en “historial de cambios”. 3) Si hay SLA, dispara temporizador.
                </div>
              </TabsContent>

              <TabsContent value="paso-5" className="mt-4 space-y-3">
                <div className="text-sm">
                  <b>Objetivo:</b> avanzar el estado: INICIADO → PROCESANDO → CERRADO.
                </div>
                <div className="rounded-xl border p-4 text-sm text-muted-foreground">
                  Reglas sugeridas: INICIADO cuando entra. PROCESANDO cuando un humano toma control. CERRADO cuando se resuelve y hay evidencia/nota final.
                </div>
              </TabsContent>

              <TabsContent value="paso-6" className="mt-4 space-y-3">
                <div className="text-sm">
                  <b>Objetivo:</b> registrar comentario operativo y generar “Historial de Cambios”.
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-muted-foreground">Comentario</div>
                    <Textarea
                      placeholder="Ej: Se notificó a Contacto 1 y Contacto 2. Supervisor asignado..."
                      value={comentario}
                      onChange={(e) => onComentario(e.target.value)}
                    />
                    <Button className="w-full" onClick={onGuardarComentario}>
                      Guardar
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-muted-foreground">Historial</div>
                    <div className="space-y-2 rounded-xl border p-3 text-sm">
                      {historial.map((t, i) => (
                        <div key={`${t}-${i}`} className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </SheetContent>
    </Sheet>
  );
}

export default function IncidenciasDashboard() {
  const [selectedId, setSelectedId] = React.useState<string | null>(MOCK_INCIDENCIAS[0].id);
  const [search, setSearch] = React.useState("");
  const [supervisor, setSupervisor] = React.useState("sin-asignar");
  const [estado, setEstado] = React.useState<IncidenciaEstado>("INICIADO");
  const [comentario, setComentario] = React.useState("");
  const [historial, setHistorial] = React.useState<string[]>([
    "Incidencia creada por Botón SOS",
    "Notificación pendiente",
  ]);

  const filteredIncidencias = React.useMemo(() => {
    const query = search.toLowerCase();
    return MOCK_INCIDENCIAS.filter((i) => {
      return (
        i.usuario.toLowerCase().includes(query) ||
        i.empresa.toLowerCase().includes(query) ||
        i.zona.toLowerCase().includes(query)
      );
    });
  }, [search]);

  const selected = React.useMemo(
    () => filteredIncidencias.find((i) => i.id === selectedId) ?? filteredIncidencias[0] ?? null,
    [filteredIncidencias, selectedId]
  );

  React.useEffect(() => {
    if (selected) {
      setEstado(selected.estado);
    }
  }, [selected]);

  const addHistorial = (texto: string) => {
    setHistorial((prev) => [`${new Date().toLocaleTimeString("es-EC", { hour: "2-digit", minute: "2-digit" })} · ${texto}`, ...prev]);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar />

        <main className="flex-1">
          <div className="flex items-center justify-between gap-3 border-b px-4 py-3 md:px-6">
            <div className="flex items-center gap-2">
              <Home className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Incidencias</span>
              <span className="text-sm text-muted-foreground">/</span>
              <span className="text-sm font-medium">Listado</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="gap-2">
                <RefreshCcw className="h-4 w-4" />
                Refrescar
              </Button>
              <Button variant="outline" className="gap-2">
                <FileText className="h-4 w-4" />
                Abrir Ticket
              </Button>
              <Button variant="ghost" size="icon" aria-label="Usuario">
                <CircleUser className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4 px-4 py-5 md:px-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-xl font-semibold">Incidencias</h1>
                <div className="text-sm text-muted-foreground">
                  Dashboard interactivo + gestión guiada desde “Emergencia”.
                </div>
              </div>
              <div className="flex w-full gap-2 md:w-[520px]">
                <Input
                  placeholder="Buscar usuario / empresa / zona"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="outline" className="gap-2">
                  <Search className="h-4 w-4" />
                  Buscar
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-base">Listado</CardTitle>
                <div className="text-sm text-muted-foreground">
                  Mostrar: <b>{filteredIncidencias.length}</b> <ChevronDown className="inline h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden rounded-xl border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-10">#</TableHead>
                        <TableHead>Asistencia</TableHead>
                        <TableHead>Zona de Gestión</TableHead>
                        <TableHead>Empresa</TableHead>
                        <TableHead>Usuario</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Últ. Act.</TableHead>
                        <TableHead className="w-[140px]">Categoría</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredIncidencias.map((i, idx) => {
                        const active = i.id === selected?.id;
                        return (
                          <TableRow
                            key={i.id}
                            className={active ? "bg-muted/40" : "cursor-pointer"}
                            onClick={() => setSelectedId(i.id)}
                          >
                            <TableCell>{idx + 1}</TableCell>
                            <TableCell className="font-medium">{i.asistencia}</TableCell>
                            <TableCell>{i.zona}</TableCell>
                            <TableCell>{i.empresa}</TableCell>
                            <TableCell className="truncate">{i.usuario}</TableCell>
                            <TableCell>
                              <EstadoBadge estado={active ? estado : i.estado} />
                            </TableCell>
                            <TableCell className="text-muted-foreground">{i.ultimaActualizacion}</TableCell>
                            <TableCell>
                              <CategoriaBadge categoria={i.categoria} />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                  <span>
                    1–{filteredIncidencias.length} de {MOCK_INCIDENCIAS.length}
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      1
                    </Button>
                    <Button variant="ghost" size="sm">
                      2
                    </Button>
                    <Button variant="ghost" size="sm">
                      3
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-xs text-muted-foreground">
              Nota: panel diseñado para conectar API/WebSockets/Maps sin tocar estructura visual.
            </div>
          </div>

          <EmergenciaFlowSheet
            selected={selected}
            supervisor={supervisor}
            estado={estado}
            comentario={comentario}
            historial={historial}
            onSupervisor={(value) => {
              setSupervisor(value);
              const label = SUPERVISORES.find((s) => s.value === value)?.label ?? value;
              addHistorial(`Supervisor asignado: ${label}`);
            }}
            onEstado={(value) => {
              setEstado(value);
              addHistorial(`Estado actualizado: ${value}`);
            }}
            onComentario={setComentario}
            onGuardarComentario={() => {
              if (!comentario.trim()) return;
              addHistorial(`Comentario: ${comentario.trim()}`);
              setComentario("");
            }}
            onNotificar={() => addHistorial("Notificación enviada a contactos prioritarios")}
          />
        </main>
      </div>
    </div>
  );
}
