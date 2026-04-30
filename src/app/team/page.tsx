import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { team } from "@/data/site";

export const metadata = {
  title: "Leadership Team | FinLever Consulting",
};

export default function TeamPage() {
  return (
    <main>
      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Leadership Team"
              title="Meet the Team"
              body="The leadership team combines deep domain expertise, institutional experience, and a technology-driven approach to deliver strategic financial solutions and build future-ready organizations."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.07}>
                <GlassCard className="h-full overflow-hidden p-0">
                  <div className="relative aspect-[4/4.35] overflow-hidden rounded-t-2xl bg-slate-900">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover grayscale transition duration-500 hover:grayscale-0"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                      {member.role}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">
                      {member.name}
                    </h2>
                    <div className="mt-5 grid gap-4 text-sm leading-7 text-slate-400">
                      {member.bio.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
