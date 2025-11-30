"use client";

import { FaGithub, FaStar, FaCode } from 'react-icons/fa';
import { Repository } from '@/lib/github';

export default function ProjectCard({ repo }: { repo: Repository; index: number }) {
    return (
        <div className="group flex flex-col sm:flex-row sm:items-start gap-4 p-4 -mx-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                    <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-gray-900 dark:text-gray-100 hover:text-primary transition-colors"
                    >
                        {repo.name}
                    </a>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                        {repo.language || 'Code'}
                    </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
                    {repo.description || "No description available."}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-500">
                    {repo.stargazers_count > 0 && (
                        <div className="flex items-center gap-1">
                            <FaStar className="text-yellow-500" />
                            <span>{repo.stargazers_count}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>

            <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors self-start mt-1"
            >
                <FaGithub size={18} />
            </a>
        </div>
    );
}
