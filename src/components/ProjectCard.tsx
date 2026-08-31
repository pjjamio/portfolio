import { shot, type Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-black/30"
    >
      <div className="aspect-[4/3] overflow-hidden border-b border-line bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={shot(project.url)}
          alt={`Screenshot of ${project.name}`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium text-neutral-100">{project.name}</h3>
          <span className="text-neutral-500 transition-colors group-hover:text-accent">↗</span>
        </div>
        <p className="text-sm leading-relaxed text-neutral-400">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line px-2.5 py-0.5 text-xs text-neutral-400"
            >
              {s}
            </span>
          ))}
        </div>
        <span className="text-xs text-neutral-600">{project.url.replace(/^https?:\/\//, "")}</span>
      </div>
    </a>
  );
}
