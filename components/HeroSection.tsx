import ExperienceContent from "./ExperienceContent";
import ProfileCard from "./ProfileCard";
import BannerImage from "./BannerImage";
import { Trocchi } from "next/font/google";
import SectionBorder from "./SectionBorder";
import GithubGraph from "./GithubContributions";
import TechStack from "./TechStack";
import ContactForm from "./ContactForm";
import Reachout from "./ReachMeOut";
import Footer from "./Footer";

const trocchi = Trocchi({
    variable: "--font-trocchi",
    subsets: ["latin"],
    weight: ["400"],
});

export default function HeroSection() {
    return (
        <main className="flex min-h-screen w-full max-w-4xl flex-col gap-10 px-6 py-10 bg-background/30">
            <section className={trocchi.className}>
                <BannerImage />
                <ProfileCard />
                <SectionBorder className="mt-3 mb-6" />

                <div className="ml-4 mt-4 mr-4 text-left text-md sm:text-base text-muted-foreground">


                    <p>
  I do data science end-to-end. <strong>Exploratory analysis</strong>, <strong>feature engineering</strong>, <strong>model development</strong>, <strong>validation</strong>, <strong>deployment</strong>.
  <br></br>
  <br></br>
  My work centers on <strong>credit risk modeling</strong>, <strong>predictive analytics</strong>, and <strong>machine learning pipelines</strong>. I work with structured and unstructured data, build statistical models, train classifiers and regressors, tune hyperparameters, evaluate performance.
  <br></br>
  {/* <br></br> */}
  Currently expanding into <strong>LLM applications</strong> and <strong>RAG systems</strong>. Working with embeddings, vector databases, prompt engineering, retrieval augmentation.
  <br></br>
  <br></br>
  I write documentation and technical posts on methods, implementations, and results. More about my writings <a href="/blog" className="dark:text-white/80 text-black/80 font-bold">here</a>.
                    </p>
                </div>
                <SectionBorder className="mt-6" />
                <div className="mt-6">
                    <ExperienceContent />
                </div>
                <SectionBorder className="mt-6" />
                <div className="mt-6">
                    <GithubGraph />
                </div>
                <SectionBorder className="mt-6" />
                <div className="mt-6">
            <TechStack/>
                </div>
            <SectionBorder className="mt-6" />
            <ContactForm />
            <SectionBorder className="mt-6" />
            <div className="mt-6">
                <Reachout />
            </div>
            <SectionBorder className="mt-6" />
            <div className="mb-6">
                <Footer />
            </div>
            </section>

        </main>
    );
}