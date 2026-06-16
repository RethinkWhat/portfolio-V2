import { useState, useEffect, useRef } from "react";
import { 
  BrainCircuit, 
  ExternalLink, 
  Settings, 
  Volume2, 
  Play 
} from "lucide-react";

export default function ResearchDissertations() {
  const [selectedSample, setSelectedSample] = useState('copd');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [labOutputs, setLabOutputs] = useState([
    "Ready for diagnostics ingestion.",
    "Click RUN SPECTRUM ANALYSIS to synthesize features."
  ]);
  const [waveHeights, setWaveHeights] = useState(Array(24).fill(12));
  const waveTimer = useRef(null);

  // Acoustic pipeline wave simulation
  useEffect(() => {
    if (isAnalyzing) {
      waveTimer.current = setInterval(() => {
        setWaveHeights(prev => prev.map(() => Math.floor(Math.random() * 28) + 4));
      }, 100);
    } else {
      if (waveTimer.current) clearInterval(waveTimer.current);
      setWaveHeights(Array(24).fill(12));
    }
    return () => {
      if (waveTimer.current) clearInterval(waveTimer.current);
    };
  }, [isAnalyzing]);

  const runAcousticAnalysis = () => {
    setIsAnalyzing(true);
    setLabOutputs([
      "INGESTING raw .wav channel...",
      `TARGET: Patient diagnosed breath files [${selectedSample.toUpperCase()}]`,
      "EXTRACTING Mel-Frequency Cepstral Coefficients (MFCCs)...",
      "COMPUTING Chroma state Vectors...",
      "FUSING signals via Dual-Channel attention cross-multiphaser..."
    ]);

    setTimeout(() => {
      let resultText = "";
      if (selectedSample === 'copd') {
        resultText = "CLASSIFIED: COPD Indicator (91.8% confidence) - F1 0.4124";
      } else if (selectedSample === 'pneumonia') {
        resultText = "CLASSIFIED: Pneumonia Signature (93.1% confidence) - F1 0.3891";
      } else if (selectedSample === 'asthma') {
        resultText = "CLASSIFIED: Asthma Signature (92.4% confidence) - F1 0.4056";
      } else if (selectedSample === 'urti') {
        resultText = "CLASSIFIED: URTI Marker (89.5% confidence) - F1 0.3702";
      } else if (selectedSample === 'bronchitis') {
        resultText = "CLASSIFIED: Bronchitis Pattern (88.7% confidence) - F1 0.3653";
      } else if (selectedSample === 'crackle') {
        resultText = "CLASSIFIED: Acoustic Adventitious Crackle (94.2% confidence) - Standard Vesper";
      } else {
        resultText = "CLASSIFIED: Normal Bronchial Cycle (96.8% confidence) - Standard Healthy";
      }
      setLabOutputs(prev => [
        ...prev,
        "ATTENTION COUPLING: Chroma feature convergence achieved (0.012 epsilon)",
        "DETERMINING diagnostic thresholds against CLINICAL benchmarks...",
        resultText,
        "STETHOSCOPE DIAGNOSTICS DEPLOYMENT STABLE."
      ]);
      setIsAnalyzing(false);
    }, 2200);
  };

  return (
    <section 
      id="research-section" 
      className="col-span-12 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#ff9f0a]/40 hover:shadow-[0_0_25px_rgba(255,159,10,0.06)] hover:-translate-y-1 hover:scale-[1.01] hover:bg-[#080808] relative overflow-hidden group"
    >
      <div>
        <div className="flex justify-between items-center border-b border-neutral-800/85 pb-4 mb-6">
          <span className="font-mono text-xs font-bold tracking-widest text-[#ff9f0a] flex items-center gap-2.5 select-none">
            <BrainCircuit className="w-4 h-4 text-[#ff9f0a]" />
            RESEARCH
          </span>
          <span className="text-[9px] font-mono text-neutral-500 font-extrabold uppercase tracking-wider">RESEARCH PORTALS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Research Summaries */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Paper 1 Title Block */}
            <div className="bg-[#050505] border border-neutral-800 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:border-[#ff9f0a]/40 hover:shadow-[0_0_25px_rgba(255,159,10,0.06)] hover:-translate-y-1 hover:scale-[1.01] hover:bg-[#080808] group/paper">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-[9px] font-mono font-black text-[#ff9f0a] tracking-widest group-hover/paper:border-[#ff9f0a]/30 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                CO-AUTHOR
              </div>
              <h4 className="font-display font-extrabold text-white text-base mt-2 leading-snug group-hover/paper:text-[#ff9f0a] transition-colors">
                Dual-Channel CNN-LSTM with MFCC-Chroma Attention Fusion for Lung Sound Disease Classification
              </h4>
              <p className="text-xs text-neutral-400 font-sans mt-2.5 leading-relaxed">
                Features novel attention convergence modeling using stethoscopic acoustic streams. Achieved a macro F1 of 0.4056 and 0.3394 on clinical patients in the Philippines.
              </p>
              <div className="flex flex-wrap items-center gap-2.5 mt-4 font-mono text-[10px]">
                <span className="text-zinc-500">Data Preprocessing & Model Development</span>
                <span className="text-orange-500 bg-orange-500/5 px-1.5 py-0.5 rounded border border-orange-500/10">HINGA V1 Dataset</span>
                <a href="https://bitly.cx/lungs" target="_blank" rel="noreferrer" className="text-orange-500 font-extrabold hover:underline flex items-center gap-1 ml-auto">LINK <ExternalLink className="w-3 h-3" /></a>
              </div>
            </div>

            {/* Paper 2 Title Block */}
            <div className="bg-[#050505] border border-neutral-800 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:border-[#ff9f0a]/40 hover:shadow-[0_0_25px_rgba(255,159,10,0.06)] hover:-translate-y-1 hover:scale-[1.01] hover:bg-[#080808] group/paper">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-[9px] font-mono font-black text-[#ff9f0a] tracking-widest group-hover/paper:border-[#ff9f0a]/30 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                CO-AUTHOR
              </div>
              <h4 className="font-display font-extrabold text-white text-base mt-2 leading-snug group-hover/paper:text-[#ff9f0a] transition-colors">
                Identifying Distinctive Acoustic Signatures of Respiratory Diseases: A PCA-and ICA-Based Exploration of the ICBHI 2017 Dataset
              </h4>
              <p className="text-xs text-neutral-400 font-sans mt-2.5 leading-relaxed">
                Aims to enhance the interpretability of respiratory sound analysis, support future feature-selection strategies, and contribute to the development of more transparent and clinically reliable diagnostic systems.
              </p>
              <div className="flex flex-wrap items-center gap-2.5 mt-4 font-mono text-[10px]">
                <span className="text-zinc-500">Principal Author</span>
                <span className="text-orange-500 bg-orange-500/5 px-1.5 py-0.5 rounded border border-orange-500/10">Respiratory Acoustics Form </span>
                <a href="https://www.researchgate.net/publication/407118265_Identifying_Distinctive_Acoustic_Signatures_of_Respiratory_Diseases_A_PCA-and_ICA-Based_Exploration_of_the_ICBHI_2017_Dataset" target="_blank" rel="noreferrer" className="text-orange-500 font-extrabold hover:underline flex items-center gap-1 ml-auto">LINK <ExternalLink className="w-3 h-3" /></a>
              </div>
            </div>

            {/* Paper 2 Title Block */}
            <div className="bg-[#050505] border border-neutral-800 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:border-amber-500/40 hover:shadow-[0_0_25px_rgba(245,158,11,0.06)] hover:-translate-y-1 hover:scale-[1.01] hover:bg-[#080808] group/paper">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-[9px] font-mono font-black text-amber-500 tracking-widest group-hover/paper:border-amber-500/30 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                CO-AUTHOR
              </div>
              <h4 className="font-display font-extrabold text-white text-base mt-1.5 leading-snug group-hover/paper:text-amber-500 transition-colors">
                Virtual Machines vs. Container Technology: Trade-offs, Challenges, and Hybrid Solutions in Modern Data Centers
              </h4>
              <p className="text-xs text-neutral-400 font-sans mt-2 leading-relaxed">
                Seeks to critically examine whether containers can meet the operational andsecurity requirements of heterogeneous environments, or whether a hybrid deployment strategy combining virtualmachines and containers is necessary to achieve an optimal balance .
              </p>
              <div className="flex flex-wrap items-center gap-2.5 mt-4 font-mono text-[10px]">
        
                <a href="https://www.researchgate.net/publication/407117946_Virtual_Machines_vs_Container_Technology_Trade-offs_Challenges_and_Hybrid_Solutions_in_Modern_Data_Centers" target="_blank" rel="noreferrer" className="text-orange-500 font-extrabold hover:underline flex items-center gap-1 ml-auto">LINK <ExternalLink className="w-3 h-3" /></a>
              </div>
            </div>

            {/* Paper 2 Title Block */}
            <div className="bg-[#050505] border border-neutral-800 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:border-orange-500/40 hover:shadow-[0_0_25px_rgba(242,114,12,0.06)] hover:-translate-y-1 hover:scale-[1.01] hover:bg-[#080808] group/paper">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-[9px] font-mono font-black text-orange-400 tracking-widest group-hover/paper:border-orange-500/30 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                CO-AUTHOR
              </div>
              <h4 className="font-display font-extrabold text-white text-base mt-2 leading-snug group-hover/paper:text-orange-400 transition-colors">
                MFCC-Chroma Fusion and Demographic-Aware Random Forest for Lung Sound Disease Classification
              </h4>
              <p className="text-xs text-neutral-400 font-sans mt-2.5 leading-relaxed">
                Synthesizes chronological acoustics alongside patient metadata profiles (age, sex) to distinguish restrictive vs. obstructive signals.
              </p>
              <div className="flex flex-wrap items-center gap-2.5 mt-4 font-mono text-[10px]">
                <span className="text-zinc-500">Seed Study</span>
                <a href="https://www.researchgate.net/publication/391980454_MFCC-Chroma_Fusion_using_a_Dual-Channel_CNN-LSTM_and_Demographic-Aware_Random_Forest_for_Lung_Sound_Disease_Classification" target="_blank" rel="noreferrer" className="text-orange-500 font-extrabold hover:underline flex items-center gap-1 ml-auto">LINK <ExternalLink className="w-3 h-3" /></a>
              </div>
            </div>

            {/* Paper 3 Title Block */}
            <div className="bg-[#050505] border border-neutral-800 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:border-amber-500/40 hover:shadow-[0_0_25px_rgba(245,158,11,0.06)] hover:-translate-y-1 hover:scale-[1.01] hover:bg-[#080808] group/paper">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-[9px] font-mono font-black text-amber-500 tracking-widest group-hover/paper:border-amber-500/30 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                CO-AUTHOR
              </div>
              <h4 className="font-display font-extrabold text-white text-base mt-1.5 leading-snug group-hover/paper:text-amber-500 transition-colors">
                Automaton-Based Framework for Validating and Extracting Information from Vehicle Plate Numbers in the Philippines
              </h4>
              <p className="text-xs text-neutral-400 font-sans mt-2 leading-relaxed">
                A finite state automaton that validates Philippine plate numbers of motorcycles and 4-wheel vehicles.
              </p>
              <div className="flex flex-wrap items-center gap-2.5 mt-4 font-mono text-[10px]">
        
                <a href="https://www.researchgate.net/publication/380362488_Automaton-Based_Framework_for_Validating_and_Extracting_Information_from_Vehicle_Plate_Numbers_in_the_Philippines" target="_blank" rel="noreferrer" className="text-orange-500 font-extrabold hover:underline flex items-center gap-1 ml-auto">LINK <ExternalLink className="w-3 h-3" /></a>
              </div>
            </div>

            

          </div>

          {/* Right Column: Audio Analysis Simulator Laboratory */}
          <div className="lg:col-span-5 bg-black border border-neutral-800 rounded-2xl p-5 flex flex-col gap-4 relative overflow-hidden min-h-[460px]">
            <div className="absolute top-0 right-0 p-3 text-[9px] font-mono text-neutral-600">STETH_CORRELATOR_v1.0</div>
            
            <div className="space-y-1">
              <h5 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Acoustic Audio Laboratory</h5>
              <p className="text-[10px] text-zinc-500">Simulate Rithik's stethoscopic model signals dynamically</p>
            </div>

            {/* Highly polished sci-fi themed absolute under construction overlay */}
            <div className="absolute inset-0 bg-[#07070a]/92 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-[#ff9f0a] animate-pulse">
                <Settings className="w-6 h-6 animate-spin duration-300" />
              </div>
              
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-[#ff9f0a] border border-orange-500/20 text-[10px] font-mono font-black tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                  UNDER CONSTRUCTION
                </div>
                <h4 className="text-sm font-display font-black text-white uppercase tracking-tight">
                  Dual-Channel Core Maintenance
                </h4>
                <p className="text-[11px] text-neutral-400 font-sans leading-relaxed max-w-[250px] mx-auto">
                  The lung sound diagnostic classification pipeline is currently undergoing hyperparameter tuning and model synchronization to integrate the HINGA V2 dataset. Interactive sandbox services will restore shortly.
                </p>
              </div>
              
              <div className="w-full max-w-[200px] bg-neutral-950 border border-neutral-900 rounded-lg p-2 font-mono text-[8px] text-neutral-600 flex items-center justify-between">
                <span>STAGE // CALIBRATION</span>
                <span className="text-[#ff9f0a] font-bold">87.4% COMPLETED</span>
              </div>
            </div>

            {/* Channel selectors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1">
              {['copd', 'pneumonia', 'asthma', 'urti', 'bronchitis', 'crackle', 'healthy'].map((sig) => (
                <button
                  key={sig}
                  onClick={() => {
                    if (!isAnalyzing) {
                      setSelectedSample(sig);
                      setLabOutputs([
                        `Ingested sample channel: [${sig.toUpperCase()}]`,
                        "Diagnostic buffers refreshed. Press local analyzer."
                      ]);
                    }
                  }}
                  disabled={isAnalyzing}
                  className={`px-2.5 py-1.5 text-center font-mono text-[10px] uppercase font-bold rounded-lg border transition-all cursor-pointer ${
                    selectedSample === sig
                      ? 'bg-gradient-to-r from-[#ff9f0a] to-[#f2720c] text-black border-transparent font-extrabold shadow-md'
                      : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:bg-neutral-900 hover:text-white'
                  }`}
                >
                  {sig}
                </button>
              ))}
            </div>

            {/* Spectrogram visualization container */}
            <div className="bg-neutral-950 border border-neutral-900 p-4 rounded-xl flex flex-col justify-center items-center h-28 relative">
              {/* Spectral bars */}
              <div className="flex items-end justify-center gap-1.5 w-full h-16">
                {waveHeights.map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className={`w-1 rounded transition-all duration-100 ${
                      isAnalyzing 
                        ? 'bg-orange-500 opacity-100' 
                        : selectedSample === 'healthy' 
                          ? 'bg-green-500/50 opacity-80' 
                          : 'bg-orange-500/40 opacity-60'
                    }`}
                  />
                ))}
              </div>
              
              <div className="mt-2.5 flex items-center gap-1.5 text-[9px] font-mono text-neutral-500">
                <Volume2 className="w-3.5 h-3.5 text-orange-500" />
                <span>Chroma Centroid Fusion Core</span>
              </div>
            </div>

            {/* Action buttons */}
            <button
              onClick={runAcousticAnalysis}
              disabled={isAnalyzing}
              className={`w-full py-2.5 rounded-xl font-mono text-xs font-extrabold uppercase transition-all tracking-widest flex items-center justify-center gap-2 cursor-pointer ${
                isAnalyzing
                  ? 'bg-neutral-900 border border-neutral-800 text-neutral-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#ff9f0a] to-[#f2720c] text-black hover:opacity-95 shadow-md shadow-orange-600/25 hover:scale-[1.01]'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              {isAnalyzing ? 'Processing audio...' : 'Run Spectrum Analysis'}
            </button>

            {/* Output logs screen */}
            <div className="bg-neutral-950/80 border border-neutral-900 p-3 rounded-xl font-mono text-[9px] text-[#8c8c8c] h-32 overflow-y-auto space-y-1">
              {labOutputs.map((log, index) => (
                <p 
                  key={index} 
                  className={log.startsWith("CLASSIFIED") ? "text-green-500 font-extrabold border-l-2 border-l-green-500 pl-1.5 mt-1" : ""}
                >
                  {`> ${log}`}
                </p>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
