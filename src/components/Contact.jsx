import React, { useState } from 'react';
import { Send, Smartphone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Processing local link streams...');

        // Completely standalone client logic using localized URI generation
        const mailtoUri = `mailto:contact@mugisha.dev?subject=Portfolio Connection from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom Sender Endpoint: ${encodeURIComponent(form.email)}`;

        setTimeout(() => {
            window.location.href = mailtoUri;
            setStatus('System dispatch wrapper triggered.');
            setForm({ name: '', email: '', message: '' });
        }, 600);
    };

    return (
        <section id="contact" className="scroll-mt-24 max-w-4xl mx-auto w-full">
            <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden border border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

                    <div className="md:col-span-2 space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2">Initialize Streams</h2>
                            <p className="text-slate-400 text-sm">Direct pipe for structural reviews, architectural audits, or general contact vectors.</p>
                        </div>

                        <div className="space-y-4 text-sm text-slate-300">
                            <div className="flex items-center space-x-3">
                                <Smartphone className="text-neon-cyan" size={18} />
                                <span>+250 790 592 353</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="text-neon-purple" size={18} />
                                <span>contact@mugisha.dev</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="text-accent-pink" size={18} />
                                <span>Rwanda</span>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
                        <input
                            type="text"
                            placeholder="Identity / Handle"
                            required
                            className="w-full bg-dark-bg/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-cyan transition-all duration-300"
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                        />
                        <input
                            type="email"
                            placeholder="Return Identity Endpoint"
                            required
                            className="w-full bg-dark-bg/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-cyan transition-all duration-300"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                        />
                        <textarea
                            placeholder="Enter context payload, technical requirements, or system connection data streams..."
                            rows={4}
                            required
                            className="w-full bg-dark-bg/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-cyan transition-all duration-300 resize-none"
                            value={form.message}
                            onChange={e => setForm({ ...form, message: e.target.value })}
                        />

                        <button
                            type="submit"
                            className="w-full py-3.5 bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-bg font-bold rounded-xl tracking-wider uppercase text-xs flex items-center justify-center space-x-2 transition-all duration-300 hover:opacity-90"
                        >
                            <span>Transmit Stream</span>
                            <Send size={14} />
                        </button>

                        {status && <p className="text-xs font-mono text-neon-cyan mt-2">{status}</p>}
                    </form>

                </div>
            </div>
        </section>
    );
}