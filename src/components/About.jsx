import React from 'react';
import { Layers, Database, Shield, LayoutGrid } from 'lucide-react';

export default function About() {
    const stack = [
        { title: 'Frontend Architecture', tools: ['React.js', 'Tailwind CSS v4', 'Vite', 'Responsive UX/UI'], icon: <LayoutGrid className="text-neon-cyan" /> },
        { title: 'Backend Engineering', tools: ['Node.js Systems', 'Express Engine', 'REST Protocols', 'NPM Package Deployment'], icon: <Layers className="text-neon-purple" /> },
        { title: 'Database Design', tools: ['MySQL Development', 'Relational Schemas', 'Query Balancing'], icon: <Database className="text-accent-pink" /> },
        { title: 'Systems & Environments', tools: ['Linux Fundamentals', 'Git Architecture', 'Cybersecurity Module Training'], icon: <Shield className="text-emerald-400" /> }
    ];

    return (
        <section id="about" className="scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-1">
                    <h2 className="text-3xl font-bold tracking-widest text-neon-cyan uppercase mb-4">// Core Engineering</h2>
                    <p className="text-slate-400 leading-relaxed mb-6">
                        A software development engineer deeply committed to structured object hierarchies, syntax integrity, and semantic UI layers. Bridging responsive interactive logic with production-ready systems.
                    </p>
                    <div className="p-4 rounded-xl glass-panel border-l-4 border-neon-purple">
                        <span className="block text-xs uppercase text-slate-400 tracking-wider font-semibold">Operational Hub</span>
                        <span className="text-white text-lg font-medium">Kigali, Rwanda</span>
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