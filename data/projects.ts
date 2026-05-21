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
      title: "Meridian - End to End Credit Risk Scorecard Apllication",
      description: "A full-stack credit risk scorecard platform using Next.js and FastAPI that evaluates borrower risk through machine learning-driven scoring.",
      image: "/projects/meridian.png",
      techStack: ["Python", "XGBoost", "Pandas", "Scikit-learn","Machine Learning", "Credit Risk", "FastAPI", "Next.js", "Finance"],
      slug: "credit-risk-scorecard", // matches content/projects/amex-scorecard.mdx
      githubLink: "https://github.com/xyzprtk/meridan"
    },
    {
      title: "Olist Customer Insights",
      description: "A comprehensive analysis of the Brazilian E-commerce Public Dataset using Python, Pandas, and RFM segmentation to uncover actionable customer behaviors.",
      image: "/projects/olist-analysis.png",
      techStack: ["Python", "Pandas", "RFM"],
      slug: "ecommerce-analysis",
      githubLink: "https://github.com/xyzprtk/olist-customer-insights",
      liveLink: "https://olist-customer-insights.vercel.app/"
    },
    {
      title: "Tech Minds: Analyzing Mental Health Trends in Technology Professionals",
      description: "A comprehensive analysis of the 2014 Mental Health in Tech Survey using Python, Pandas, and Scikit-Learn to uncover employer attitudes and predict treatment-seeking behavior.",
      image: "/projects/tech-minds.png",
      techStack: ["Python", "Pandas", "Scikit-learn"],
      slug: "tech-minds",
      githubLink: "https://github.com/xyzprtk/MindFulTech"
    },
    {
      title: "x-reply: Generate contextual, human-sounding replies for X (Twitter) posts with AI.",
      description: "A Chrome extension that generates contextual, human-sounding replies for X (Twitter) posts using AI.",
      image: "/projects/x-reply.png",
      techStack: ["Python", "Chrome Extension", "OpenRouter","OpenAI", "Mistral-7B-Instruct"],
      slug: "x-reply",
      githubLink: "https://github.com/xyzprtk/x-reply"
    },
    {
      title: "ghinit: Create GitHub repositories and bootstrapping the current directory without leaving the terminal.",
      description: "Python CLI for creating GitHub repositories and bootstrapping the current directory without leaving the terminal.",
      image: "/projects/ghinit.png",
      techStack: ["Python", "CLI", "GitHubActions", "PyPi","Git","Click", "Questionary"],
      slug: "ghinit",
      githubLink: "https://github.com/xyzprtk/ghinit",
      liveLink: "https://pypi.org/project/ghinit/"
    }
  ];