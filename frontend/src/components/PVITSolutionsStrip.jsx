// components/PVITSolutionsStrip.jsx
import { motion } from "framer-motion";
import { Shield, Camera, Network, KeySquare, Fingerprint, Phone, Video, Wrench, Zap, Bell, Cable } from "lucide-react";
import { Navbar } from "../features/navigation/components/Navbar";

const services = [
  { label: "CCTV", icon: Camera },
  { label: "PABX", icon: Phone },
  { label: "Networking", icon: Network },
  { label: "Access Control", icon: KeySquare },
  { label: "Biometric", icon: Fingerprint },
  { label: "Intercom System", icon: Phone },
  { label: "Group Video Conference System", icon: Video },
  { label: "IT Troubleshooting", icon: Wrench },
  { label: "Basic Electrical Works", icon: Zap },
  { label: "Motion Sensor Alarm System", icon: Bell },
  { label: "Structured Cabling", icon: Cable },
];

export default function PVITSolutionsStrip() {
  return (
    <section className="relative mt-6">
          
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-red-200 bg-white/60 p-4 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-red-600 text-white">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-red-700">New Division</p>
              <h3 className="text-lg font-semibold tracking-tight">PV IT SOLUTIONS</h3>
            </div>
          </div>

          {/* Scrolling badges */}
          <div className="relative w-full overflow-x-auto md:w-[60%]" role="list">
            <motion.ul
              className="flex gap-2 whitespace-nowrap"
              initial={{ x: 0 }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {[...services, ...services].map((s, i) => {
                const Icon = s.icon;
                return (
                  <li
                    key={`${s.label}-${i}`}
                    className="flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium shadow-sm"
                  >
                    <Icon className="h-4 w-4" />
                    {s.label}
                  </li>
                );
              })}
            </motion.ul>
          </div>

          <a
            href="/pv-it-solutions"
            className="inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
