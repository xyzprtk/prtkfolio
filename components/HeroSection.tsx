import ExperienceContent from "./ExperienceContent";
import ProfileCard from "./ProfileCard";
import BannerImage from "./BannerImage";
import { Trocchi } from "next/font/google";
import SectionBorder from "./SectionBorder";

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veniam voluptatum dolores beatae quis deleniti dolorum expedita eligendi corporis similique repellendus optio soluta quae, ullam recusandae quam, maxime in delectus unde. Eos, voluptate tempore. Commodi magnam nostrum obcaecati dolorem nam, quae nihil earum explicabo ab ullam optio corrupti tenetur, quisquam alias, a voluptas quasi debitis aliquid similique quam. Aut a quae itaque quia vitae, numquam perferendis. Dolorum et minima maiores! Doloribus quo ut reiciendis officia eum? Quibusdam odio cum eveniet ex aut earum necessitatibus voluptatum ut sit eligendi rem, repellendus molestiae provident deleniti a vero laborum quam. Earum deleniti exercitationem quis ipsa! Officia fugit, aperiam dolores molestiae non ullam voluptate nobis consequatur sequi autem magnam laudantium molestias tempore velit, architecto placeat officiis nemo culpa qui totam. Eligendi dolores officia labore magnam sunt molestias nam autem quidem minima nobis similique excepturi culpa, magni blanditiis, veniam iste obcaecati sit facere id fugiat modi pariatur tempora facilis totam. Aliquid, blanditiis vel quod officia fuga optio voluptates ratione est. Animi non, sapiente dignissimos laboriosam quas quos impedit obcaecati tempore ratione facere. Illo, reprehenderit nesciunt alias consectetur commodi, sapiente illum ducimus delectus aliquam laborum quia praesentium assumenda mollitia. Delectus accusamus sit cumque cum dolor inventore eaque eum, earum ipsa dolorem quos expedita iure maiores dicta voluptates, distinctio corporis quis numquam facere dolore. Ad expedita minus itaque error accusantium et laudantium consectetur perspiciatis possimus facilis obcaecati culpa alias sapiente laboriosam ipsum placeat, eligendi beatae assumenda cupiditate eum ea doloribus incidunt. Ratione, quos! Veniam optio veritatis, atque recusandae omnis alias quam quo, cum ipsum hic provident nobis odit laborum minima nam eius exercitationem? Nisi porro ab voluptatem accusantium, dolores sunt, numquam quos, dolore facilis suscipit maxime? In reiciendis incidunt quisquam, repudiandae minus odit distinctio iusto illum, molestiae quasi tempore ut error, nulla autem. Voluptates rem, similique architecto consequuntur earum aspernatur quam deleniti vel totam. Delectus, quos eaque! Porro odio asperiores itaque soluta est! Itaque sapiente perferendis quas tenetur excepturi accusamus libero quis ut facilis? At vitae nostrum neque. Sequi eveniet quae excepturi labore totam, iste laborum quos, sed assumenda autem cum aliquam dolore architecto facere iure minus fugiat eius consequuntur veritatis soluta asperiores. Facere in aspernatur voluptas omnis alias aut veritatis porro iure. Quos eligendi cum dignissimos facere! Ratione corrupti dicta aliquid totam dolor. Molestias praesentium eos qui nihil laborum suscipit, maxime nulla! Voluptates enim id corporis veniam deserunt et qui sit magnam porro? Necessitatibus inventore quod dicta perspiciatis adipisci architecto! Eum suscipit quae at. Incidunt placeat optio odit! Aperiam voluptas necessitatibus velit dolorem amet exercitationem, facere expedita in? Ullam obcaecati ducimus molestias mollitia totam dicta repudiandae ex maxime non quam soluta ipsum omnis accusamus similique esse, aut quae saepe numquam magni illum aliquam vel minus! Numquam consequuntur at sit nisi suscipit, minus provident illo nesciunt velit sequi non a voluptatum assumenda commodi dicta eos minima, consectetur optio eius ipsam, error corporis neque? Asperiores possimus repellat obcaecati dolore! Laborum molestiae vero error est architecto numquam minima, hic placeat! Quia dolores modi explicabo rem dolore labore architecto, numquam reprehenderit, ducimus laborum nemo ipsa inventore voluptatibus maiores hic ipsam qui voluptatem aut cumque autem! Earum consectetur fugit dolorum. Qui officiis consequuntur excepturi, reprehenderit placeat voluptatibus deserunt? Vero molestias dolor, possimus iste optio animi ab praesentium alias perspiciatis ullam architecto error tenetur ducimus tempora sunt autem officiis sint, saepe fuga aut excepturi esse cumque eos. Odit expedita modi reprehenderit ad qui? Nesciunt itaque cumque voluptatem architecto esse.
            </section>
        </main>
    );
}