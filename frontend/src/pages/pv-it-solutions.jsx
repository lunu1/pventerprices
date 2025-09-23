"use client";
import { motion } from "framer-motion";
import { Navbar } from "../features/navigation/components/Navbar";

const items = [
  { title: "CCTV", img: "/images/services/cctv.jpg", blurb: "End-to-end surveillance design, installation, and remote monitoring." },
  { title: "PABX", img: "/images/services/pabx.jpg", blurb: "On-prem & cloud PBX setup, IVR, call routing, and SIP trunking." },
  { title: "Networking", img: "/images/services/networking.jpg", blurb: "Structured LAN/Wi-Fi, switching, routing, and performance tuning." },
  { title: "Access Control", img: "/images/services/access-control.jpg", blurb: "RFID/QR access, door controllers, turnstiles, and audit logs." },
  { title: "Biometric", img: "/images/services/biometric.jpg", blurb: "Fingerprint/face scanners with attendance & HR integrations." },
  { title: "Intercom System", img: "/images/services/intercom.jpg", blurb: "Multi-apartment/IP intercoms with video and mobile apps." },
  { title: "Group Video Conference System", img: "/images/services/video-conference.jpg", blurb: "Boardroom VC, cameras, beam mics, displays, Zoom/Teams." },
  { title: "IT Troubleshooting", img: "/images/services/it-support.jpg", blurb: "On-site & remote support, OS, hardware, and network fixes." },
  { title: "Basic Electrical Works", img: "/images/services/electrical.jpg", blurb: "Low-voltage runs, safe terminations, and device power needs." },
  { title: "Motion Sensor Alarm System", img: "/images/services/alarm.jpg", blurb: "Intrusion alarms, PIR sensors, sirens, and alert workflows." },
  { title: "Structured Cabling", img: "/images/services/structured-cabling.webp", blurb: "Cat6/6A, fiber backbones, labeling, and certification reports." },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
};

function ServiceCard({ title, img, blurb }) {
  return (
    <motion.article
      variants={itemVariant}
      className="group relative isolate h-56 sm:h-64 overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-sm hover:shadow-xl transition-all duration-300"
      style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
    >
      <img
        src={img}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        <h3 className="text-lg font-semibold text-white drop-shadow">{title}</h3>
        <p className="mt-1 line-clamp-3 text-sm text-white/90">{blurb}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Supply & Install", "Maintenance", "AMC"].map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-white/15 px-2.5 py-1 text-xs text-white/90 backdrop-blur ring-1 ring-white/20"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-red-600/60" />
    </motion.article>
  );
}

export default function PVITSolutionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-red-50">
      {/* Hero */}
      <section className="relative">
        <Navbar />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-10"> 
  <div
  className="relative overflow-hidden rounded-3xl border border-black/10
             bg-center bg-no-repeat bg-cover
             min-h-[420px] md:min-h-[520px] lg:min-h-[460px]"
  style={{ backgroundImage: "url('/images/services/service-bg.png')",backgroundPosition: "40% 45%",      // was center; nudges away from pillars
  backgroundSize: "110%",        }}
>

    {/* overlays */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/30" />
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    />

    {/* content: fill the hero height without adding extra min-h */}
    <div className="relative flex h-full items-end p-8 sm:p-12"> {/* h-full instead of min-h */}
      <div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          IT AND AUTOMATION SOLUTION
        </h1>
        <p className="mt-3 max-w-2xl text-base sm:text-lg text-white/90">
          Smart IT and automation systems that simplify control, boost performance, and connect your spaces — from offices to homes.
        </p>
      </div>
    </div>
  </div>
</div>

      </section>

      {/* Services grid — uses only items[] */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </motion.div>
      </section>
    </main>
  );
}
