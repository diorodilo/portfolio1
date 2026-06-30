import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-12 pt-16">
            <div className="flex-1 flex flex-col items-start text-left">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-panel border-neon-cyan/30 text-neon-cyan text-xs tracking-widest uppercase mb-6 animate-float">
                    <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
                    <span>Level 5 Software Development Engineer</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                    Hi, I am <br />
                    <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-accent-pink bg-clip-text text-transparent text-neon-glow">
                        Mugisha Shimwa Odilo
                    </span>
                </h1>

                <p className="text-slate-400 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
                    Based in Rwanda and studying at <span className="text-white font-semibold">GSNDP Cyanika</span>. I engineer high-definition web applications using <span className="text-white font-medium">React, Node.js, MySQL, and Tailwind CSS</span>—specializing in management systems and civic innovations.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="px-6 py-3.5 bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-bg font-bold rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] flex items-center space-x-2"
                    >
                        <span>View Architecture</span>
                        <ArrowUpRight size={18} />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3.5 glass-panel hover:bg-white/10 text-white font-medium rounded-lg transition-all duration-300 flex items-center space-x-2 border border-white/10 hover:border-neon-cyan/50"
                    >
                        <Github size={18} />
                        <span>GitHub Core</span>
                    </a>
                </div>
            </div>

            {/* Profile Image Frame featuring WIN_20260520_01_54_45_Pro.jpg */}
            <div className="flex-1 relative w-full max-w-md aspect-square flex justify-center items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-3xl blur-xl opacity-20 animate-glow" />
                <div className="w-full h-full rounded-3xl overflow-hidden border border-white/10 relative glass-panel group">
                    <img
                        src="/WIN_20260520_01_54_45_Pro.jpg"
                        alt="Mugisha Shimwa Odilo Profile"
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border-white/5">
                        <p className="text-xs font-mono text-neon-cyan font-semibold tracking-widest uppercase">// SYS_PROFILE_READY</p>
                        <p className="text-sm font-bold text-white mt-0.5">Mugisha Shimwa Odilo</p>
                    </div>
                </div>
            </div>
        </section>
    );
}