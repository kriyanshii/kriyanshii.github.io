export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  type: 'opnesource-contrib' | 'project' | 'blog' | 'job';
  title: string;
  date: string;
  description: string;
  role?: string;
  link?: string;
  isNew?: boolean;
  bulletPoints?: string[];
  tags?: string[];
  highlights?: string[];
  stack?: string[];
  links?: ProjectLink[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  description: string;
  tag: 'Tech' | 'Life' | 'Other';
  ogImage?: string;
  isNew?: boolean;
}

export interface BlogFrontmatter {
  title: string;
  date: string;
  tag: 'Tech' | 'Life' | 'Other';
  description: string;
  ogImage?: string;
}
