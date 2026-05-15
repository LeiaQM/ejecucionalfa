import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HotmartButton } from "@/components/HotmartButton";
import heroMockup from "@/assets/hero-mockup.png";
import bookCover from "@/assets/book-cover.png";
import bonusFinanzas from "@/assets/bonus-finanzas.png";
import bonusTracker from "@/assets/bonus-tracker.png";
import bonusPlan from "@/assets/bonus-plan.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ejecución Alfa — Sistema Neuroperformance Elite | Neuromastery" },
      {
        name: "description",
        content:
          "No te falta potencial. Te falta ejecución. Sistema de neuroperformance para hombres atrapados en hábitos de bajo nivel, procrastinación y falta de enfoque.",
      },
      { property: "og:title", content: "Ejecución Alfa — Neuromastery" },
      { property: "og:description", content: "Sistema neuroperformance elite. Ejecuta o sigue igual." },
    ],
  }),
  component: LandingPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] radial-cyan opacity-50" />
      <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] radial-cyan opacity-30 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] radial-cyan opacity-20 blur-3xl" />
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#00EAFF]"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 100}%`,
            filter: "blur(1px)",
            boxShadow: "0 0 8px rgba(0,234,255,0.8)",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-6 py-20">
      <div className="divider-glow" />
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#00EAFF]/30 bg-[#00EAFF]/5 backdrop-blur-sm">
      <div className="w-1.5 h-1.5 rounded-full bg-[#00EAFF] animate-pulse-glow" />
      <span className="text-[10px] tracking-[0.3em] font-semibold text-[#00EAFF] uppercase">
        {children}
      </span>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeUp} className="space-y-8">
          <Tag>Neuromastery®</Tag>
          <h1 className="font-display text-[clamp(2.8rem,6.5vw,5.5rem)] leading-[0.95] font-bold tracking-tight text-balance">
            NO TE FALTA <br className="hidden sm:block" />
            POTENCIAL.
            <br />
            TE FALTA{" "}
            <span className="text-cyan-neon italic">
              EJECUCIÓN.
            </span>
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-[#00EAFF] shadow-[0_0_10px_#00EAFF]" />
            <span className="text-[11px] tracking-[0.3em] font-semibold text-[#00EAFF] uppercase">
              Sistema Neuroperformance Elite
            </span>
          </div>
          <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed font-light">
            Un sistema de neurobiología diseñado para hombres atrapados en
            hábitos de bajo nivel, procrastinación y falta de enfoque.
          </p>
          <div className="pt-4">
            <HotmartButton label="​" size="large" />
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 text-sm text-white/60">
            {["Acceso inmediato", "Formato digital", "Lectura práctica"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="text-[#00EAFF]">✔</span>
                {t}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 radial-cyan blur-3xl opacity-70" />
          <motion.img
            src={heroMockup}
            alt="Ejecución Alfa - Mockup laptop libro celular"
            className="relative w-full h-auto"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

function MenteSecuestrada() {
  const cards = [
    {
      title: "Dopamina barata",
      text: "Scrolling infinito, notificaciones, contenido vacío. Tu cerebro está siendo entrenado para la mediocridad cada hora del día.",
    },
    {
      title: "Ansiedad silenciosa",
      text: "Esa sensación constante de que deberías estar haciendo algo más. Vives en modo supervivencia disfrazado de productividad.",
    },
    {
      title: "Potencial desperdiciado",
      text: "Sabes que puedes más. Lo sientes. Pero cada noche te acuestas con la misma deuda contigo mismo: hoy tampoco ejecutaste.",
    },
  ];
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-20">
          <Tag>Diagnóstico</Tag>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight mt-6 leading-[0.95]">
            TU MENTE FUE <br />
            <span className="text-cyan-neon italic">SECUESTRADA</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 rounded-md transition-all duration-500"
            >
              <div className="text-[#00EAFF] font-mono text-sm mb-4">0{i + 1}</div>
              <h3 className="font-display text-2xl font-semibold mb-4">{c.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{c.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp}
          className="text-center font-display text-[clamp(1.8rem,4vw,3.2rem)] font-bold tracking-tight max-w-4xl mx-auto leading-tight"
        >
          EL PROBLEMA NO ES MOTIVACIÓN.
          <br />
          ES <span className="text-cyan-neon">CONDICIONAMIENTO.</span>
        </motion.p>
      </div>
    </section>
  );
}

function MetodoAlfa() {
  const letters = [
    { letter: "A", title: "Atención extrema", desc: "Recupera el control de tu foco mental." },
    { letter: "L", title: "Liderazgo mental", desc: "Domínate antes de pretender dominar tu vida." },
    { letter: "F", title: "Focus profundo", desc: "Estados de deep work sostenidos por horas." },
    { letter: "A", title: "Acción estratégica", desc: "Ejecuta lo que importa. Elimina el ruido." },
  ];
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-20">
          <Tag>El Método</Tag>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight mt-6">
            EL MÉTODO <span className="text-cyan-neon italic">ALFA</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {letters.map((l, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 rounded-md min-h-[280px] flex flex-col justify-between transition-all duration-500"
            >
              <div
                className="font-display text-[8rem] leading-none font-bold text-cyan-neon"
                style={{ textShadow: "0 0 40px rgba(0,234,255,0.6)" }}
              >
                {l.letter}
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">{l.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{l.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Transformacion() {
  const antes = ["Procrastinación crónica", "Mente dispersa", "Baja energía", "Consumo compulsivo"];
  const despues = ["Claridad mental", "Disciplina", "Enfoque profundo", "Ejecución consistente", "Control dopaminérgico"];
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-20">
          <Tag>Transformación</Tag>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold tracking-tight mt-6">
            DE QUIÉN ERES <span className="text-cyan-neon italic">A QUIÉN SERÁS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div {...fadeUp} className="glass-card p-10 rounded-md">
            <div className="text-xs tracking-[0.3em] text-white/40 mb-6 font-semibold">ANTES</div>
            <ul className="space-y-4">
              {antes.map((a) => (
                <li key={a} className="flex items-start gap-3 text-white/50 line-through decoration-white/30">
                  <span className="text-white/30 mt-1">✕</span>
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 radial-cyan blur-3xl scale-150 opacity-80" />
              <motion.svg
                viewBox="0 0 120 110"
                className="relative w-40 h-40 md:w-56 md:h-56"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <polygon
                  points="60,10 110,100 10,100"
                  fill="none"
                  stroke="#00EAFF"
                  strokeWidth="2"
                  style={{ filter: "drop-shadow(0 0 12px #00EAFF)" }}
                />
              </motion.svg>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="glass-card p-10 rounded-md glow-cyan">
            <div className="text-xs tracking-[0.3em] text-[#00EAFF] mb-6 font-semibold">DESPUÉS</div>
            <ul className="space-y-4">
              {despues.map((d) => (
                <li key={d} className="flex items-start gap-3 text-white/90">
                  <span className="text-[#00EAFF] mt-1">▲</span>
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Contenido() {
  const chapters = [
    { n: "01", title: "El Veneno Digital", text: "Analizaremos el \"veneno\" que le inyectas a tu sistema (scrolling, porno, videojuegos) y cómo limpiar la maquinaria mental." },
    { n: "02", title: "Arquitectura Mental", text: "Descubriremos tu arquitectura mental para que dejes de pelear contra tu naturaleza." },
    { n: "03", title: "Mañanas Blindadas", text: "Blindaremos tus mañanas para que salgas al mundo con una ventaja competitiva." },
    { n: "04", title: "Rediseño del Entorno", text: "Rediseñaremos tu entorno; si tu espacio es mediocre, tu ejecución será mediocre." },
    { n: "05", title: "Protocolo 20 Días", text: "Ejecutaremos un protocolo de 20 días para consolidar tu nueva versión operativa." },
  ];
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-20">
          <Tag>Programa</Tag>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight mt-6">
            CONTENIDO DEL <span className="text-cyan-neon italic">PROGRAMA</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00EAFF]/40 to-transparent" />
          <div className="space-y-12">
            {chapters.map((c, i) => (
              <motion.div
                key={c.n}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className={`relative flex md:items-center gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00EAFF] shadow-[0_0_20px_#00EAFF] z-10" />
                <div className="md:w-1/2 pl-20 md:pl-0 md:px-12">
                  <div className="glass-card p-8 rounded-md">
                    <div className="font-mono text-[#00EAFF] text-xs tracking-widest mb-3">CAPÍTULO {c.n}</div>
                    <h3 className="font-display text-2xl font-semibold mb-3">{c.title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm">{c.text}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Bonus() {
  const bonuses = [
    { title: "Plan de Acción Alfa", desc: "Roadmap ejecutivo día a día. Sin teoría. Solo acción.", img: bonusPlan },
    { title: "Trackeador de Hábitos y Progreso", desc: "Sistema de tracking diseñado para mantenerte en la línea.", img: bonusTracker },
    { title: "Organización de Finanzas", desc: "Plantilla premium para auditar y reorganizar tu economía.", img: bonusFinanzas },
  ];
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-20">
          <Tag>Incluido</Tag>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight mt-6">
            BONUS <span className="text-cyan-neon italic">EXCLUSIVOS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {bonuses.map((b, i) => (
            <motion.div
              key={b.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-md overflow-hidden transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden bg-black">
                <div className="absolute inset-0 radial-cyan opacity-40" />
                <img src={b.img} alt={b.title} className="relative w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <div className="text-[#00EAFF] font-mono text-xs tracking-widest mb-3">BONUS 0{i + 1}</div>
                <h3 className="font-display text-xl font-semibold mb-3">{b.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="text-center space-y-8">
          <p className="font-display text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-tight max-w-3xl mx-auto leading-tight">
            ESTÁS A UN PASO DE TU{" "}
            <span className="text-cyan-neon italic">NUEVA VERSIÓN.</span>
          </p>
          <HotmartButton label="​" size="large" />
        </motion.div>
      </div>
    </section>
  );
}

function PainCTA() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <motion.h2
          {...fadeUp}
          className="font-display text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight leading-[1] text-balance"
        >
          "LOS HOMBRES DÉBILES NECESITAN MOTIVACIÓN.
          <br />
          <span className="text-cyan-neon italic">LOS FUERTES NECESITAN SISTEMA."</span>
        </motion.h2>
        <motion.p {...fadeUp} className="text-white/50 max-w-xl mx-auto">
          Seguir distrayéndote también es una decisión. Tu mente ya sabe que necesitas cambiar.
        </motion.p>
        <motion.div {...fadeUp}>
          <HotmartButton label="​" size="large" />
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute inset-0 radial-cyan blur-3xl opacity-80 scale-110" />
          <motion.img
            src={bookCover}
            alt="Ejecución Alfa libro"
            className="relative w-full max-w-md mx-auto"
            animate={{ y: [0, -15, 0], rotate: [-1, 1, -1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div {...fadeUp} className="order-1 lg:order-2 space-y-8">
          <Tag>Última llamada</Tag>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight leading-[0.95]">
            TU NUEVA <br />
            IDENTIDAD <br />
            <span className="text-cyan-neon italic">EMPIEZA HOY.</span>
          </h2>
          <p className="text-white/60 text-sm tracking-wider">
            Acceso inmediato • Actualizaciones futuras • Formato digital
          </p>
          <div className="pt-2">
            <HotmartButton label="​" size="large" />
          </div>
          <p className="text-white/40 text-sm italic text-center font-mono">
            Un sistema de neurobiología diseñado para hombres atrapados en hábitos de bajo nivel, procrastinación y falta de enfoque.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-[#00EAFF]/10 py-12 px-6 mt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00EAFF]/60 to-transparent shadow-[0_0_20px_#00EAFF]" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <polygon points="12,3 22,21 2,21" fill="none" stroke="#00EAFF" strokeWidth="2" style={{ filter: "drop-shadow(0 0 6px #00EAFF)" }} />
          </svg>
          <span className="font-display font-bold tracking-wider text-sm">NEUROMASTERY®</span>
        </div>
        <p className="text-white/40 text-xs tracking-[0.2em] uppercase">
          Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#050505]/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <polygon points="12,3 22,21 2,21" fill="none" stroke="#00EAFF" strokeWidth="2" style={{ filter: "drop-shadow(0 0 6px #00EAFF)" }} />
          </svg>
          <span className="font-display font-bold tracking-wider text-sm">EJECUCIÓN ALFA</span>
        </div>
        <div className="hidden md:block text-[10px] tracking-[0.3em] text-white/50 font-semibold">
          SEC_ALFA // ACTIVO
        </div>
      </div>
    </nav>
  );
}

function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      <AmbientBackground />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <SectionDivider />
        <MenteSecuestrada />
        <PainCTA />
        <SectionDivider />
        <MetodoAlfa />
        <SectionDivider />
        <Transformacion />
        <SectionDivider />
        <Contenido />
        <SectionDivider />
        <Bonus />
        <SectionDivider />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}
