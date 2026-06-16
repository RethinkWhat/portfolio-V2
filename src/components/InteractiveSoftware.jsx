import { useState, useEffect, useRef } from "react";
import { Terminal, Settings } from "lucide-react";

export default function InteractiveSoftware() {
  const [activeProjectTab, setActiveProjectTab] = useState('deepscribe');
  const [isScribing, setIsScribing] = useState(false);
  const [scribedLines, setScribedLines] = useState([]);
  const transcribeTimer = useRef(null);

  const [spikeCount, setSpikeCount] = useState(14);
  const [isSpiking, setIsSpiking] = useState(false);

  // Clean raw transcription timers on unmount to prevent leaks
  useEffect(() => {
    return () => {
      if (transcribeTimer.current) clearInterval(transcribeTimer.current);
    };
  }, []);

  // Live DeepScribe stream simulations
  const startSimulationScribe = () => {
    if (isScribing) return;
    setIsScribing(true);
    setScribedLines([]);
    
    const transcripts = [
      "[00:02] PATIENT: Hi Doctor, I've had severe chest tightness and wheezing for three days.",
      "[00:06] CLINICIAN: Understood. Let me listen. Deep breath in...",
      "[00:11] STETHOSCOPE: Dual-channel raw stethoscopic sound feeds registered [ASTHMA_STATE].",
      "[00:16] DEEPSCRIBE PARSER: Extracted key terms -> Wheeze(severe), Dynpnea(acute), Chest Tight(chronic).",
      "[00:20] SUMMARY AUTO-GENERATION: Diagnostic code bronchial congestion, immediate clinical referral."
    ];

    let currentLine = 0;
    setScribedLines([transcripts[0]]);

    transcribeTimer.current = setInterval(() => {
      currentLine++;
      if (currentLine < transcripts.length) {
        setScribedLines(prev => [...prev, transcripts[currentLine]]);
      } else {
        setIsScribing(false);
        if (transcribeTimer.current) clearInterval(transcribeTimer.current);
      }
    }, 1800);
  };

  const triggerSpikePotential = () => {
    if (isSpiking) return;
    setIsSpiking(true);
    setSpikeCount(prev => prev + 1);
    setTimeout(() => {
      setIsSpiking(false);
    }, 600);
  };

  return (
    <section 
      id="projects-section" 
      className="col-span-12 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#ff9f0a]/40 hover:shadow-[0_0_25px_rgba(255,159,10,0.06)] hover:-translate-y-1 hover:scale-[1.01] hover:bg-[#080808]"
    >
      <div>
        <div className="flex justify-between items-center border-b border-neutral-800/85 pb-4 mb-6">
          <span className="font-mono text-xs font-bold tracking-widest text-[#ff9f0a] flex items-center gap-2.5 select-none">
            <Terminal className="w-4 h-4 text-orange-500" />
            INTERACTIVE SOFTWARE PLAYGROUND
          </span>
          <span className="text-[9px] font-mono text-neutral-500 font-extrabold uppercase tracking-wider">SANDBOX CORRIDORS</span>
        </div>

        {/* Tab layout selectors */}
        <div className="flex border-b border-neutral-900 pb-4 mb-6 gap-2">
          {[
            { id: 'deepscribe', name: 'DeepScribe', tag: 'Acoustical NLP' },
            { id: 'neuromorphic', name: 'Neuromorphic', tag: 'D3 SNN' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveProjectTab(tab.id)}
              className={`px-4 py-2.5 text-left rounded-xl transition-all cursor-pointer ${
                activeProjectTab === tab.id
                  ? 'bg-[#101010] text-white border border-[#ff9f0a]/30'
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              <span className="block text-[11px] font-mono uppercase font-black tracking-widest text-[#ff9f0a]">{tab.tag}</span>
              <span className="block text-sm font-display font-extrabold mt-0.5">{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Sub-panels */}
        <div>
          
          {/* DEEPSCRIBE SUBPANEL */}
          {activeProjectTab === 'deepscribe' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 space-y-4">
                <div className="flex items-center gap-2">
                  <h4 className="text-xl font-display font-black text-white">DeepScribe</h4>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[9px] font-mono font-extrabold text-neutral-400 tracking-wider uppercase">
                    <span className="w-1 h-1 rounded-full bg-emerald-500" />
                    ACTIVE STABLE PROTOTYPE
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                  A real-time medical conversation transcription portal executing robust diagnostic parsing. 
                  It integrates remote audio transcribers with FastAPI processors to strip patient narratives into clean medical templates.
                </p>
                
                <div className="bg-neutral-950 p-4 border border-neutral-900 rounded-2xl flex flex-col justify-center font-mono text-[11px] text-zinc-500 gap-1">
                  <p className="flex justify-between"><span>Speech Processor:</span> <span className="text-neutral-300 font-extrabold">-----</span></p>
                  <p className="flex justify-between"><span>Core Backend:</span> <span className="text-zinc-400 font-extrabold">FastAPI / NextJS / WebSockets</span></p>
                </div>
              </div>

              {/* Deepscribe simulation console */}
              <div className="md:col-span-6 bg-[#040404] border border-neutral-900 rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden min-h-[280px]">
                
                {/* Maintenance Overlay */}
                <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-sm z-30 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#ff9f0a] mb-3 animate-pulse">
                    <Settings className="w-5 h-5 animate-spin duration-1000" />
                  </div>
                  
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[9px] font-mono font-black tracking-widest uppercase mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
                    UNDER MAINTENANCE
                  </div>
                  <h4 className="text-sm font-display font-black text-white uppercase tracking-tight">
                    NLP Ingestion Muted
                  </h4>
                  <p className="text-[11px] text-neutral-400 font-sans leading-relaxed max-w-[220px] mx-auto mb-2">
                    Refactoring local audio streaming pipeline sockets and testing Whisper transcription accuracy models.
                  </p>
                  
                  <div className="w-full max-w-[180px] bg-neutral-950 border border-neutral-900 rounded-lg p-1.5 font-mono text-[8px] text-neutral-500 flex items-center justify-between">
                    <span>NLP ENGINE</span>
                    <span className="text-[#ff9f0a] font-bold">RECONFIGURING</span>
                  </div>
                </div>
                <div className="flex justify-between items-center font-mono">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Medical Transcript Corridor</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                </div>

                {/* Interactive trigger */}
                <button
                  onClick={startSimulationScribe}
                  disabled={isScribing}
                  className={`w-full py-2 border font-mono text-[11px] font-bold uppercase rounded-lg cursor-pointer ${
                    isScribing
                      ? 'bg-neutral-900 border-neutral-800 text-neutral-500 cursor-not-allowed'
                      : 'bg-orange-650 text-black border-orange-500 hover:scale-[1.01] transition-all'
                  }`}
                >
                  {isScribing ? 'SECURE_SCRIBING...' : 'Simulate Patient Consultation'}
                </button>

                {/* Text output logs terminal */}
                <div className="bg-neutral-950 p-3 rounded-lg font-mono text-[10px] text-neutral-400 h-32 overflow-y-auto space-y-1.5 scrollbar-thin border border-neutral-900/60">
                  {scribedLines.length === 0 ? (
                    <p className="text-neutral-600">{`> Ingestion line idle. Press simulate call.`}</p>
                  ) : (
                    scribedLines.map((line, idx) => (
                      <p key={idx} className={line.startsWith("[00:16]") || line.startsWith("[00:20]") ? "text-orange-500 font-black pl-1 mt-1 border-l border-l-orange-500" : ""}>
                        {line}
                      </p>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {/* NEUROMORPHIC VIS SUBPANEL */}
          {activeProjectTab === 'neuromorphic' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 space-y-4">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  <h4 className="text-xl font-display font-black text-white">Neuromorphic</h4>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[9px] font-mono font-extrabold text-orange-400 tracking-wider uppercase">
                    <span className="w-1 h-1 rounded-full bg-orange-500" />
                    EXPERIMENTAL VISUALIZER
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                  An interactive web-browser simulator displaying Spiking Neural Network (SNN) topologies. 
                  It illustrates membranes potential threshold firing cycles within dynamic biological neuron blocks.
                </p>
                
                <div className="bg-neutral-950 p-4 border border-neutral-900 rounded-2xl flex flex-col justify-center font-mono text-[11px] text-zinc-500 gap-1">
                  <p className="flex justify-between"><span>Graphics Stack:</span> <span className="text-neutral-300 font-extrabold">-----</span></p>
                  <p className="flex justify-between"><span>SNN Framework:</span> <span className="text-zinc-400 font-extrabold">-----</span></p>
                </div>
              </div>

              {/* Neuromorphic active component */}
              <div className="md:col-span-6 bg-[#040404] border border-neutral-900 rounded-2xl p-5 flex flex-col gap-4 items-center relative overflow-hidden min-h-[280px]">
                
                {/* Maintenance Overlay */}
                <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-sm z-30 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#ff9f0a] mb-3 animate-pulse">
                    <Settings className="w-5 h-5 animate-spin duration-1000" />
                  </div>
                  
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[9px] font-mono font-black tracking-widest uppercase mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
                    UNDER MAINTENANCE
                  </div>
                  <h4 className="text-sm font-display font-black text-white uppercase tracking-tight">
                    Membrane Graph Offline
                  </h4>
                  <p className="text-[11px] text-neutral-400 font-sans leading-relaxed max-w-[220px] mx-auto mb-2">
                    Will eventually display the unifying synapse weight rendering models with D3 dataset binds to visualize custom spikes from live patient EEG readings.
                  </p>
                  
                  <div className="w-full max-w-[180px] bg-neutral-950 border border-neutral-900 rounded-lg p-1.5 font-mono text-[8px] text-neutral-500 flex items-center justify-between">
                    <span>SNN TOPOLOGY</span>
                    <span className="text-[#ff9f0a] font-bold">RECONFIGURED</span>
                  </div>
                </div>
                <div className="text-center font-mono">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Interactive SNN Membrane Model</span>
                  <p className="text-[9px] text-[#6d6d6d] mt-1">Inject spike action potential to propagate neurons</p>
                </div>

                {/* Interactive diagram representing biological synapses */}
                <div className="flex items-center justify-between w-full max-w-[280px] h-12 relative px-4 border border-neutral-900 bg-neutral-950 rounded-xl">
                  {[1, 2, 3, 4].map((node) => (
                    <div key={node} className="relative z-10 flex flex-col items-center">
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center font-mono text-[9px] font-bold transition-all duration-300 ${
                        isSpiking
                          ? 'bg-orange-655 border-orange-500 text-black scale-110 shadow-lg shadow-orange-600/20'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                      }`}>
                        {node}
                      </div>
                    </div>
                  ))}
                  {/* Synaptic connector pipeline line */}
                  <div className={`absolute left-8 right-8 top-1/2 -translate-y-1/2 h-0.5 bg-neutral-900 transition-colors duration-300 ${isSpiking ? 'bg-orange-500/80 animate-pulse' : ''}`} />
                </div>

                {/* Controls */}
                <div className="flex w-full max-w-[280px] gap-2">
                  <button
                    onClick={triggerSpikePotential}
                    disabled={isSpiking}
                    className={`flex-1 py-1.5 font-mono text-[10px] font-extrabold uppercase rounded-lg cursor-pointer ${
                      isSpiking
                        ? 'bg-neutral-900 text-neutral-500 border border-neutral-800'
                        : 'bg-orange-600 text-black border border-orange-500 hover:scale-[1.01]'
                    }`}
                  >
                    {isSpiking ? 'SPIKING...' : 'Inject Action Potential'}
                  </button>
                  
                  <div className="px-3 py-1 bg-neutral-950 border border-neutral-900 text-neutral-400 rounded-lg font-mono text-[10px] flex items-center justify-center font-extrabold select-none">
                    SPIKES: {spikeCount}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
