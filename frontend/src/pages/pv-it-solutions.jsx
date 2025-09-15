"use client";
import { motion } from "framer-motion";
import { Camera, Phone, Network, KeySquare, Fingerprint, Video, Wrench, Zap, Bell, Cable, Shield } from "lucide-react";
import { Navbar } from "../features/navigation/components/Navbar";

const items = [
  { title: "CCTV", icon: Camera, blurb: "End-to-end surveillance design, installation, and remote monitoring." },
  { title: "PABX", icon: Phone, blurb: "On-prem & cloud PBX setup, IVR, call routing, and SIP trunking." },
  { title: "Networking", icon: Network, blurb: "Structured LAN/Wi-Fi, switching, routing, and performance tuning." },
  { title: "Access Control", icon: KeySquare, blurb: "RFID/QR access, door controllers, turnstiles, and audit logs." },
  { title: "Biometric", icon: Fingerprint, blurb: "Fingerprint/face scanners with attendance & HR integrations." },
  { title: "Intercom System", icon: Phone, blurb: "Multi-apartment/IP intercoms with video and mobile apps." },
  { title: "Group Video Conference System", icon: Video, blurb: "Boardroom VC, cameras, beam mics, displays, Zoom/Teams." },
  { title: "IT Troubleshooting", icon: Wrench, blurb: "On-site & remote support, OS, hardware, and network fixes." },
  { title: "Basic Electrical Works", icon: Zap, blurb: "Low-voltage runs, safe terminations, and device power needs." },
  { title: "Motion Sensor Alarm System", icon: Bell, blurb: "Intrusion alarms, PIR sensors, sirens, and alert workflows." },
  { title: "Structured Cabling", icon: Cable, blurb: "Cat6/6A, fiber backbones, labeling, and certification reports." },
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
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">PV IT SOLUTIONS</h1>
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
          {items.map(({ title, icon: Icon, blurb }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-red-600/10 text-red-700 group-hover:bg-red-600/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="text-sm text-gray-600">{blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600">Supply & Install</span>
                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600">Maintenance</span>
                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600">AMC</span>
              </div>
            </motion.article>
          ))}
        </div>


      </section>
    </main>
  );
}
