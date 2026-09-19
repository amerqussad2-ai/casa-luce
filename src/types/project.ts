export interface Project {
  slug: string;
  name: string;
  type: string;
  status: string;
  description: string;
  techStack: string[];
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  caseStudyUrl: string;
  liveUrl: string;
  githubUrl?: string;
}
