import Link from "next/link";
import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-10 text-sm text-neutral-500 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-6">
          <a href={`mailto:${profile.email}`} className="hover:text-neutral-200">
            Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-200"
          >
            GitHub
          </a>
          <Link href="/contact" className="hover:text-neutral-200">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
