"use client";

import Image from 'next/image';
import { FaGithub, FaEnvelope, FaLinkedin, FaGraduationCap } from 'react-icons/fa';

export default function Hero() {
    return (
        <section className="py-20 border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-10">
                {/* Profile Image Placeholder - User can replace this later */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 dark:bg-gray-800 flex-shrink-0 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">
                        Profile Photo
                    </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                        Minu <span className="text-gray-400 font-normal">(Minuum)</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                        Undergraduate Researcher @ Kangnam University
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                        <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm rounded-full font-medium">
                            Artificial Intelligence
                        </span>
                        <span className="px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-300 text-sm rounded-full font-medium">
                            VLA Models
                        </span>
                        <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm rounded-full font-medium">
                            Robotics
                        </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-6">
                        I am a senior undergraduate student majoring in Artificial Intelligence.
                        My research focuses on Vision-Language-Action (VLA) models and their application in mobile robotics.
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-5 text-gray-500">
                        <a href="https://github.com/minuum" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                            <FaGithub size={22} />
                        </a>
                        <a href="mailto:minwoolo0357@gmail.com" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                            <FaEnvelope size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
