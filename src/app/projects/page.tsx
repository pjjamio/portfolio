import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Paul John Jamio",
  description: "A showcase of custom WordPress sites designed and built by Paul John Jamio.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl">
        Showcase
      </h1>
      <p className="mt-3 max-w-2xl text-neutral-400">
        Custom WordPress builds — Elementor and hand-coded themes with Advanced Custom Fields.
        Every card links to the live site; previews are captured live, so give them a moment to load.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.url} project={p} />
        ))}
      </div>
    </section>
  );
}
