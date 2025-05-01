import { getAllPosts } from "@/lib/getAllPosts";
import Link from "next/link";

export default function LeadershipLogsPage() {
  const posts = getAllPosts().filter((post) => post.category === "mindset-motivation");

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 to-pink-400 text-gray-800 px-6 py-20 font-sans ">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
      🧠 Mindset & Motivation
      </h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/mindset-motivation/${post.slug}`}
              className="block p-6 rounded-xl bg-slate-800 hover:bg-slate-900 text-gray-200 font-bold shadow-md transition-all"
            >
              <h2 className="text-xl font-semibold hover:underline">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm">{post.date}</p>
              <p className="text-gray-100">{post.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
