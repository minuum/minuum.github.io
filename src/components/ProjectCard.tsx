"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCode } from 'react-icons/fa';
import { Repository } from '@/lib/github';

export default function ProjectCard({ repo, index }: { repo: Repository; index: number }) {
    return (
        <motion.a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="block group"
        >
            <div className="h-full p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 rounded-lg bg-black/50 text-cyan-400">
                            <FaCode size={20} />
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                            <FaStar className="text-yellow-500" />
                            <span>{repo.stargazers_count}</span>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                        {repo.name}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                        {repo.description || "No description available."}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                        <span className="text-xs font-mono text-gray-500">
                            {repo.language || "Code"}
                        </span>
                        <FaGithub className="text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                </div>
            </div>
        </motion.a>
    );
}
