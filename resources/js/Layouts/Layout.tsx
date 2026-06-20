import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { Head, Link, usePage } from "@inertiajs/react";

interface PageProps {
  appUrl?: string;
}

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { url, props } = usePage<PageProps>();
  const appUrl = props.appUrl ?? "";

  const pageTitle = title
    ? `${title} | Wassim Jebali`
    : "Wassim Jebali | Full-Stack Developer Portfolio";
  const pageDescription =
    description ??
    "Portfolio of Wassim Jebali, full-stack developer building clean, impactful web applications with React, Laravel, and modern tools.";
  const canonicalUrl = appUrl ? `${appUrl}${url === "/" ? "" : url}` : undefined;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta head-key="description" name="description" content={pageDescription} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Head>

      <div className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden flex flex-col">
        {/* ─── Nav ─── */}
        <nav
          className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-background/75 backdrop-blur-2xl border-b border-border"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
            <Link href="/" className="font-mono text-[13px] font-semibold tracking-[0.2em] uppercase text-[#3b82f6]">
              W.Jebali
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {[
                ["Home", "/"],
                ["Projects", "/projects"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className={`text-sm transition-colors duration-200 ${
                    url === href ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-sm px-4 py-1.5 rounded-full border border-[#3b82f6]/40 text-[#3b82f6] hover:bg-[#3b82f6]/10 transition-all duration-200"
              >
                Hire me
              </Link>
            </div>

            <button
              className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border px-6 py-5 flex flex-col gap-4">
              {[
                ["Home", "/"],
                ["Projects", "/projects"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className={`text-sm ${
                    url === href ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </nav>

        {/* ─── Main Content ─── */}
        <main className="flex-1 mt-16">
          {children}
        </main>

        {/* ─── Footer ─── */}
        <footer className="border-t border-border px-6 py-8 mt-auto">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-muted-foreground tracking-widest uppercase">
                W.Jebali
              </span>
              <span className="text-border">·</span>
              <span className="font-mono text-[11px] text-muted-foreground">
                © 2026
              </span>
            </div>

            <div className="flex items-center gap-5">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/Sextty" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/wassim-wess-b3a544380/" },
                { icon: Twitter, label: "Twitter", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-[#60a5fa] transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
