import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';
import { FaCalendar } from 'react-icons/fa';

export default function BlogPage() {
    const posts = getSortedPostsData();

    return (
        <main className="flex-1 py-12 px-6">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12 border-b border-gray-100 dark:border-gray-800 pb-8">
                    <h1 className="text-3xl font-bold mb-4">Blog</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Thoughts on AI, Robotics, and Research.
                    </p>
                </div>

                <div className="space-y-10">
                    {posts.map((post) => (
                        <article key={post.slug} className="group">
                            <Link href={`/blog/${post.slug}`} className="block">
                                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                                    <time>{post.date}</time>
                                    <span>•</span>
                                    <div className="flex gap-2">
                                        {post.tags?.map(tag => (
                                            <span key={tag} className="text-primary bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-full text-xs">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {post.description}
                                </p>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
