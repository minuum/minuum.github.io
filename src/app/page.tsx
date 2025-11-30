import Hero from '@/components/Hero';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-[2fr_1fr] gap-12">

          {/* Left Column: News & Updates */}
          <section>
            <h2 className="text-xl font-bold mb-6 border-b border-gray-100 dark:border-gray-800 pb-2">
              News
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-sm text-gray-400 font-mono whitespace-nowrap pt-1">Nov 2024</span>
                <div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Started working on <strong>Mobile-VLA</strong> adaptation project.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-sm text-gray-400 font-mono whitespace-nowrap pt-1">Sep 2024</span>
                <div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Joined the <strong>Robotics & AI Lab</strong> as an undergraduate researcher.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-bold mb-6 border-b border-gray-100 dark:border-gray-800 pb-2">
                Selected Projects
              </h2>
              <ul className="space-y-4">
                <li>
                  <Link href="/projects" className="group block">
                    <h3 className="font-medium text-lg group-hover:text-primary transition-colors inline-flex items-center gap-2">
                      RoboVLMs Context Analysis
                      <FaArrowRight className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-sm" />
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      Analyzing context vectors from 7DOF manipulators for 2DOF mobile robots.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="group block">
                    <h3 className="font-medium text-lg group-hover:text-primary transition-colors inline-flex items-center gap-2">
                      Portfolio Website
                      <FaArrowRight className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-sm" />
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      Personal academic website built with Next.js and Tailwind CSS.
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* Right Column: Quick Links / Recent Posts */}
          <aside className="space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/future-of-vla" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors block">
                    The Future of VLA Models
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
