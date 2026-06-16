import { useState } from "react";
import { 
  Globe, 
  Languages, 
  Compass, 
  Database, 
  GraduationCap, 
  Award,
  ExternalLink
} from "lucide-react";

const ALL_SKILLS = [
  { name: 'Java', category: 'languages' },
  { name: 'Python', category: 'languages' },
  { name: 'C', category: 'languages' },
  { name: 'JavaScript', category: 'languages' },
  { name: 'PHP', category: 'languages' },
  { name: 'SQL', category: 'languages' },
  { name: 'MongoDB', category: 'languages' },
  { name: 'TypeScript', category: 'languages' },
  { name: 'Tailwind CSS', category: 'languages' },
  { name: 'PyTorch', category: 'AI' },
  { name: 'TensorFlow', category: 'AI' },
  { name: 'Keras', category: 'AI' },
  { name: 'SKLearn', category: 'AI' },
  { name: 'Hugging Face', category: 'AI' },
  { name: 'FastAPI', category: 'frameworks' },
  { name: 'React.js', category: 'frameworks' },
  { name: 'Node.js', category: 'frameworks' },
  { name: 'Next.js', category: 'frameworks' },
  { name: 'AWS', category: 'infra' },
  { name: 'Docker', category: 'infra' },
  { name: 'Git', category: 'infra' },
  { name: 'Nginx', category: 'infra' },
  { name: 'Power BI', category: 'infra' },
  { name: 'SAP', category: 'infra' },
];

const CERTIFICATIONS = [
  { title: "Advanced C Programming", provider: "Udemy Tim Buchalka's Academy", status: "Ongoing", date: "Jun 2026" },
  { title: "Improving Neural Networks: Hyperparameter Tuning", provider: "Coursera", status: "Ongoing", date: "Jun 2026" },
  { title: "Neural Networks and Deep Learning", provider: "DeepLearning.AI Coursera", status: "", date: "Apr 2026" },
  { title: "Full Stack: React & Java Spring Boot", provider: "The Developer Guide - Udemy", status: "", date: "Jul 2025" },
  { title: "[NEW] Spring Boot 3, Spring 6 & Hibernate for Beginners", provider: "Udemy", status: "", date: "Oct 2025" },
  { title: "Devesse Award for Exemplary Performance in Academics", provider: "Saint Louis University", status: "", date: "Mar 2025" },
  { title: "Java 17 Masterclass: Start Coding", provider: "Udemy Tim Buchalka's Academy", status: "", date: "Jun 2024" },
  { title: "CAD101EN: Introduction to Web Development", provider: "edX IBM", status: "", date: "May 2024" },
  { title: "PY0101EN: Python Basics for Data Science", provider: "edX IBM", status: "", date: "May 2024" }
];

export default function ProfileMatrix() {
  const [activeJob, setActiveJob] = useState('cto');
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('all');

  const activeSkills = ALL_SKILLS.filter(s => selectedSkillCategory === 'all' || s.category === selectedSkillCategory);

  return (
    <>
      <div className="grid grid-cols-12 gap-5 sm:gap-6">
        
        {/* 02/ SYSTEM SUMMARY (Full block width inside grid highlights R&D credentials) */}
        <section 
          id="summary-section" 
          className="col-span-12 md:col-span-8 bg-gradient-to-br from-[#101010] to-[#040404] border border-neutral-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group shadow-2xl min-h-[260px] transition-all duration-300 hover:border-[#ff9f0a]/40 hover:shadow-[0_0_25px_rgba(255,159,10,0.06)] hover:-translate-y-1 hover:scale-[1.01] hover:bg-[#080808]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/[0.03] rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex justify-between items-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#ff9f0a]/10 to-transparent border border-[#ff9f0a]/15 rounded-full select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff9f0a] animate-pulse" />
              <span className="font-mono text-[9px] font-black tracking-widest text-[#ff9f0a]">WHAT I DO</span>
            </div>
            <span className="text-[9px] font-mono text-neutral-500 font-black tracking-widest border-b border-neutral-900 pb-0.5">THE PROGRAMMER THAT I AM</span>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tighter leading-none font-display">
              SOFTWARE ENGINEER & AI SOLUTIONS
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base font-medium leading-relaxed max-w-2xl font-sans selection:bg-orange-500 selection:text-black">
              I am a Software Engineer passionate about building intelligent, user-focused applications that bridge software development and artificial intelligence. 
              With experience in full-stack development, machine learning, and conversational AI, I enjoy creating solutions that turn complex problems into intuitive digital experiences. 
              Whether developing modern web applications, training deep learning models, or designing AI-powered systems, I strive to build technology that is both innovative and impactful.
            </p>
          </div>
        </section>

        {/* 02.B/ ADAPTABILITY & MULTILINGUAL SYNTHESIS */}
        <section 
          className="col-span-12 md:col-span-4 bg-[#0a0a0a] border border-neutral-800/80 rounded-3xl p-6 flex flex-col justify-between shadow-xl min-h-[260px] relative overflow-hidden group transition-all duration-300 hover:border-[#ff9f0a]/40 hover:shadow-[0_0_25px_rgba(255,159,10,0.06)] hover:-translate-y-1 hover:scale-[1.01] hover:bg-[#080808]"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/[0.02] rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex justify-between items-center pb-2 border-b border-neutral-900">
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest font-mono flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-orange-500 animate-pulse" /> FILIPINO CITIZEN
            </span>
            <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-orange-500/10 text-orange-400 text-[9px] font-mono font-bold rounded border border-orange-500/20">
              <span className="w-1 h-1 rounded-full bg-orange-400 animate-ping" /> MULTICULTURAL
            </div>
          </div>
          
          <div className="space-y-3.5 py-3">
            <p className="text-xs text-neutral-400 font-sans leading-relaxed selection:bg-orange-500 selection:text-black">
              Being an Indian who was born and raised in the Philippines, I hold a dual-perspective lens. This multicultural grounding has gifted me with a unique psychological agility, an open mind, and a natural ability to adapt quickly to any new dynamic team, culture, or technical landscape.
            </p>
            
            {/* 4 Languages fluency indicator */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-1">
                <Languages className="w-3 h-3 text-orange-400" /> Fluency in 4 Languages
              </span>
              
              <div className="grid grid-cols-2 gap-1.5 text-[9px] font-mono">
                <div className="bg-neutral-950 p-2 border border-neutral-900 rounded-lg flex flex-col gap-0.5">
                  <span className="text-neutral-200 font-extrabold">English</span>
                  <span className="text-[8px] text-orange-500">Professional</span>
                </div>
                <div className="bg-neutral-950 p-2 border border-neutral-900 rounded-lg flex flex-col gap-0.5">
                  <span className="text-neutral-200 font-extrabold">Tagalog</span>
                  <span className="text-[8px] text-orange-500">Native Colloquial</span>
                </div>
                <div className="bg-neutral-950 p-2 border border-neutral-900 rounded-lg flex flex-col gap-0.5">
                  <span className="text-neutral-200 font-extrabold">Hindi</span>
                  <span className="text-[8px] text-orange-500">Conversational</span>
                </div>
                <div className="bg-neutral-950 p-2 border border-neutral-900 rounded-lg flex flex-col gap-0.5">
                  <span className="text-neutral-200 font-extrabold">Punjabi</span>
                  <span className="text-[8px] text-orange-500">Heritage Dialect</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1a1a1a] pt-3 flex justify-between items-center font-mono text-[9px] text-neutral-500">
            <span>MY IDENTITY</span>
            <span className="text-orange-500 font-black">ADAPTABILITY MINDSET</span>
          </div>
        </section>

        {/* 03/ EXPERIMENTAL CAREERS SYSTEM WORKSPACE */}
        <section 
          id="experience-section" 
          className="col-span-12 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#ff9f0a]/40 hover:shadow-[0_0_25px_rgba(255,159,10,0.06)] hover:-translate-y-1 hover:scale-[1.01] hover:bg-[#080808]"
        >
          <div>
            <div className="flex justify-between items-center border-b border-neutral-800/85 pb-4 mb-6">
              <span className="font-mono text-xs font-bold tracking-widest text-[#ff9f0a] flex items-center gap-2.5 select-none">
                <Compass className="w-4 h-4 text-[#ff9f0a]" />
                EXPERIENCE
              </span>
              <span className="text-[9px] font-mono text-neutral-500 font-extrabold uppercase tracking-wider">WORKSPACE ARCHIVES</span>
            </div>

            {/* Split Workspace Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left Column Selector */}
              <div className="md:col-span-4 flex flex-col gap-3">
                <button
                  onClick={() => setActiveJob('cto')}
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeJob === 'cto' 
                      ? 'bg-gradient-to-r from-[#ff9f0a] to-[#f2720c] text-black border-transparent shadow-lg shadow-orange-600/25 font-bold scale-[1.02] hover:-translate-y-1 hover:scale-[1.05] hover:shadow-xl hover:shadow-orange-600/40' 
                      : 'bg-neutral-950 border-neutral-800 hover:border-[#ff9f0a]/60 hover:bg-neutral-900/40 text-neutral-300 hover:text-white hover:-translate-y-1 hover:scale-[1.04] hover:shadow-lg hover:shadow-orange-500/5'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono tracking-wider font-extrabold uppercase">AUSCULTATE</span>
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${activeJob === 'cto' ? 'bg-black text-[#ff9f0a]' : 'bg-neutral-900 text-neutral-400'}`}>PRESENT</span>
                  </div>
                  <h4 className="text-sm font-display font-extrabold mt-2 leading-tight">Chief Technical Officer</h4>
                  <p className={`text-[10px] font-mono mt-1 ${activeJob === 'cto' ? 'text-black/80' : 'text-neutral-500'}`}>Baguio City</p>
                </button>

                <button
                  onClick={() => setActiveJob('comelec')}
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeJob === 'comelec' 
                      ? 'bg-gradient-to-r from-[#ff9f0a] to-[#f2720c] text-black border-transparent shadow-lg shadow-orange-600/25 font-bold scale-[1.02] hover:-translate-y-1 hover:scale-[1.05] hover:shadow-xl hover:shadow-orange-600/40' 
                      : 'bg-neutral-950 border-neutral-800 hover:border-[#ff9f0a]/60 hover:bg-neutral-900/40 text-neutral-300 hover:text-white hover:-translate-y-1 hover:scale-[1.04] hover:shadow-lg hover:shadow-orange-500/5'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono tracking-wider font-extrabold uppercase">COMELEC</span>
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${activeJob === 'comelec' ? 'bg-black text-[#ff9f0a]' : 'bg-neutral-900 text-neutral-400'}`}>PRESENT</span>
                  </div>
                  <h4 className="text-sm font-display font-extrabold mt-2 leading-tight">IT Department Head</h4>
                  <p className={`text-[10px] font-mono mt-1 ${activeJob === 'comelec' ? 'text-black/80' : 'text-neutral-500'}`}>Saint Louis University; Baguio City</p>
                </button>

                <button
                  onClick={() => { setActiveJob('chatbot'); }}
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeJob === 'chatbot' 
                      ? 'bg-gradient-to-r from-[#ff9f0a] to-[#f2720c] text-black border-transparent shadow-lg shadow-orange-600/25 font-bold scale-[1.02] hover:-translate-y-1 hover:scale-[1.05] hover:shadow-xl hover:shadow-orange-600/40' 
                      : 'bg-neutral-950 border-neutral-800 hover:border-[#ff9f0a]/60 hover:bg-neutral-900/40 text-neutral-300 hover:text-white hover:-translate-y-1 hover:scale-[1.04] hover:shadow-lg hover:shadow-orange-500/5'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono tracking-wider font-extrabold uppercase">AskNavi</span>
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${activeJob === 'chatbot' ? 'bg-black text-[#ff9f0a]' : 'bg-neutral-900 text-neutral-400'}`}>FORMER</span>
                  </div>
                  <h4 className="text-sm font-display font-extrabold mt-2 leading-tight">Chatbot Development Head</h4>
                  <p className={`text-[10px] font-mono mt-1 ${activeJob === 'chatbot' ? 'text-black/80' : 'text-neutral-500'}`}>Saint Louis University; Baguio City</p>
                </button>
              </div>

              {/* Right Column Dynamic Detail Display Pane */}
              <div className="md:col-span-8 bg-neutral-950 border border-neutral-800 p-5 sm:p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between min-h-[380px]">
                <div>
                  {activeJob === 'cto' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="flex flex-wrap justify-between items-center gap-2 border-b border-neutral-900 pb-3">
                        <div>
                          <h5 className="text-lg font-display font-extrabold text-white">Chief Technical Officer</h5>
                          <p className="text-xs font-mono text-orange-500 font-bold mt-0.5">Auscultate · Dec 2025 – Current</p>
                        </div>
                        <span className="px-2.5 py-1 text-[10px] font-mono bg-orange-500/10 text-orange-500 border border-orange-500/20 rounded font-bold uppercase select-none">BIOMEDICAL SYSTEMS</span>
                      </div>

                      <ul className="space-y-3">
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                          <span className="text-orange-500 select-none pt-0.5">▶</span>
                          <span>Reduced product delivery times by optimizing project management workflows and cross-functional collaboration.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                          <span className="text-orange-500 select-none pt-0.5">▶</span>
                          <span>Improved software development processes by implementing agile methodologies and streamlining team communication.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                          <span className="text-orange-500 select-none pt-0.5">▶</span>
                          <span>Created a fully-functional minimum viable product, including an artificially intelligent model capable of diagnosing lung diseases among a 7-seven class problem set and a website that integrates it and presented it on the national level.</span>
                        </li>
                      </ul>

                      {/* Embedded Micro-Visualizer */}
                      <div className="border border-neutral-900 bg-[#040404] p-3 rounded-xl mt-4 flex items-center justify-between font-mono text-[10px] text-neutral-500">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded bg-green-500"></span> 7-Class AI Lung Diagnostics
                        </span>
                        <span className="text-neutral-600">UNDER DEVELOPMENT / NATIONAL PRESENTATION</span>
                      </div>
                    </div>
                  )}

                  {activeJob === 'comelec' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="flex flex-wrap justify-between items-center gap-2 border-b border-neutral-900 pb-3">
                        <div>
                          <h5 className="text-lg font-display font-extrabold text-white">COMELEC IT Head</h5>
                          <p className="text-xs font-mono text-orange-500 font-bold mt-0.5">Saint Louis University · Jan 2025 – Current</p>
                        </div>
                        <span className="px-2.5 py-1 text-[10px] font-mono bg-orange-500/10 text-orange-500 border border-orange-500/20 rounded font-bold uppercase select-none">CYBERSECURITY / INFRASTRUCTURE</span>
                      </div>

                      <ul className="space-y-3">
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                          <span className="text-orange-500 select-none pt-0.5">▶</span>
                          <span>Enhanced IT infrastructure by implementing strategic technology upgrades and streamlining system processes.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                          <span className="text-orange-500 select-none pt-0.5">▶</span>
                          <span>Implemented cybersecurity measures to protect sensitive company data and maintain compliance with industry standards.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                          <span className="text-orange-500 select-none pt-0.5">▶</span>
                          <span>Developed performance metrics to evaluate IT department success and identify areas for potential improvement.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                          <span className="text-orange-500 select-none pt-0.5">▶</span>
                          <span>Carried out the entire 2025-2026 university election period with the lowest reported number of issues within the system.</span>
                        </li>
                      </ul>

                      {/* Embedded Micro-Visualizer */}
                      <div className="border border-neutral-900 bg-[#040404] p-3 rounded-xl mt-4 flex items-center justify-between font-mono text-[10px] text-neutral-500">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded bg-green-500"></span> University Ballot Infrastructure
                        </span>
                        <span className="text-neutral-600">ZERO SYSTEM AUDIT RED FLAGS</span>
                      </div>
                    </div>
                  )}

                  {activeJob === 'chatbot' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="flex flex-wrap justify-between items-center gap-2 border-b border-neutral-900 pb-3">
                        <div>
                          <h5 className="text-lg font-display font-extrabold text-white">Chatbot Development Head</h5>
                          <p className="text-xs font-mono text-orange-500 font-bold mt-0.5">Saint Louis University · Jun 2025 – Aug 2025</p>
                        </div>
                        <span className="px-2.5 py-1 text-[10px] font-mono bg-orange-500/10 text-orange-500 border border-orange-500/20 rounded font-bold uppercase select-none">AI / AGENT SYSTEMS</span>
                      </div>

                      <ul className="space-y-3">
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                          <span className="text-orange-500 select-none pt-0.5">▶</span>
                          <span>Selected by university to spearhead AI chat bot development initiative.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                          <span className="text-orange-500 select-none pt-0.5">▶</span>
                          <span>Led the design and development of AI-driven chat bot solutions to enhance user interactions.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                          <span className="text-orange-500 select-none pt-0.5">▶</span>
                          <span>Adapted to fast-paced work environments by prioritizing tasks and maintaining focus.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                          <span className="text-orange-500 select-none pt-0.5">▶</span>
                          <span>Worked effectively in fast-paced environments.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                          <span className="text-orange-500 select-none pt-0.5">▶</span>
                          <span>Created a fully functional chat bot built on a static design that fell back to RASA and RAG depending on question complexity.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                          <span className="text-orange-500 select-none pt-0.5">▶</span>
                          <span>Was able to cut down wait time from Version 1's 2 minute per question to an approximate 3 seconds by iterating through different vector search algorithms, chunking mechanisms, and the like.</span>
                        </li>
                      </ul>

                      {/* Embedded Micro-Visualizer */}
                      <div className="border border-neutral-900 bg-[#040404] p-3 rounded-xl mt-4 flex items-center justify-between font-mono text-[10px] text-neutral-500">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded bg-orange-500"></span> RASA & Hybrid RAG Engine
                        </span>
                        <span className="text-neutral-600">RESPONSE LATENCY // ~3 SECONDS</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      {/* THREE-COLUMN EXPANDED BENTO FOR SKILLS, ACADEMICS & CERTIFICATIONS */}
      <div 
        id="skills-education-container"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 animate-in fade-in duration-500"
      >
        {/* SKILLS COMPONENT */}
        <section 
          id="skills-section" 
          className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#ff9f0a]/40 hover:shadow-[0_0_25px_rgba(255,159,10,0.06)] hover:-translate-y-1 hover:scale-[1.01] hover:bg-[#080808]"
        >
          <div>
            <div className="border-b border-neutral-850 pb-4 mb-4 flex justify-between items-center">
              <span className="font-mono text-xs font-bold tracking-widest text-[#ff9f0a] select-none flex items-center gap-2">
                <Database className="w-4 h-4 text-orange-500" />
                TECH STACK
              </span>
              <span className="text-[9px] font-mono text-neutral-500 font-extrabold uppercase tracking-widest">& WILLING TO LEARN MORE</span>
            </div>

            {/* Micro category selectors */}
            <div className="flex flex-wrap gap-1.5 pb-4 border-b border-neutral-900/60 mb-5">
              {['all', 'languages', 'AI', 'frameworks', 'infra'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedSkillCategory(cat)}
                  className={`px-2 py-0.5 font-mono text-[9px] font-extrabold uppercase rounded border transition-all cursor-pointer ${
                    selectedSkillCategory === cat
                      ? 'bg-orange-600 text-black border-orange-500'
                      : 'bg-neutral-950 text-neutral-400 border-neutral-850 hover:bg-neutral-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid display */}
            <div className="flex flex-wrap gap-2">
              {activeSkills.map(skill => (
                <span 
                  key={skill.name} 
                  className="px-3 py-1.5 bg-neutral-950/80 text-neutral-300 rounded-xl border border-neutral-800 text-xs font-mono select-none hover:border-orange-500/40 hover:text-white hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ACADEMIC PROFILE */}
        <section 
          id="education-section" 
          className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#ff9f0a]/40 hover:shadow-[0_0_25px_rgba(255,159,10,0.06)] hover:-translate-y-1 hover:scale-[1.01] hover:bg-[#080808]"
        >
          <div>
            <div className="border-b border-neutral-850 pb-4 mb-6 flex justify-between items-center">
              <span className="font-mono text-xs font-bold tracking-widest text-[#ff9f0a] select-none flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-orange-500" />
                ACADEMIC LIFE
              </span>
              <span className="text-[9px] font-mono text-neutral-500 font-extrabold uppercase tracking-widest">THUS FAR</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start justify-between font-mono text-xs text-[#a3a3a3]">
                 <div>July 2, 2026</div>
                 <div className="text-right">Baguio City, Benguet</div>
              </div>
              
              <h4 className="font-extrabold text-white text-xl sm:text-2xl mt-1 font-display leading-tight">
                Saint Louis University
              </h4>
              
              <p className="text-orange-500 font-extrabold font-mono text-xs sm:text-sm mt-0.5">
                B.S. Computer Science
              </p>

              {/* Honors Accreditation Card - High Contrast Ribbon Accent */}
              <div className="border border-neutral-850 bg-neutral-950 p-4 rounded-2xl text-center select-none shadow-inner border-l-4 border-l-orange-500 mt-6 space-y-1.5">
                <p className="font-display font-black text-xs uppercase tracking-widest text-white">ACHIEVEMENTS</p>
                <p className="font-sans text-xs sm:text-sm font-semibold text-neutral-300 tracking-wide leading-relaxed">
                  Summa Cum Laude 
                  <br/><span className="mx-1 text-orange-500/20">•</span> Consistent Dean's Lister
                  <br/><span className="mx-1 text-orange-500/20">•</span> Devesse Award for Exemplary Performance in Academics Recipient
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-900 pt-5 mt-8 flex justify-between items-center text-xs">
            <span className="font-mono text-[9px] text-[#555] uppercase tracking-wider">CORE</span>
            <span className="font-mono font-extrabold text-orange-500">AI • Database • Data Science</span>
          </div>
        </section>

        {/* CERTIFICATIONS & CREDENTIALS CARD */}
        <section 
          id="certifications-section" 
          className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl col-span-1 md:col-span-2 lg:col-span-1 transition-all duration-300 hover:border-[#ff9f0a]/40 hover:shadow-[0_0_25px_rgba(255,159,10,0.06)] hover:-translate-y-1 hover:scale-[1.01] hover:bg-[#080808]"
        >
          <div>
            <div className="border-b border-neutral-850 pb-4 mb-5 flex justify-between items-center">
              <span className="font-mono text-xs font-bold tracking-widest text-[#ff9f0a] select-none flex items-center gap-2">
                <Award className="w-4 h-4 text-[#ff9f0a]" />
                CERTIFICATIONS
              </span>
              <span className="text-[9px] font-mono text-neutral-500 font-extrabold uppercase tracking-widest">& ACCREDITATIONS</span>
            </div>
            
            {/* Scrollable container to maintain gorgeous card sizing parity */}
            <div className="space-y-2.5 max-h-[330px] overflow-y-auto pr-1.5 scrollbar-thin">
              {CERTIFICATIONS.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-neutral-950 p-3 rounded-xl border border-neutral-900 flex flex-col gap-1 hover:border-[#ff9f0a]/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-start gap-3">
                    <span className="font-sans font-bold text-neutral-200 text-xs leading-snug">
                      {cert.title}
                    </span>
                    <span className="font-mono text-[9px] text-[#ff9f0a] bg-orange-500/10 px-1.5 py-0.5 rounded shrink-0 font-extrabold border border-orange-500/10">
                      {cert.date}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center text-[10px] font-mono mt-0.5">
                    <span className="text-zinc-500">{cert.provider}</span>
                    {cert.status && (
                      <span className="text-amber-500 text-[8px] tracking-widest uppercase font-black px-1.5 py-0.2 rounded bg-amber-500/10 border border-amber-500/10 animate-pulse">
                        {cert.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-neutral-900 pt-5 mt-6 flex justify-between items-center text-xs">
            <span className="font-mono text-[9px] text-[#555] uppercase tracking-wider">AGGREGATES</span>
            <span className="font-mono font-extrabold text-orange-500">9 CREDENTIALS</span>
          </div>
        </section>

      </div>
    </>
  );
}
