import { Github, Linkedin, ChevronDown } from "lucide-react";
import Grainient from './Grainient';

export default function Home({ scrollToSection }) {
  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
    <Grainient
    color1="#7195ef"
    color2="#3c60ba"
    color3="#000000"
    timeSpeed={1}
    colorBalance={0}
    warpStrength={1}
    warpFrequency={5}
    warpSpeed={2}
    warpAmplitude={10}
    blendAngle={0}
    blendSoftness={0.05}
    rotationAmount={500}
    noiseScale={2}
    grainAmount={0.1}
    grainScale={.5}
    grainAnimated={false}
    contrast={1.5}
    gamma={1}
    saturation={1}
    centerX={0}
    centerY={0}
    zoom={0.9}
  /> 

      {/* Hero Title & Info Box */}
      <div className="max-w-5xl mx-auto z-10 flex flex-col items-center justify-center space-y-4">
        <h1 
          id="hero-name"
          className="text-6xl sm:text-7xl md:text-9xl font-extrabold tracking-tighter text-white select-none leading-none drop-shadow-sm font-display"
        >
          Rithik Tank
        </h1>
        
        <div 
          id="hero-subtitle-container"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-2 sm:mt-4"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-white select-none">
            Software Engineer <span className="mx-1 sm:mx-2 text-white/60">|</span> Artificial Intelligence Engineer
          </p>
          
          <div className="flex items-center gap-2.5 mt-2 sm:mt-0">
            <a 
              id="social-github"
              href="https://github.com/rethinkwhat" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-black hover:bg-[#555] text-white rounded-full transition-all duration-300 border border-white/10 hover:scale-110 shadow-lg inline-flex items-center justify-center w-11 h-11"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <a 
              id="social-linkedin"
              href="https://ph.linkedin.com/in/rithik-tank-904677278" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-black hover:bg-[#555] text-white rounded-full transition-all duration-300 border border-white/10 hover:scale-110 shadow-lg inline-flex items-center justify-center w-11 h-11"
            >
              <Linkedin className="w-5 h-5 text-white fill-white" />
            </a>
          </div>
        </div>
      </div>

      {/* High-Contrast Interactive CTA inviting scrolls to portfolio */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2">
        <button 
          id="hero-scroll-btn"
          onClick={() => scrollToSection("portfolio-sections")} 
          className="p-3.5 bg-black/40 hover:bg-white/80 text-white hover:text-blue-500 rounded-full transition-all duration-300 border border-white/15 cursor-pointer shadow-lg animate-bounce"
          aria-label="Scroll down to resume"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
