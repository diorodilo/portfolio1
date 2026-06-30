import React from 'react';
import { FolderGit2, ArrowUpRight, HeartHandshake, Layers, GraduationCap } from 'lucide-react';

export default function Projects() {
    const portfolioItems = [
        {
            title: 'Rwanda Civic Connect',
            desc: 'Civic engineering platform built to bridge the systemic communication gap between everyday citizens and local administrative leaders.',
            icon: <HeartHandshake className="text-neon-cyan" size={24} />,
            tags: ['React UI', 'Node.js Core', 'MySQL Infrastructure', 'Civic Tech']
        },
        {
            title: 'Berwa Shop Manager',
            desc: 'An inventory resource platform built for shop managers to effortlessly record items, trace sales transitions, and generate clean document reports.',
            icon: <Layers className="text-neon-purple" size={24} />,
            tags: ['Full-Stack', 'State Handling', 'Inventory Analytics']
        },
        {
            title: 'NEWSI Package',
            desc: 'Modular workspace navigation utility package written and published cleanly to the public global npm package registry.',
            icon: <FolderGit2 className="text-accent-pink" size={24} />,
            tags: ['Node.js Utility', 'NPM Registry', 'Open Source Dev']
        },
        {
            title: 'Integrated Assessment Suites',
            desc: 'A suite of system architectures modeling StockHub Ltd, Hospital Management pipelines, and automated School Fee Management frameworks.',
            icon: <GraduationCap className="text-emerald-400" size={24} />,
            tags: ['Schema Design', 'Management Ecosystems', 'Academic Core']
        }
    ];

    return (
        <section id="projects" className="scroll-mt-24">
            <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-2">Production Environments</h2>
                <p className="text-slate-400">Functional systems built with clean structural logic, high-definition styling, and performance matching production needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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