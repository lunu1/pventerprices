// components/PVITSolutionsStrip.jsx
"use client";
import { motion } from "framer-motion";
import {
  Shield,
  Camera,
  Network,
  KeySquare,
  Fingerprint,
  Phone,
  Video,
  Wrench,
  Zap,
  Bell,
  Cable,
} from "lucide-react";

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
      {/* match Navbar/Hero container spacing */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-2xl   bg-white/60 shadow-sm backdrop-blur">
          {/* GRID: left (auto) | middle scroller (1fr) | right CTA (auto) */}
          <div className="grid items-center gap-4 p-4 md:grid-cols-[auto,1fr,auto]">
            {/* Left: title */}
            <div className="flex items-center gap-3">
              {/* <div className="grid h-10 w-10 place-items-center rounded-xl bg-red-600 text-white">
                <Shield className="h-5 w-5" />
              </div> */}
              <div>
                <p className="text-sm font-medium text-red-700">New Division</p>
                <h3 className="text-lg font-semibold tracking-tight">
                  AUTOMATION & IT SOLUTION
                </h3>
              </div>
            </div>

            {/* Middle: infinite scroller */}
            <div
              className="
                relative w-full overflow-hidden
                [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
                h-10
              "
              role="list"
            >
              <motion.ul
                className="flex h-10 items-center gap-2 whitespace-nowrap will-change-transform"
                initial={{ x: 0 }}
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
              >
                {[...services, ...services].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <li
                      key={`${s.label}-${i}`}
                      className="flex h-9 items-center gap-2 rounded-full border bg-white px-3 text-xs font-medium shadow-sm"
                    >
                      <Icon className="h-4 w-4" />
                      {s.label}
                    </li>
                  );
                })}
              </motion.ul>
            </div>

            {/* Right: CTA */}
            <div className="shrink-0">
              <a
                href="/pv-it-solutions"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
