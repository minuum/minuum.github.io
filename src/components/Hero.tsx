"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),transparent_50%)]" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-6">
                        AI & Robotics Researcher
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Building the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            Future of VLA
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        Exploring the intersection of Vision-Language Models and Action.
                        Developing intelligent agents that perceive, reason, and act in the physical world.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link
                            href="/projects"
                            className="group px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-cyan-400 transition-colors flex items-center gap-2"
                        >
                            View Projects
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/blog"
                            className="px-8 py-3 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            Read Blog
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
