// data/projects.ts
export interface Project {
    title: string;
    description: string;
    image: string;
    techStack: string[];
    slug: string; // This matches the MDX filename
    githubLink?: string;
    liveLink?: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Amex Scorecard Modelling",
      description: "A comprehensive credit risk model utilizing the AMEX dataset to predict default probabilities with high accuracy.",
      image: "/dnb.png", // specific image for this project
      techStack: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
      slug: "amex-scorecard", // matches content/projects/amex-scorecard.mdx
      githubLink: "https://github.com/xyzprtk/amex-model",
    },
    // Add more projects here
  ];