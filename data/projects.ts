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
      image: "/amex-scorecard.png",
      techStack: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
      slug: "amex-scorecard", // matches content/projects/amex-scorecard.mdx
      githubLink: "https://github.com/xyzprtk/amex-model"
    },
    {
      title: "Olist Customer Insights",
      description: "A comprehensive analysis of the Brazilian E-commerce Public Dataset using Python, Pandas, and RFM segmentation to uncover actionable customer behaviors.",
      image: "/olist-analysis.png",
      techStack: ["Python", "Pandas", "RFM"],
      slug: "ecommerce-analysis",
      githubLink: "https://github.com/xyzprtk/olist-customer-insights"
    },
    {
      title: "Tech Minds: Analyzing Mental Health Trends in Technology Professionals",
      description: "A comprehensive analysis of the 2014 Mental Health in Tech Survey using Python, Pandas, and Scikit-Learn to uncover employer attitudes and predict treatment-seeking behavior.",
      image: "/tech-minds.png",
      techStack: ["Python", "Pandas", "Scikit-learn"],
      slug: "tech-minds",
      githubLink: "https://github.com/xyzprtk/MindFulTech"
    }
  ];