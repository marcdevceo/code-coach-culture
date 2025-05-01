import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostMeta } from '@/types/post';

const contentDir = path.join(process.cwd(), 'content');

export function getAllPosts(): PostMeta[] {
  const categories = fs.readdirSync(contentDir);

  const posts: PostMeta[] = [];

  categories.forEach((category) => {
    const categoryPath = path.join(contentDir, category);
    const files = fs.readdirSync(categoryPath);

    files.forEach((filename) => {
      const filePath = path.join(categoryPath, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      posts.push({
        ...(data as PostMeta),
        category,
      });
    });
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
