import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';
import { FaCalendar, FaTag } from 'react-icons/fa';

export default function BlogPage() {
    const posts = getSortedPostsData();

    return (
        <main className="min-h-screen pt-24 px-6 pb-20">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            Insights
                        </span> & Thoughts
                    </h1>
                    <p className="text-gray-400">
                        Sharing my journey and research in AI and Robotics.
                    </p>
                </div>

                <div className="space-y-8">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                            <article className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300">
                                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                                    <div className="flex items-center gap-1">
                                        <FaCalendar className="text-cyan-400" />
                                        <time>{post.date}</time>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {post.tags?.map(tag => (
                                            <span key={tag} className="px-2 py-0.5 rounded-full bg-white/10 text-xs">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-gray-400">
                                    {post.description}
                                </p>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
