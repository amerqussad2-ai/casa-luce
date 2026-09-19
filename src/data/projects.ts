import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "casa-luce",
    name: "Casa Luce",
    type: "Multi-page Front-end Restaurant Website",
    status: "Completed + Deployed v1",
    description:
      "A responsive multi-page website for a fictional modern Italian restaurant in Dubai Marina, built with Next.js, React, TypeScript and Tailwind CSS. The project combines premium editorial UI, accessibility-conscious interactions, responsive imagery, forms, SEO and a complete deployed user experience.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    image: {
      src: "/images/casa-luce/Casa_Luce_Gallery_Desktop.png",
      width: 1440,
      height: 900,
      alt: "Casa Luce restaurant website gallery page shown on desktop",
    },
    caseStudyUrl: "/work/casa-luce",
    liveUrl: "https://casa-luce-nine.vercel.app",
    githubUrl: "https://github.com/amerqussad2-ai/casa-luce",
  },
  {
    slug: "tatweer-employment",
    name: "Tatweer Employment",
    type: "Bilingual Recruitment Web Application",
    status: "Deployed",
    description:
      "Tatweer Employment is a bilingual Arabic/English recruitment web application for a UAE employment services company, featuring job listings, CV and application submissions, employer recruitment requests, and a secure Admin area.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Vite",
      "Cloudflare Workers",
    ],
    image: {
      src: "/images/tatweer/Tatweer_Jobs_Hero_Desktop.png",
      width: 1352,
      height: 609,
      alt: "Tatweer Employment job listings hero page shown on desktop",
    },
    caseStudyUrl: "/work/tatweer-employment",
    liveUrl: "https://tatweer-employment.amerqussad2.workers.dev",
  },
];
