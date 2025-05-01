export interface PostMeta {
    title: string;
    date: string;
    category: string;
    slug: string;
    summary: string;
  }
  
  export interface Post {
    meta: PostMeta;
    content: string;
  }
  