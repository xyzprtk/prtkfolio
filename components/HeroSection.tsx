import ExperienceContent from "./ExperienceContent";
import ProfileCard from "./ProfileCard";
import BannerImage from "./BannerImage";
import { Trocchi } from "next/font/google";
import SectionBorder from "./SectionBorder";
import GithubGraph from "./GithubContributions";
import TechStack from "./TechStack";

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
                        I turn messy datasets into intelligent systems. My focus is on <a className="dark:text-white/80 text-black/80 font-bold">Analytics, Machine Learning, and Credit Risk Modeling</a>, backed by a strong engineering foundation in <a className="dark:text-white/80 text-black/80 font-bold">Linux, Backend, and Full-Stack Development</a> that lets me take models from exploration all the way through to production.
                        <br />
                        <br />
                        Currently diving into <a>
                            </a><a className="dark:text-white/80 text-black/80 font-bold">LLM Engineering, RAG Systems, and MLOps</a> because I want to build solutions that leverage the latest in AI.
                        <br />
                        <br />
                        When I'm not building, I'm writing. I share what I learn through <a href="/blog" className="dark:text-white/80 text-black/80 font-bold">blogs</a> on code, technology, AI, Linux, and everything in between.

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
            </section>
            <TechStack/>
        </main>
    );
}