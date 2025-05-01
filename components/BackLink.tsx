import Link from "next/link";

interface Parts {
  href: string;
  blog_category: string;
}

export default function BackLink({ href, blog_category }: Parts) {
  return (
    <Link href={href} className="text-indigo-900 hover:underline text-sm">
      ← Back to {blog_category}
    </Link>
  );
}