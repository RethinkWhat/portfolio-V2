import { useState } from "react";
import { Mail, Github, Linkedin, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [formSending, setFormSending] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  return (
    <section 
      id="contact-section" 
      className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-[#ff9f0a]/40 hover:shadow-[0_0_25px_rgba(255,159,10,0.06)] hover:-translate-y-1 hover:scale-[1.01] hover:bg-[#080808] mt-6"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/[0.01] rounded-full blur-3xl pointer-events-none" />
      
      <div>
        <div className="border-b border-neutral-850 pb-4 mb-6 flex justify-between items-center">
          <span className="font-mono text-xs font-bold tracking-widest text-[#ff9f0a] select-none flex items-center gap-2">
            <Mail className="w-4 h-4 text-orange-555" />
            GET IN TOUCH
          </span>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-green-500/10 text-green-500 text-[9px] font-mono font-bold rounded border border-green-500/20">
            <span className="w-1 h-1 rounded-full bg-green-400 animate-ping" /> GATEWAY ONLINE
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-5">
            <h4 className="text-2xl font-display font-black text-white tracking-tight">
              Contact me
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
              Interested in collaborating, discussing new opportunities, or learning more about my work? Feel free to reach out. I'm always open to connecting with fellow developers, researchers, and organizations looking to build innovative software and AI-driven solutions.
            </p>

            <div className="space-y-3 pt-2 font-mono text-xs">
              {/* Real coordinates */}
              <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-900 flex items-center justify-between group">
                <span className="text-zinc-500">EMAIL DIRECTORY:</span>
                <a 
                  href="mailto:rithiktank.business@gmail.com" 
                  className="text-[#ff9f0a] font-bold hover:underline transition-all"
                >
                  rithiktank.business@gmail.com
                </a>
              </div>

              <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-900 flex items-center justify-between">
                <span className="text-zinc-500">PHONE NUMBER:</span>
                
                <a href="tel:+639177900153"
                  className="text-[#ff9f0a] font-bold hover:underline transition-all">+63 917-790-0153</a>
              </div>

              <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-900 flex items-center justify-between">
                <span className="text-zinc-500">TIMEZONE:</span>
                <span className="text-neutral-400 font-bold">UTC+8 (PST)</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
               <a 
                 href="https://github.com/rethinkwhat" 
                 target="_blank" 
                 rel="noreferrer"
                 className="flex-1 py-2 bg-neutral-950 border border-neutral-800 hover:border-[#ff9f0a]/30 font-mono text-[10px] text-zinc-400 font-bold uppercase rounded-xl flex items-center justify-center gap-1.5 transition-all"
               >
                 <Github className="w-3.5 h-3.5" /> GITHUB
               </a>
               <a 
                 href="https://ph.linkedin.com/in/rithik-tank-904677278" 
                 target="_blank" 
                 rel="noreferrer"
                 className="flex-1 py-2 bg-neutral-950 border border-neutral-800 hover:border-[#ff9f0a]/30 font-mono text-[10px] text-zinc-400 font-bold uppercase rounded-xl flex items-center justify-center gap-1.5 transition-all"
               >
                 <Linkedin className="w-3.5 h-3.5" /> LINKEDIN
               </a>
            </div>
          </div>

          {/* Right Column: Interaction Form */}
          <form 
            onSubmit={async (e) => {
            e.preventDefault();

            if (!contactName || !contactEmail || !contactMessage) return;

            try {
              setFormSending(true);

              const response = await fetch("./api/contact", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: contactName,
                  email: contactEmail,
                  message: contactMessage,
                }),
              });

              if (!response.ok) {
                throw new Error("Failed to send");
              }

              setFormSuccess(true);

              setTimeout(() => {
                setContactName("");
                setContactEmail("");
                setContactMessage("");
                setFormSuccess(false);
              }, 5000);
            } catch (error) {
              console.error(error);
              alert("Failed to send message.");
            } finally {
              setFormSending(false);
            }
          }}
            className="lg:col-span-7 bg-[#050505] border border-neutral-800 rounded-2xl p-5 sm:p-6 space-y-4"
          >
            <div className="space-y-1">
              <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Your Name / Organization</label>
              <input 
                type="text"
                required
                placeholder="Your Name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                disabled={formSending || formSuccess}
                className="w-full bg-neutral-950 border border-neutral-910 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-[#ff9f0a]/50 transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Email</label>
              <input 
                type="email"
                required
                placeholder="you@email.com"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                disabled={formSending || formSuccess}
                className="w-full bg-neutral-950 border border-neutral-910 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-[#ff9f0a]/50 transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Message</label>
              <textarea 
                required
                rows={3}
                placeholder="Dont hesitate to reach out..."
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                disabled={formSending || formSuccess}
                className="w-full bg-neutral-950 border border-neutral-910 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-[#ff9f0a]/50 transition-colors resize-none"
              />
            </div>

            {formSuccess ? (
              <div className="bg-orange-500/10 border border-orange-500/30 p-3.5 rounded-xl font-mono text-[10px] text-[#ff9f0a] space-y-1.5">
                <p className="font-extrabold flex items-center gap-1.5 uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff9f0a] animate-pulse" /> TELEMETRY OUTBOX PIPELINE SUCCEEDED
                </p>
                <p className="text-[9px] text-[#8c8c8c]">
                  Thank you {contactName}. Your message has been sent. Email: {contactEmail} cam expect a response within the next 2-3 business days.
                </p>
              </div>
            ) : (
              <button
                type="submit"
                disabled={formSending}
                className={`w-full py-2.5 font-mono text-[11px] font-bold uppercase rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  formSending
                    ? 'bg-neutral-900 border border-neutral-800 text-zinc-500 cursor-wait'
                    : 'bg-gradient-to-r from-[#ff9f0a] to-[#f2720c] font-black text-black shadow-lg shadow-orange-500/10 hover:shadow-[#ff9f0a]/20 hover:scale-[1.01]'
                }`}
              >
                {formSending ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
              </button>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
