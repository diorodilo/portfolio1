import React from 'react';
import { Terminal, Code2, Layers, Cpu, Mail } from 'lucide-react';

export default function Navbar() {
  const links = [
    { name: 'Home', href: '#home', icon: <Terminal size={16} /> },
    { name: 'About', href: '#about', icon: <Cpu size={16} /> },
    { name: 'Projects', href: '#projects', icon: <Layers size={16} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={16} /> }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <Code2 className="text-neon-cyan group-hover:rotate-12 transition-transform duration-300" size={28} />
          <span className="font-bold tracking-wider text-xl bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            MUGISHA.DEV
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="flex items-center space-x-1.5 text-sm font-medium text-slate-300 hover:text-neon-cyan transition-colors duration-300 relative group py-2"
            >
              {link.icon}
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-neon-cyan to-neon-purple group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}