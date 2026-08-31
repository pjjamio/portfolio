import Image from "next/image";
import Link from "next/link";
import { profile, skills } from "@/data/resume";

export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center sm:py-32">
      <Image
        src="/paul-john-jamio.jpg"
        alt={profile.name}
        width={160}
        height={160}
        priority
        className="mb-8 h-40 w-40 rounded-full border border-line object-cover object-top"
      />
      <h1 className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-6xl">
        {first} <span className="text-accent">{rest.join(" ")}</span>
      </h1>
      <p className="mt-4 text-lg text-neutral-400">
        <span className="text-accent">&lt;/&gt;</span> {profile.role} <span className="text-accent">⚡</span>
      </p>

      <div className="mt-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Skills</p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full bg-accent/90 px-3 py-1 text-xs font-medium text-ink"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm">
        <Link
          href="/projects"
          className="rounded-full bg-accent px-5 py-2 font-medium text-ink transition-opacity hover:opacity-90"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-line px-5 py-2 font-medium text-neutral-200 transition-colors hover:border-accent/60"
        >
          Contact Me
        </Link>
        <a
          href="/resume.pdf"
          className="rounded-full border border-line px-5 py-2 font-medium text-neutral-200 transition-colors hover:border-accent/60"
        >
          Download Resume
        </a>
      </div>

      <p className="mt-8 text-sm text-neutral-500">
        <a href={`mailto:${profile.email}`} className="hover:text-neutral-300">
          ✉ {profile.email}
        </a>
      </p>
    </section>
  );
}
