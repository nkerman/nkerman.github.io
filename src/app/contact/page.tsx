import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

const links = [
  {
    label: "Email",
    href: "mailto:nkerman@astro.umass.edu",
    display: "nkerman@astro.umass.edu",
  },
  {
    label: "GitHub",
    href: "https://github.com/nkerman",
    display: "github.com/nkerman",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nathaniel-kerman-127393153/",
    display: "linkedin.com/in/nathaniel-kerman",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0003-5115-3832",
    display: "0009-0003-5115-3832",
  },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-navy mb-4">Contact</h1>
      <p className="text-lg text-slate-warm mb-10">
        Feel free to reach out &mdash; I&apos;m always happy to discuss
        research, collaboration opportunities, or anything astronomy.
      </p>

      <div className="space-y-6 max-w-md">
        {links.map((link) => (
          <div key={link.label}>
            <p className="text-sm font-medium text-navy mb-1">
              {link.label}
            </p>
            <a
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="text-accent"
            >
              {link.display}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
