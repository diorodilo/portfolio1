import React from 'react';
import { FolderGit2, ArrowUpRight, HeartHandshake, Layers } from 'lucide-react';

export default function Projects() {
    const portfolioItems = [
        {
            title: 'Rwanda Civic Connect',
            desc: 'An advanced communications platform bridging systemic reporting links between dynamic citizens and provincial administrative management leadership hubs.',
            icon: <HeartHandshake className="text-neon-cyan" size={24} />,
            tags: ['React App', 'Node.js Core', 'MySQL Engine', 'Civic Network']
        },
        {
            title: 'Berwa Shop Manager',
            desc: 'Commercial scale retail management stack built for tracking physical item inventory transitions, ledger updates, and layout-driven report printing.',
            icon: <Layers className="text-neon-purple" size={24} />,
            tags: ['React Views', 'System State', 'Relational Schemas']
        },
        {
            title: 'Agnesnavigation Utility',
            desc: 'Developer environment navigation framework successfully packaged and published into the public global open-source NPM registry ecosystem.',
            icon: <FolderGit2 className="text-accent-pink" size={24} />,
            tags: ['Node Engine', 'NPM Tooling', 'Library Lifecycle']
        }
    ];

    return (
        <section id="projects" className="scroll-mt-24">
            <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-2">Production Environments</h2>
                <p className="text-slate-400">Functional systems constructed with strict algorithmic flow rules and clean structural visual separation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.map((project, idx) => (
                    <div
                        key={idx}
                        className="glass-panel rounded-2xl flex flex-col h-full hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform hover:-translate-y-1 transition-all duration-300 overflow-hidden relative group border border-white/5 hover:border-neon-cyan/30"
                    >
                        <div className="p-6 flex-grow">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-white/5 rounded-xl text-neon-cyan">
                                    {project.icon}
                                </div>
                                <ArrowUpRight className="text-slate-500 group-hover:text-neon-cyan transition-colors duration-300" size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {project.desc}
                            </p>
                        </div>
                        <div className="p-6 bg-white/[0.02] border-t border-white/5 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="text-[11px] font-mono tracking-wider bg-dark-bg px-2.5 py-1 rounded border border-white/5 text-slate-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}