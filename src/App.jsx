import { useState, useEffect } from "react";
import { 
  Home as HomeIcon, 
  Mail, 
  Compass, 
  User, 
  BrainCircuit, 
  Code2
} from "lucide-react";

import Home from "./components/Home";
import ProfileMatrix from "./components/ProfileMatrix";
import ResearchDissertations from "./components/ResearchDissertations";
import InteractiveSoftware from "./components/InteractiveSoftware";
import Contact from "./components/Contact";
import CursorTrail from "./components/CursorTrail";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [showHomeMenu, setShowHomeMenu] = useState(false);
  const [isOverPortfolio, setIsOverPortfolio] = useState(false);

  // Monitor scroll position to show sticky visual headers/navs
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="custom-cursor-active bg-black text-neutral-300 font-sans min-h-screen antialiased selection:bg-orange-500 selection:text-black">
      {/* Dynamic tactile ambient background definitions */}
      <style>{`
        .grainy-bg {
          background: linear-gradient(135deg, #e65c00 0%, #f9d423 100%);
          position: relative;
        }
        .grainy-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.22;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        .terminal-bg {
          background: #020202;
          position: relative;
        }
        .terminal-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.02;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        .custom-cursor-active, .custom-cursor-active * {
          cursor: none !important;
        }
      `}</style>

      {/* Floating Pill Navigation Bar (Retracts/expands on hover, rotates color scheme based on user scroll position) */}
      <div 
        id="navbar-container"
        onMouseEnter={() => setIsNavHovered(true)}
        onMouseLeave={() => {
          setIsNavHovered(false);
          setShowHomeMenu(false);
        }}
        className={`fixed top-6 left-6 z-50 flex items-center rounded-full h-12 shadow-2xl transition-all duration-550 ease-out overflow-hidden ${
          isNavHovered 
            ? "w-[300px] px-4 justify-between" 
            : "w-12 px-0 justify-center"
        } ${
          scrolled 
            ? "bg-gradient-to-r from-[#ff5f00] to-[#ff9f0a] border border-orange-500/30 text-black shadow-[0_0_20px_rgba(255,95,0,0.15)]" 
            : "bg-[#050505]/95 border border-neutral-800 text-neutral-300 hover:border-[#ff9f0a]/30"
        }`}
      >
        {!isNavHovered ? (
          <Compass className={`w-5 h-5 transition-transform duration-1000 ${
            scrolled ? "text-black animate-spin" : "text-[#ff9f0a]"
          }`} style={{ animationDuration: '6s' }} />
        ) : (
          <div className="flex items-center justify-between w-full animate-in fade-in zoom-in-95 duration-200">
            {/* Home Button with Hover Website Sections Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowHomeMenu(true)}
              onMouseLeave={() => setShowHomeMenu(false)}
            >
              <button
                id="home-btn"
                onClick={() => scrollToSection("hero")}
                className="p-1.5 transition-all cursor-pointer flex items-center justify-center rounded-full"
                aria-label="Home and section selector dropdown"
              >
                <HomeIcon className={`w-4.5 h-4.5 transition-all ${scrolled ? 'text-black hover:text-white' : 'text-zinc-100 hover:text-[#ff9f0a]'}`} />
              </button>

              {/* Website sections drop panel on hovering Home icon */}
              {showHomeMenu && (
                <div className="absolute top-8 left-0 mt-2 w-52 bg-[#0d0f14]/98 border border-neutral-800 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="text-[9px] font-mono text-zinc-500 px-2 pb-2 border-b border-neutral-900 mb-1.5 tracking-widest uppercase font-extrabold select-none">
                    WEBSITE SECTIONS
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <button 
                      onClick={() => { scrollToSection("hero"); setShowHomeMenu(false); }} 
                      className="w-full text-left px-2.5 py-1.5 rounded-lg text-[10px] font-mono font-bold hover:bg-[#ff9f0a]/10 hover:text-[#ff9f0a] text-zinc-400 transition-all cursor-pointer"
                    >
                      // HOME PORTAL
                    </button>
                    <button 
                      onClick={() => { scrollToSection("summary-section"); setShowHomeMenu(false); }} 
                      className="w-full text-left px-2.5 py-1.5 rounded-lg text-[10px] font-mono font-bold hover:bg-[#ff9f0a]/10 hover:text-[#ff9f0a] text-zinc-400 transition-all cursor-pointer"
                    >
                      // SUMMARY MATRIX
                    </button>
                    <button 
                      onClick={() => { scrollToSection("experience-section"); setShowHomeMenu(false); }} 
                      className="w-full text-left px-2.5 py-1.5 rounded-lg text-[10px] font-mono font-bold hover:bg-[#ff9f0a]/10 hover:text-[#ff9f0a] text-zinc-400 transition-all cursor-pointer"
                    >
                      // CAREER TRAJECTORY
                    </button>
                    <button 
                      onClick={() => { scrollToSection("research-section"); setShowHomeMenu(false); }} 
                      className="w-full text-left px-2.5 py-1.5 rounded-lg text-[10px] font-mono font-bold hover:bg-[#ff9f0a]/10 hover:text-[#ff9f0a] text-zinc-400 transition-all cursor-pointer"
                    >
                      // ACOUSTIC RESEARCH
                    </button>
                    <button 
                      onClick={() => { scrollToSection("projects-section"); setShowHomeMenu(false); }} 
                      className="w-full text-left px-2.5 py-1.5 rounded-lg text-[10px] font-mono font-bold hover:bg-[#ff9f0a]/10 hover:text-[#ff9f0a] text-zinc-400 transition-all cursor-pointer"
                    >
                      // SOFTWARE SANDBOX
                    </button>
                    <button 
                      onClick={() => { scrollToSection("skills-education-container"); setShowHomeMenu(false); }} 
                      className="w-full text-left px-2.5 py-1.5 rounded-lg text-[10px] font-mono font-bold hover:bg-[#ff9f0a]/10 hover:text-[#ff9f0a] text-zinc-400 transition-all cursor-pointer"
                    >
                      // TECH CAPABILITIES
                    </button>
                    <button 
                      onClick={() => { scrollToSection("certifications-section"); setShowHomeMenu(false); }} 
                      className="w-full text-left px-2.5 py-1.5 rounded-lg text-[10px] font-mono font-bold hover:bg-[#ff9f0a]/10 hover:text-[#ff9f0a] text-[#ff9f0a] text-zinc-400 transition-all cursor-pointer"
                    >
                      // CERTIFICATIONS
                    </button>
                    <button 
                      onClick={() => { scrollToSection("contact-section"); setShowHomeMenu(false); }} 
                      className="w-full text-left px-2.5 py-1.5 rounded-lg text-[10px] font-mono font-bold hover:bg-[#ff9f0a]/10 hover:text-[#ff9f0a] text-zinc-400 transition-all cursor-pointer"
                    >
                      // CONTACT OUTPOST
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile (Summary) Page Scroll Button */}
            <button
              onClick={() => scrollToSection("summary-section")}
              className="p-1.5 transition-all cursor-pointer flex items-center justify-center relative rounded-full group"
              aria-label="Profile and biography summary section"
              title="Profile Matrix"
            >
              <User className={`w-4.5 h-4.5 transition-all ${scrolled ? 'text-black hover:text-white' : 'text-zinc-100 hover:text-[#ff9f0a]'}`} />
              <span className="absolute -bottom-10 bg-black/90 border border-neutral-800 text-[8px] font-mono text-zinc-400 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-all pointer-events-none tracking-widest whitespace-nowrap">
                PROFILE
              </span>
            </button>

            {/* Research / Acoustic Intelligence Scroll Button */}
            <button
              onClick={() => scrollToSection("research-section")}
              className="p-1.5 transition-all cursor-pointer flex items-center justify-center relative rounded-full group"
              aria-label="Acoustic intelligence and research section"
              title="Research Dissertations"
            >
              <BrainCircuit className={`w-4.5 h-4.5 transition-all ${scrolled ? 'text-black hover:text-white' : 'text-zinc-100 hover:text-[#ff9f0a]'}`} />
              <span className="absolute -bottom-10 bg-black/90 border border-[#ff9f0a]/20 text-[8px] font-mono text-zinc-200 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-all pointer-events-none tracking-widest whitespace-nowrap">
                RESEARCH
              </span>
            </button>

            {/* Code / Software Sandbox Scroll Button */}
            <button
              onClick={() => scrollToSection("projects-section")}
              className="p-1.5 transition-all cursor-pointer flex items-center justify-center relative rounded-full group"
              aria-label="Software deployments sandbox section"
              title="Interactive Software"
            >
              <Code2 className={`w-4.5 h-4.5 transition-all ${scrolled ? 'text-black hover:text-white' : 'text-zinc-100 hover:text-[#ff9f0a]'}`} />
              <span className="absolute -bottom-10 bg-black/90 border border-neutral-800 text-[8px] font-mono text-zinc-400 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-all pointer-events-none tracking-widest whitespace-nowrap">
                PROJECTS
              </span>
            </button>

            {/* Mail / Callback Query Pipeline Scroll Button */}
            <button
              onClick={() => scrollToSection("contact-section")}
              className="p-1.5 transition-all cursor-pointer flex items-center justify-center relative rounded-full group"
              aria-label="Contact callback pipeline section"
              title="Contact Outpost"
            >
              <Mail className={`w-4.5 h-4.5 transition-all ${scrolled ? 'text-black hover:text-white' : 'text-zinc-100 hover:text-[#ff9f0a]'}`} />
              <span className="absolute -bottom-10 bg-black/90 border border-neutral-800 text-[8px] font-mono text-zinc-400 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-all pointer-events-none tracking-widest whitespace-nowrap">
                CONTACT
              </span>
            </button>
          </div>
        )}
      </div>

      {/* --- HERO SECTION --- */}
      <Home scrollToSection={scrollToSection} />

      {/* --- PORTFOLIO SECTIONS (Fully Custom, 100% Unique Bento Redesign for Rithik Tank) --- */}
      <main 
        id="portfolio-sections" 
        onMouseEnter={() => setIsOverPortfolio(true)}
        onMouseLeave={() => setIsOverPortfolio(false)}
        onMouseMove={() => { if (!isOverPortfolio) setIsOverPortfolio(true); }}
        className="terminal-bg w-full relative min-h-screen pt-12 pb-28 px-4 sm:px-6 lg:px-8 border-t border-neutral-900"
      >
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-700">
          
          <ProfileMatrix />

          <ResearchDissertations />

          <InteractiveSoftware />

          <Contact />

          {/* Code Footer file signature indicators - Pure Human-Centered design elements */}
          <div className="flex items-center justify-between font-mono text-[10px] text-neutral-600 pt-8 select-none border-t border-neutral-950">
            <div>
              [SYS_EOF]
            </div>
            <div>
              2026 · Rithik Tank · ALL RIGHTS RESERVED
            </div>
          </div>

        </div>
      </main>
      <CursorTrail active={isOverPortfolio} />
    </div>
  );
}
