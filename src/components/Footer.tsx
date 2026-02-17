export default function Footer() {
  return (
    <footer className="border-t border-border bg-white mt-auto">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-warm">
          <p>&copy; {new Date().getFullYear()} Nathaniel Kerman</p>
          <div className="flex gap-5">
            <a
              href="https://github.com/nkerman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nathaniel-kerman-127393153/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href="https://orcid.org/0009-0003-5115-3832"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              ORCID
            </a>
            <a
              href="mailto:nkerman@astro.umass.edu"
              className="hover:text-accent"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
