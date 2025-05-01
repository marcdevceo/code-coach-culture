import { notFound } from 'next/navigation';
import { MDXContent } from '@/components/MDXContent';
import { PostMeta } from '@/types/post';
import matter from 'gray-matter';
import fs from 'fs/promises';
import path from 'path';
import BackLink from '@/components/BackLink';

export async function generateStaticParams() {
  const categoryDir = path.join(process.cwd(), 'content', 'dev-diaries');
  const filenames = await fs.readdir(categoryDir);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    'content',
    'dev-diaries',
    `${slug}.mdx`
  );

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { content, data } = matter(fileContents);
    const post = data as PostMeta;

    return (
      <article className="min-h-screen bg-gradient-to-br from-emerald-300 to-emerald-500 text-gray-800 p-6 font-sans ">
        <div className="mt-5 mb-10">
        <BackLink      
          href="/dev-diaries"
          blog_category="Dev Diaries"
        />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-10">{post.title}</h1>
        <p className="text-sm text-end text-gray-600">{post.date}</p>
        <div className='mt-5 mb-10'>
            <MDXContent source={content} />
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}



