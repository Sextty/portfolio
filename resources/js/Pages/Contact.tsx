import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";
import Layout from "../Layouts/Layout";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Layout>
      <section className="py-32 px-6 overflow-hidden relative">
        <div className="pointer-events-none absolute left-0 bottom-0 w-80 h-80 bg-blue-700/6 rounded-full blur-[90px]" />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#60a5fa] mb-3">
                Say hello
              </p>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-foreground mb-5">
                Let's build
                <br />
                something.
              </h2>
              <p className="text-[0.95rem] text-muted-foreground leading-relaxed max-w-xs">
                Open to contract work, interesting collaborations, and full-time
                opportunities. Drop me a message and let's talk.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center">
                    <Mail size={13} className="text-[#60a5fa]" />
                  </div>
                  <a
                  href="mailto:wassimjebali583@gmail.com"
                  className="text-sm text-muted-foreground hover:text-[#60a5fa] transition-colors"
                >
                  wassimjebali583@gmail.com
                </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center">
                    <MapPin size={13} className="text-[#60a5fa]" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Remote
                  </span>
                </div>
              </div>

              <div className="mt-10 p-5 rounded-2xl border border-border bg-card">
                <p className="font-mono text-[11px] text-muted-foreground mb-3 tracking-widest uppercase">
                  Response time
                </p>
                <p className="text-2xl font-display font-bold text-foreground">
                  &lt; 24 hours
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Usually much faster.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-[#3b82f6]/50 focus:ring-1 focus:ring-[#3b82f6]/25 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ada@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-[#3b82f6]/50 focus:ring-1 focus:ring-[#3b82f6]/25 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about what you're building..."
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-[#3b82f6]/50 focus:ring-1 focus:ring-[#3b82f6]/25 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-sm font-semibold text-white transition-all duration-200 relative overflow-hidden"
                style={{
                  background: sent
                    ? "linear-gradient(135deg, #10b981, #059669)"
                    : "linear-gradient(135deg, #3b82f6, #7c3aed)",
                  boxShadow: sent
                    ? "0 8px 32px rgba(16,185,129,0.2)"
                    : "0 8px 32px rgba(59,130,246,0.2)",
                }}
              >
                {sent ? "✓ Message sent — I'll be in touch!" : "Send Message →"}
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
