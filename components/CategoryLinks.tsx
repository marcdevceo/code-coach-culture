import { categoryProps } from "@/content/data/categories";
import Link from "next/link";

export default function CategoryLinks() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-24">
      {Object.entries(categoryProps).map(([title, {emoji, color, link }]) => (
        <Link
          href={link}
          key={title}
        >
          <div className={`rounded-xl p-6 bg-gradient-to-br ${color} text-gray-900 font-bold text-center shadow-lg transform hover:scale-105 transition-all`}
          >
            <div className="text-3xl mb-2">{emoji}</div>
            <div className="text-xl">{title}</div>
          </div>
        </Link>
      ))}
    </section>
  );
}