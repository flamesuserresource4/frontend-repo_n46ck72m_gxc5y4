import { motion } from 'framer-motion';
import { Smartphone, Layers, Database, GitBranch } from 'lucide-react';

export default function AboutAndSkills() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-10 items-start"
        >
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">About Me</h2>
            <p className="text-slate-600 leading-relaxed">
              I craft mobile experiences that feel effortless and scale reliably. With hands-on delivery across fintech, workforce attendance, and retail, I integrate NFC card interactions, secure payment flows, and Bluetooth EDC printers into polished apps.
            </p>
            <p className="text-slate-600 leading-relaxed">
              My approach combines clean architecture, CI/CD automation, and deep platform knowledge across Android (Kotlin, Compose) and cross-platform (React Native / Expo). I love turning real-world constraints into simple, robust products.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <SkillCard icon={<Smartphone className="h-5 w-5" />} title="Android (Kotlin)" items={["MVVM", "Jetpack Compose", "Coroutines", "Hilt"]} />
            <SkillCard icon={<Layers className="h-5 w-5" />} title="React Native / Expo" items={["TypeScript", "Native Modules", "Animations", "OTA Updates"]} />
            <SkillCard icon={<Database className="h-5 w-5" />} title="APIs & Realtime" items={["REST", "WebSocket", "Firebase", "Push"]} />
            <SkillCard icon={<GitBranch className="h-5 w-5" />} title="Dev Practices" items={["Git", "CI/CD", "Clean Architecture", "Testing"]} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ icon, title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="group relative rounded-2xl p-5 bg-white/60 backdrop-blur border border-white/40 shadow-[0_8px_30px_rgba(31,38,135,0.08)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.18)] transition-transform hover:scale-[1.02]"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center shadow-md">
          {icon}
        </div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <ul className="text-sm text-slate-600 space-y-1.5">
        {items.map((it) => (
          <li key={it} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            {it}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
