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

                <div className="space-y-2">
                    {repos.map((repo, index) => (
                        <ProjectCard key={repo.id} repo={repo} index={index} />
                    ))}
                </div>
            </div>
        </main>
    );
}
