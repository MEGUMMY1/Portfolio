export interface ProjectDetail {
  id: number;
  title: string;
  details: {
    serviceDescription: string;
    features: string[];
    technologies: string[];
    contributions: string[];
    troubleshooting?: string;
    images: string[];
  };
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github?: string;
  link?: string;
  figma?: string;
}
