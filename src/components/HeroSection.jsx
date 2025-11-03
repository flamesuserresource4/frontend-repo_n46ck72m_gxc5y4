import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Mobile Developer Building
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">Seamless & Scalable Apps</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Specializing in Kotlin, Jetpack Compose, React Native, NFC, Payment Systems, and Real-World App Deployments.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button onClick={() => scrollTo('projects')} className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl transition-transform hover:scale-[1.02]">
                View Projects
              </button>
              <button onClick={() => scrollTo('contact')} className="px-6 py-3 rounded-full border border-slate-200 bg-white/70 backdrop-blur hover:bg-white transition-colors text-slate-700">
                Contact Me
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Phone mockup with rotating previews */}
            <div className="relative h-[520px] w-[260px] rounded-[36px] p-3 bg-gradient-to-b from-slate-100 to-white shadow-2xl">
              <div className="absolute inset-0 rounded-[36px] ring-1 ring-black/5"></div>
              <div className="h-full w-full rounded-[28px] bg-white/70 backdrop-blur overflow-hidden shadow-inner">
                <CarouselScreens />
              </div>
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-6 w-32 rounded-b-2xl bg-slate-200/80"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CarouselScreens() {
  const screens = [
    {
      title: 'Fintech Wallet',
      gradient: 'from-indigo-500 to-purple-500',
      highlights: ['NFC cards', 'Bill payments', 'Realtime ledger'],
    },
    {
      title: 'Attendance System',
      gradient: 'from-violet-500 to-fuchsia-500',
      highlights: ['QR / NFC check-in', 'Geo-fencing', 'Analytics'],
    },
    {
      title: 'Order & Pay',
      gradient: 'from-blue-500 to-cyan-500',
      highlights: ['Bluetooth EDC', 'Split bills', 'Receipts'],
    },
  ];

  return (
    <motion.div
      className="h-full w-full"
      initial={{ x: 0 }}
      animate={{ x: [0, -260, -520, 0] }}
      transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
      style={{ display: 'flex' }}
    >
      {[...screens, ...screens].map((s, idx) => (
        <div key={idx} className="min-w-[260px] h-full p-4">
          <div className={`h-full w-full rounded-2xl bg-gradient-to-br ${s.gradient} text-white p-5 flex flex-col justify-between shadow-lg`}>
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest/relaxed opacity-80">Preview</div>
              <div className="text-2xl font-bold">{s.title}</div>
            </div>
            <ul className="space-y-2 text-sm/relaxed">
              {s.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
