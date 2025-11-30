export interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    updated_at: string;
}

export async function getRepositories(username: string): Promise<Repository[]> {
    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, {
            next: { revalidate: 3600 }, // Revalidate every hour
        });

        if (!res.ok) {
            throw new Error('Failed to fetch repositories');
        }

        const repos = await res.json();
        // Filter out forks if desired, or keep them. For now, keeping everything.
        return repos;
    } catch (error) {
        console.error("Error fetching repos:", error);
        return [];
    }
}
