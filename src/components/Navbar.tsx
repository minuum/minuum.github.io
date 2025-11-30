"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter hover:text-cyan-400 transition-colors">
                    MINU<span className="text-cyan-400">.AI</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`relative text-sm font-medium transition-colors hover:text-cyan-400 ${pathname === item.path ? 'text-white' : 'text-gray-400'
                                }`}
                        >
                            {item.name}
                            {pathname === item.path && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"
                                />
                            )}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/minuum" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <FaGithub size={20} />
                    </a>
                    {/* Add more social links here if available */}
                </div>
            </div>
        </nav>
    );
}
