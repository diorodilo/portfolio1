import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="min-h-[80vh] flex flex-col justify-center items-start pt-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-panel border-neon-cyan/30 text-neon-cyan text-xs tracking-widest uppercase mb-6 animate-float">
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
                <span>Full-Stack Software Developer</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4">
                Crafting Digital Systems <br />
                <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-accent-pink bg-clip-text text-transparent text-neon-glow">
                    With Absolute Precision.
                </span>
            </h1>

            <p className="text-slate-400 text-lg max-w-2xl mb-8 leading-relaxed">
                Specialized in architectural engineering of modern web ecosystems using <span className="text-white font-medium">React, Node.js tooling, and SQL databases</span>. Focused on building optimized internal systems, custom developer utilities, and high-fidelity user experiences.
            </p>

            <div className="flex flex-wrap gap-4">
                <a
                    href="#projects"
                    className="px-6 py-3.5 bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-bg font-bold rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] flex items-center space-x-2"
                >
                    <span>Explore Implementations</span>
                    <ArrowUpRight size={18} />
                </a>
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3.5 glass-panel hover:bg-white/10 text-white font-medium rounded-lg transition-all duration-300 flex items-center space-x-2 border border-white/10 hover:border-neon-cyan/50"
                >

                </a>
            </div>
        </section>
    );
}