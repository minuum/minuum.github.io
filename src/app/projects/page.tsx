import { getRepositories } from '@/lib/github';
import ProjectCard from '@/components/ProjectCard';

export default async function ProjectsPage() {
    const repos = await getRepositories('minuum');

    return (
        <main className="min-h-screen pt-24 px-6 pb-20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-3xl font-bold mb-4">Projects</h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                        Open source contributions and research code.
                    </p>
                </div>


                {/* Featured Research Section */}
                <div className="mb-16">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        Featured Research
                    </h2>
                    <div className="group flex flex-col sm:flex-row sm:items-start gap-6 p-6 -mx-6 rounded-xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 border border-blue-100 dark:border-blue-900/30">
                        {/* Image Thumbnail */}
                        <div className="w-full sm:w-48 aspect-video rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 shrink-0 shadow-sm">
                            <img
                                src="/mobile-vla.png"
                                alt="Mobile VLA Research"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                                    Mobile-VLA Context Adaptation
                                </h3>
                                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-medium">
                                    Research In Progress
                                </span>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                Analyzing context vector adaptation for transforming 7DOF manipulator policies to 2DOF mobile robots. Investigating the "Domain Gap" in action spaces and visual context using RoboVLMs.
                            </p>

                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="px-2 py-1 rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                                    Vision-Language-Action
                                </span>
                                <span className="px-2 py-1 rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                                    Robotics
                                </span>
                                <span className="px-2 py-1 rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                                    Python
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Open Source Projects */}
                <div>
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Open Source
                    </h2>
                    <div className="space-y-2">
                        {repos.map((repo, index) => (
                            <ProjectCard key={repo.id} repo={repo} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
