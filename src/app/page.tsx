import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";
import { experience, profile } from "@/data/resume";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />

      <Reveal className="mx-auto max-w-5xl px-6 py-16">
        <div className="border-t border-line pt-10">
          <p className="text-sm leading-relaxed text-neutral-400">{profile.summary}</p>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-5xl px-6 pb-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-neutral-100">Featured work</h2>
          <Link href="/projects" className="text-sm text-accent hover:underline">
            All projects →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.url} project={p} />
          ))}
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="mb-8 text-2xl font-semibold text-neutral-100">Experience</h2>
        <ul className="space-y-6">
          {experience.map((job) => (
            <li
              key={job.company}
              className="flex flex-col gap-1 border-l-2 border-line pl-5 transition-colors hover:border-accent/60 sm:flex-row sm:justify-between"
            >
              <div>
                <p className="font-medium text-neutral-100">
                  {job.title} · {job.company}
                </p>
                <p className="text-sm text-neutral-500">{job.location}</p>
              </div>
              <p className="text-sm text-neutral-500">{job.period}</p>
            </li>
          ))}
        </ul>
        <Link href="/about" className="mt-8 inline-block text-sm text-accent hover:underline">
          Read full background →
        </Link>
      </Reveal>
    </>
  );
}
