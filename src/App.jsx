import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutAndSkills from './components/AboutAndSkills';
import ContentSections from './components/ContentSections';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-200/60 selection:text-slate-900">
      <Navbar />
      <HeroSection />
      <AboutAndSkills />
      <ContentSections />
    </div>
  );
}
