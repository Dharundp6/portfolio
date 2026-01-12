import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-[#f5f0e1] py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Comic Border Top */}
        <div className="border-t-4 border-dashed border-[#8b7355]/50 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Credits */}
          <div className="text-center md:text-left">
            <p className="font-[family-name:var(--font-bangers)] text-lg text-[#d4a84b]">
              THE END... FOR NOW
            </p>
            <p className="text-sm text-[#8b7355] font-[family-name:var(--font-courier-prime)]">
              © {currentYear} Dharun Prasanth. All rights reserved.
            </p>
          </div>

          {/* Center - Made with */}
          <div className="text-center">
            <p className="text-sm text-[#d4a84b] font-[family-name:var(--font-bangers)]">
              Made by DP
            </p>
          </div>

          {/* Right - Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Dharundp6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border-2 border-[#8b7355] text-[#8b7355] hover:bg-[#d4a84b] hover:text-[#1a1a1a] hover:border-[#d4a84b] transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/dharun-prasanth-300429211"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border-2 border-[#8b7355] text-[#8b7355] hover:bg-[#4a6fa5] hover:text-white hover:border-[#4a6fa5] transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:dharunjagan009@gmail.com"
              className="w-10 h-10 flex items-center justify-center border-2 border-[#8b7355] text-[#8b7355] hover:bg-[#b5544a] hover:text-white hover:border-[#b5544a] transition-all"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Comic Style */}
        <div className="mt-6 pt-4 border-t border-[#8b7355]/30 text-center">
          <p className="font-[family-name:var(--font-bangers)] text-xs text-[#5c4d3c] tracking-widest">
            VOLUME 1 • ISSUE 1 • {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
