import type { Metadata } from "next";
import { profile } from "@/data/resume";

export const metadata: Metadata = {
  title: "Contact — Paul John Jamio",
  description: "Get in touch with Paul John Jamio for custom WordPress development work.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl">Contact me</h1>
      <p className="mt-3 text-neutral-400">
        Have a project or a role in mind? Send a message below, or email{" "}
        <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
          {profile.email}
        </a>
        .
      </p>

      {/* Netlify Forms: handled automatically on deploy. */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/contact?sent=1"
        className="mt-10 space-y-5"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>

        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-neutral-400">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-neutral-100 outline-none focus:border-accent/60"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-neutral-400">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-neutral-100 outline-none focus:border-accent/60"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm text-neutral-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-neutral-100 outline-none focus:border-accent/60"
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-accent px-6 py-2 font-medium text-ink transition-opacity hover:opacity-90"
        >
          Send message
        </button>
      </form>

      <div className="mt-12 border-t border-line pt-6 text-sm text-neutral-500">
        <p>{profile.location}</p>
        <p>{profile.phone}</p>
        <p>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-neutral-300">
            {profile.github.replace(/^https?:\/\//, "")}
          </a>
        </p>
      </div>
    </section>
  );
}
