import { getPostData, getSortedPostsData } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { FaCalendar, FaTag, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

// Required for static export
export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostData(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-24 px-6 pb-20">
            <article className="max-w-3xl mx-auto">
                <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-8 transition-colors">
                    <FaArrowLeft /> Back to Blog
                </Link>

                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
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

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <p className="text-xl text-gray-300">
                        {post.description}
                    </p>
                </header>

                <div className="prose prose-invert prose-cyan max-w-none">
                    {/* In a real app, use a markdown renderer like react-markdown or next-mdx-remote */}
                    <div className="whitespace-pre-wrap font-sans text-gray-300 leading-relaxed">
                        {post.content}
                    </div>
                </div>
            </article>
        </main>
    );
}
