import { motion } from 'framer-motion';
import { ExternalLink, Tag, Image as ImageIcon, Link as LinkIcon, Mail, Github, Linkedin } from 'lucide-react';

export default function ContentSections() {
  return (
    <>
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </>
  );
}

function SectionHeader({ eyebrow, title, subtitle, id }) {
  return (
    <div id={id} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-indigo-600">{eyebrow}</div>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">{title}</h2>
          {subtitle && <p className="text-slate-600 mt-2 max-w-2xl">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  // Static showcase data for now; can be replaced by CMS API integration later
  const projects = [
    {
      name: 'FinPay Wallet',
      description: 'NFC-enabled digital wallet with bill payments, peer transfer, and realtime ledger sync.',
      tags: ['Android', 'NFC', 'Payments', 'Realtime'],
      links: { store: '#', repo: '#', case: '#case-study' },
      screenshots: ['FinPay 1', 'FinPay 2', 'FinPay 3'],
    },
    {
      name: 'AttendPro',
      description: 'Attendance app using NFC/QR check-in, geo-fencing, and dashboard analytics for teams.',
      tags: ['Android', 'Compose', 'Geo', 'Analytics'],
      links: { store: '#', repo: '#', case: '#case-study' },
      screenshots: ['Attend 1', 'Attend 2', 'Attend 3'],
    },
    {
      name: 'OrderMate POS',
      description: 'Order & pay with Bluetooth EDC printer support, split bills, and digital receipts.',
      tags: ['React Native', 'Bluetooth', 'EDC', 'POS'],
      links: { store: '#', repo: '#', case: '#case-study' },
      screenshots: ['POS 1', 'POS 2'],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <SectionHeader
        eyebrow="Projects"
        title="Selected Work"
        subtitle="A snapshot of production-grade apps spanning fintech, attendance systems, and retail payments."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl bg-white/60 backdrop-blur border border-white/40 shadow-[0_8px_30px_rgba(31,38,135,0.08)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.18)] p-5 hover:scale-[1.02] transition-transform"
          >
            <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-slate-500">
              <ImageIcon className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.name}</h3>
            <p className="text-sm text-slate-600 mt-1">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {p.tags.map((t) => (
                <span key={t} className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200">
                  <Tag className="h-3 w-3" /> {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-4 text-sm">
              <a href={p.links.store} className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700">
                <ExternalLink className="h-4 w-4" /> Store
              </a>
              <a href={p.links.repo} className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-800">
                <Github className="h-4 w-4" /> Repo
              </a>
              <a href={p.links.case} className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-800">
                <LinkIcon className="h-4 w-4" /> Case Study
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <CaseStudyTemplate />
    </section>
  );
}

function CaseStudyTemplate() {
  return (
    <div id="case-study" className="mx-auto max-w-4xl mt-16 px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl p-6 bg-white/60 backdrop-blur border border-white/40 shadow-[0_8px_30px_rgba(31,38,135,0.08)]">
        <h4 className="text-2xl font-semibold text-slate-900">Case Study Template</h4>
        <div className="mt-4 grid md:grid-cols-2 gap-6 text-slate-700">
          <div>
            <h5 className="font-semibold text-slate-900">Problem</h5>
            <p className="text-sm mt-1">Describe the user pain, context, and constraints.</p>
          </div>
          <div>
            <h5 className="font-semibold text-slate-900">Solution</h5>
            <p className="text-sm mt-1">Outline the approach, architecture, and UX decisions.</p>
          </div>
          <div>
            <h5 className="font-semibold text-slate-900">Tech Stack</h5>
            <p className="text-sm mt-1">Kotlin, Jetpack Compose, React Native, NFC, Bluetooth EDC, REST, WebSocket, Firebase.</p>
          </div>
          <div>
            <h5 className="font-semibold text-slate-900">Results</h5>
            <p className="text-sm mt-1">KPIs moved, performance wins, deployment outcomes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogSection() {
  const posts = [
    {
      title: 'My Mobile Dev Journey',
      summary: 'From native Android to cross-platform, lessons learned shipping real apps.',
      tags: ['Career', 'Product'],
    },
    {
      title: 'Architecture Patterns that Scale',
      summary: 'MVVM, Clean Architecture, modularization, and pragmatic testing.',
      tags: ['Architecture', 'Android'],
    },
    {
      title: 'NFC & Bluetooth in the Wild',
      summary: 'Practical tips integrating NFC cards and Bluetooth EDC printers.',
      tags: ['NFC', 'Bluetooth', 'Payments'],
    },
  ];

  return (
    <section id="blog" className="py-20">
      <SectionHeader
        eyebrow="Blog"
        title="Writing & Notes"
        subtitle="Thoughts on mobile architecture, performance, and hardware integrations."
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl p-5 bg-white/60 backdrop-blur border border-white/40 shadow-[0_8px_30px_rgba(31,38,135,0.08)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.18)] hover:scale-[1.02] transition-transform"
          >
            <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{post.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{post.summary}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.map((t) => (
                <span key={t} className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-purple-50 text-purple-600 ring-1 ring-purple-200">
                  <Tag className="h-3 w-3" /> {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s build something great"
        subtitle="Have a project in mind or want to discuss mobile architecture? Drop a line."
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = Object.fromEntries(new FormData(form).entries());
            console.log('Form submitted:', data);
            alert('Thanks! Your message has been captured locally for now. We will wire this to email/Notion.');
            form.reset();
          }}
          className="rounded-2xl p-6 bg-white/60 backdrop-blur border border-white/40 shadow-[0_8px_30px_rgba(31,38,135,0.08)]"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="h-11 px-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 bg-white/80" />
            <input type="email" name="email" required placeholder="Email address" className="h-11 px-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 bg-white/80" />
            <input name="subject" placeholder="Subject" className="md:col-span-2 h-11 px-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 bg-white/80" />
            <textarea name="message" required placeholder="Message" rows={5} className="md:col-span-2 p-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 bg-white/80" />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3 text-slate-600">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 hover:text-slate-900"><Mail className="h-4 w-4"/> hello@example.com</a>
              <a href="#" className="inline-flex items-center gap-2 hover:text-slate-900"><Github className="h-4 w-4"/> GitHub</a>
              <a href="#" className="inline-flex items-center gap-2 hover:text-slate-900"><Linkedin className="h-4 w-4"/> LinkedIn</a>
            </div>
            <button type="submit" className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl transition-transform hover:scale-[1.02]">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Mobile Dev Portfolio. All rights reserved.</p>
        <p className="text-sm text-slate-500">Designed with a minimalist glassmorphism aesthetic.</p>
      </div>
    </footer>
  );
}
