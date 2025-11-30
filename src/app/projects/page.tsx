import { getRepositories } from '@/lib/github';
import ProjectCard from '@/components/ProjectCard';

export default async function ProjectsPage() {
    const repos = await getRepositories('minuum');

    return (
        <main className="min-h-screen pt-24 px-6 pb-20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            Open Source
                        </span> Projects
                    </h1>
                    <p className="text-gray-400 max-w-2xl">
                        A collection of my work in AI, Robotics, and VLA research.
                        Explore the code on GitHub.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.map((repo, index) => (
                        <ProjectCard key={repo.id} repo={repo} index={index} />
                    ))}
                </div>
            </div>
        </main>
    );
}
