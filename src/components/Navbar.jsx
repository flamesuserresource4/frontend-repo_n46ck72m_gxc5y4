import { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClasses = scrolled
    ? 'backdrop-blur-md bg-white/70 shadow-sm'
    : 'bg-transparent';

  const linkClasses = 'text-slate-700 hover:text-indigo-600 transition-colors';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`sticky top-0 z-50 ${navClasses}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-slate-900">Mobile Dev Portfolio</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('about')} className={linkClasses}>About</button>
          <button onClick={() => scrollTo('projects')} className={linkClasses}>Projects</button>
          <button onClick={() => scrollTo('blog')} className={linkClasses}>Blog</button>
          <button onClick={() => scrollTo('contact')} className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:shadow-lg transition-transform hover:scale-[1.02]">
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
}
