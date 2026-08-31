import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { education, experience, profile, skills } from "@/data/resume";

export const metadata: Metadata = {
  title: "About — Paul John Jamio",
  description: profile.summary,
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl">About</h1>
      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
        <Image
          src="/paul-john-jamio.jpg"
          alt={profile.name}
          width={140}
          height={140}
          className="h-[140px] w-[140px] shrink-0 rounded-xl border border-line object-cover object-top"
        />
        <p className="leading-relaxed text-neutral-400">{profile.summary}</p>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-line px-3 py-1 text-xs text-neutral-300"
          >
            {s}
          </span>
        ))}
      </div>

      <Reveal className="mt-16">
      <h2 className="text-xl font-semibold text-neutral-100">Experience</h2>
      <div className="mt-6 space-y-10">
        {experience.map((job) => (
          <div key={job.company} className="border-l-2 border-line pl-5 transition-colors hover:border-accent/60">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <p className="font-medium text-neutral-100">
                {job.title} · {job.company}
              </p>
              <p className="text-sm text-neutral-500">{job.period}</p>
            </div>
            <p className="text-sm text-neutral-500">{job.location}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-neutral-400">
              {job.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </Reveal>

      <Reveal className="mt-16">
      <h2 className="text-xl font-semibold text-neutral-100">Education</h2>
      <div className="mt-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
          <p className="font-medium text-neutral-100">{education.school}</p>
          <p className="text-sm text-neutral-500">{education.period}</p>
        </div>
        <p className="text-sm text-neutral-500">{education.location}</p>
        <p className="mt-2 text-sm text-neutral-400">{education.degree}</p>
      </div>
      </Reveal>

      <div className="mt-16 rounded-xl border border-line bg-surface p-6 text-sm text-neutral-400 transition-colors hover:border-accent/60">
        <p className="font-medium text-neutral-100">Get in touch</p>
        <p className="mt-2">
          {profile.location}
          <br />
          {profile.phone}
          <br />
          <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
            {profile.email}
          </a>
        </p>
      </div>
    </section>
  );
}
