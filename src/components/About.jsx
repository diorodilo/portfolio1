import React from 'react';
import { Layers, Database, Shield, LayoutGrid } from 'lucide-react';

export default function About() {
    const stack = [
        { title: 'Frontend Systems', tools: ['React.js', 'Tailwind CSS v4', 'Vite Architecture', 'Responsive UI/UX'], icon: <LayoutGrid className="text-neon-cyan" /> },
        { title: 'Backend Engine', tools: ['Node.js Systems', 'Express Engine', 'REST APIs', 'NPM Module Dev'], icon: <Layers className="text-neon-purple" /> },
        { title: 'Data Environments', tools: ['MySQL Design', 'Relational Schemas', 'Query Tuning'], icon: <Database className="text-accent-pink" /> },
        { title: 'Security & Operations', tools: ['TryHackMe Labs', 'Offensive Modules', 'Git Version Control'], icon: <Shield className="text-emerald-400" /> }
    ];

    return (
        <section id="about" className="scroll-mt-24">
            {/* Studio Render Frame displaying watermarked_img_2451324926098502129.png */}
            <div className="mb-16 rounded-3xl overflow-hidden glass-panel border border-white/5 relative group aspect-video max-h-[400px] w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-transparent to-neon-cyan/20 z-10 pointer-events-none" />
                <img
                    src="/watermarked_img_2451324926098502129.png"
                    alt="Mugisha Working Environment Simulation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20 glass-panel px-4 py-2 rounded-xl text-xs font-mono text-slate-300">
                    IDE Environment: Dev Ecosystem Setup
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-1">
                    <h2 className="text-3xl font-bold tracking-widest text-neon-cyan uppercase mb-4">// Technical Core</h2>
                    <p className="text-slate-400 leading-relaxed mb-6">
                        I build inventory managers, school platforms, and civic tools. I also build custom AI agents and produce digital music profiles. My programming logic balances creative UI with stable database architectures.
                    </p>
                    <div className="p-4 rounded-xl glass-panel border-l-4 border-neon-purple space-y-2">
                        <div>
                            <span className="block text-[11px] uppercase text-slate-400 tracking-wider font-semibold">Institution</span>
                            <span className="text-white text-sm font-medium">GSNDP Cyanika</span>
                        </div>
                        <div>
                            <span className="block text-[11px] uppercase text-slate-400 tracking-wider font-semibold">Location Focus</span>
                            <span className="text-white text-sm font-medium">Kigali, Rwanda</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {stack.map((group, index) => (
                        <div
                            key={index}
                            className="glass-panel p-6 rounded-2xl hover:border-white/20 transition-all duration-300 relative group overflow-hidden"
                        >
                            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-125 transition-transform duration-500">
                                {group.icon}
                            </div>
                            <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit">
                                {group.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{group.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.tools.map((tool) => (
                                    <span key={tool} className="text-xs bg-white/5 px-2.5 py-1 rounded-md text-slate-300 border border-white/5">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}