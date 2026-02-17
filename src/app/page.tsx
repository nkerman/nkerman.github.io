import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Hero */}
      <section className="mb-16 flex flex-col sm:flex-row items-start gap-8">
        <Image
          src="/images/headshot.png"
          alt="Nathaniel Kerman"
          width={180}
          height={225}
          className="rounded-lg border border-border shrink-0"
          priority
        />
        <div>
          <h1 className="text-4xl font-bold text-navy mb-3">
            Nathaniel Kerman
          </h1>
          <p className="text-xl text-slate-warm mb-6">
            PhD Student in Astronomy &middot; University of Massachusetts Amherst
          </p>
          <p className="text-lg text-slate-warm leading-relaxed max-w-2xl">
            I study exoplanet and brown dwarf formation using data from JWST,
            ALMA, and other observatories. My work sits at the intersection of observational astronomy,
            instrumentation, and scientific software development.
          </p>
        </div>
      </section>

      {/* Current Research */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-navy mb-4">
          Current Research
        </h2>
        <div className="bg-bg-alt rounded-lg p-6 border border-border">
          <h3 className="text-lg font-medium text-navy mb-2">
            Planetary Mass Object Formation
          </h3>
          <p className="text-slate-warm leading-relaxed">
            Using JWST near- and mid-infrared observations combined with ALMA
            millimeter data to study the formation and early evolution of
            substellar objects - both companions and free-floating "rogue" objects.
            formation pathways.
          </p>
          <Link
            href="/research"
            className="inline-block mt-4 text-accent font-medium"
          >
            Learn more about my research and past work &rarr;
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-2xl font-semibold text-navy mb-4">Explore</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              href: "/about",
              title: "About Me",
              desc: "Background, education, and experience",
            },
            {
              href: "/publications",
              title: "Publications",
              desc: "Journal articles, ISRs, and conference contributions",
            },
            {
              href: "/cv",
              title: "CV",
              desc: "Full curriculum vitae",
            },
            {
              href: "/contact",
              title: "Contact",
              desc: "Get in touch",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block p-5 rounded-lg border border-border hover:border-accent transition-colors no-underline hover:no-underline group"
            >
              <h3 className="font-medium text-navy group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-warm mt-1">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
