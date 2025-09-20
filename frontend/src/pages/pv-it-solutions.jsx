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

export default function PVITSolutionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-red-50">
      {/* Hero */}
      <section className="relative">
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-10">
          <div className="flex items-start gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                PV IT SOLUTIONS
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-gray-600">
                Professional low-voltage & IT infrastructure services for offices, residences, and retail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, img, blurb }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="
                group relative overflow-hidden rounded-2xl
                shadow-sm hover:shadow-md ring-1 ring-black/5
                h-56 sm:h-64
              "
            >
              {/* Background image fills the whole card */}
              <img
                src={img}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-lg font-semibold text-white drop-shadow-sm">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-white/90 line-clamp-3">
                  {blurb}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs text-white/90 backdrop-blur">
                    Supply & Install
                  </span>
                  <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs text-white/90 backdrop-blur">
                    Maintenance
                  </span>
                  <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs text-white/90 backdrop-blur">
                    AMC
                  </span>
                </div>
              </div>

              {/* Optional thin red outline (poster look) */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-red-600/60" />
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
