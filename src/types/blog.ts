export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  image: string;
  category: string;
  author?: string;
  readTime?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  color: string;
}