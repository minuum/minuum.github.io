import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function AboutPage() {
    return (
        <main className="flex-1 py-12 px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">About Me</h1>

                <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
                    <p>
                        I am a senior undergraduate student majoring in Computer Science and Robotics.
                        My research interests lie at the intersection of <strong>Computer Vision</strong> and <strong>Robotics</strong>,
                        specifically focusing on Vision-Language-Action (VLA) models and their application in mobile manipulation tasks.
                    </p>
                </div>

                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-2">
                        <FaGraduationCap className="text-primary" /> Education
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-semibold text-lg">University Name</h3>
                                <span className="text-sm text-gray-500">2020 - Present</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">B.S. in Computer Science</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-2">
                        <FaBriefcase className="text-primary" /> Experience
                    </h2>
                    <div className="space-y-8">
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-semibold text-lg">Undergraduate Researcher</h3>
                                <span className="text-sm text-gray-500">Sep 2024 - Present</span>
                            </div>
                            <p className="text-primary text-sm mb-2">Robotics & AI Lab</p>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                                <li>Conducting research on adapting VLA models for 2DOF mobile robots.</li>
                                <li>Developing efficient context vector extraction methods.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
