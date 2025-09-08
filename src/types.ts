export interface ProjectItem {
    type: 'opnesource-contrib' | 'project' | 'blog'  | 'job';
    title: string;
    date: string;
    description: string;
    link?: string;
    isNew?: boolean;
    bulletPoints?: string[];
    tags?: string[];
  }
  
  export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    content: string;
    description: string;
    tag: 'Tech' | 'Life' | 'Other';
    isNew?: boolean;
  }
  
  export interface BlogFrontmatter {
    title: string;
    date: string;
    tag: 'Tech' | 'Life' | 'Other';
    description: string;
  }