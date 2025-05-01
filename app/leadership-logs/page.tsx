import { getAllPosts } from "@/lib/getAllPosts";
import Link from "next/link";

export default function LeadershipLogsPage() {
  const posts = getAllPosts().filter((post) => post.category === "leadership-logs");

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-200 to-yellow-400 text-gray-800 px-6 py-20 font-sans ">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
      🧭 Leadership Logs
      </h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/leadership-logs/${post.slug}`}
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
