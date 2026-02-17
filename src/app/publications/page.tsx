import type { Metadata } from "next";
import PublicationList from "@/components/PublicationList";

export const metadata: Metadata = { title: "Publications" };

export default function Publications() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-navy mb-4">Publications</h1>
      <p className="text-slate-warm mb-2">
        This list updates automatically from my{" "}
        <a
          href="https://orcid.org/0009-0003-5115-3832"
          target="_blank"
          rel="noopener noreferrer"
        >
          ORCID profile
        </a>
        .
      </p>
      <p className="text-sm text-slate-warm mb-10">
        See also:{" "}
        <a
          href='https://ui.adsabs.harvard.edu/search/q=author%3A"kerman%2C+nathaniel"&sort=date+desc'
          target="_blank"
          rel="noopener noreferrer"
        >
          ADS author query
        </a>
      </p>

      <PublicationList />
    </div>
  );
}
