import Image from "next/image";
import { ContainerTextFlip } from "./ui/container-text-flip";
import ExperienceContent from "./ExperienceContent";

export default function HeroSection() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-10 px-6 py-10 pt-32">
        <section className="flex flex-1 items-center justify-center">
          <div className="w-full rounded-[32px] border border-border/60 bg-card/70 p-10 shadow-[0_30px_120px_rgba(0,0,0,0.7)] backdrop-blur-xl">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="relative h-32 w-32">
                  <Image
                    src="/profile.png"
                    alt="Profile avatar"
                    fill
                    className="rounded-full object-cover object-top"
                    priority
                  />
                  <Image
                    src="/india.png"
                    alt="India flag"
                    width={48}
                    height={32}
                    className="absolute left-0 top-0 -translate-y-1 -translate-x-1 rounded-sm border-none ring ring-offset-2 ring-offset-transparent"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                      Pratheek Nistala
                    </h1>
                    <span>
                    <Image src="/tick.svg" alt="Badge" width={24} height={24} />
                    </span>
                  </div>
                  <ContainerTextFlip
                    words={["Data Engineer","MLOps Engineer","ML Engineer","Data Analyst","Linux"]}
                    interval={3000}
                    animationDuration={700}
                    className="text-sm text-muted-foreground"
                    textClassName="text-sm text-muted-foreground"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nobis pariatur cum commodi dolore debitis in numquam rem nesciunt sunt sapiente, tempora aut ab ipsum iste unde mollitia id voluptate saepe adipisci similique laudantium explicabo? Provident reprehenderit autem sint atque explicabo quasi corporis fugiat eius sed illum, omnis nihil architecto, maxime eum laudantium magni quo reiciendis officia. Ratione deleniti facilis commodi, facere numquam cum necessitatibus animi. Voluptate reiciendis error quibusdam non quis itaque, accusantium architecto labore atque voluptas nesciunt ipsam, ipsum quos. Necessitatibus exercitationem officia corrupti dolorum, ipsa nihil vel possimus beatae officiis blanditiis voluptas corporis ad asperiores reiciendis, eos harum pariatur. Iure quibusdam doloribus quo, vel et harum placeat architecto, unde, dignissimos nulla sunt consectetur minima vero quas! Incidunt quo ex eveniet reiciendis corrupti suscipit nemo distinctio ducimus pariatur ipsum inventore accusantium rem maiores facere cumque nihil doloremque, totam architecto dicta dolore impedit adipisci mollitia unde. Ipsum, exercitationem velit vel maxime reiciendis aspernatur dolore repudiandae, tempore eius molestiae voluptatem! Culpa officia ipsum nam quis consequuntur aperiam earum cupiditate libero deserunt. Error recusandae veritatis animi atque autem eos ut voluptatibus mollitia nostrum ipsam alias fugit accusantium adipisci, earum aliquam id eveniet hic excepturi assumenda? Velit dolores fugiat temporibus itaque repellat facere deleniti voluptatum consequuntur? Doloribus molestiae tenetur voluptate odit libero vitae reprehenderit quae quam doloremque recusandae rerum placeat quasi ut magni, non beatae consequatur earum praesentium voluptatem soluta provident dolor nihil natus iusto. Dicta quod voluptates voluptatum dolor asperiores quo facere ducimus autem mollitia, magni, rem quisquam numquam! Dolorum voluptatem distinctio placeat voluptatum veniam consequatur quisquam magni tempora saepe sapiente, ad at unde cumque quasi sequi earum et, recusandae, nobis ab. Fugit omnis praesentium aperiam suscipit ex itaque pariatur sapiente, necessitatibus quos maxime nihil numquam dolore cum eos recusandae optio tempora autem id ratione illum maiores. Repellat quaerat ea similique dolore iure inventore illo minus dolorem pariatur beatae libero explicabo aspernatur, assumenda dicta eaque reiciendis, nam, magni mollitia? Consectetur in nulla autem quaerat minus assumenda accusantium placeat! Sint sapiente voluptatem fuga iusto corporis eveniet. Reiciendis similique et voluptatibus! Quaerat accusamus reiciendis, ab dicta cum veniam minima rerum debitis fuga vel sequi! Qui repellendus eos sed enim, cumque possimus vero laborum, recusandae ipsam, deserunt suscipit labore quam ratione commodi assumenda voluptatum quis ipsum exercitationem atque accusamus repellat? Quia veritatis consectetur accusantium dolorum neque. Velit dolores sed sunt dolore nam rem vero fugiat obcaecati, quos omnis reprehenderit laborum iusto unde praesentium sequi, ab officiis est dignissimos enim nihil ipsa. Maxime, quasi illum ducimus quisquam id dolor officiis, reiciendis, nobis officia blanditiis nulla numquam! Minus voluptatem quisquam earum cumque commodi vel ex saepe, provident rerum ea, impedit, quibusdam porro autem ipsam! Sapiente consequuntur dignissimos soluta facilis similique pariatur quia dicta unde! Optio architecto a corporis eius repudiandae voluptatum atque commodi assumenda obcaecati! Doloremque quisquam quibusdam dicta. Odio adipisci nesciunt sint eius culpa error ratione porro blanditiis modi debitis omnis laudantium eum sequi et velit ab, dignissimos ea earum distinctio in animi. Quam maxime quo, dolor quas adipisci eligendi laudantium facere et officiis magni quod assumenda consequuntur dolorem? Perferendis ab similique molestias dolores maxime odit dolorem eveniet provident libero est distinctio voluptatibus harum assumenda suscipit adipisci beatae reprehenderit sit, officiis numquam sint velit reiciendis vitae nam in. Voluptatum, velit itaque. Fugit a fuga sunt magni deleniti ipsam magnam. Earum error optio, animi, molestiae laudantium officiis illum labore iusto expedita similique provident omnis assumenda autem blanditiis obcaecati deleniti quis aliquam! Obcaecati, numquam.
              </p>
              <ExperienceContent />
      </main>
  );
}