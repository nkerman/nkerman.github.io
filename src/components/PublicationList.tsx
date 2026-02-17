"use client";

import publications from "@/data/publications.json";

interface Publication {
  title: string;
  year: string;
  journal: string;
  type: string;
  doi: string | null;
  bibcode: string | null;
  adsUrl: string | null;
}

const typeOrder = [
  "Journal Articles",
  "Instrument Science Reports",
  "Conference Papers",
  "Conference Abstracts",
  "Other",
];

export default function PublicationList() {
  const pubs = publications as Publication[];

  // Group by type
  const grouped = new Map<string, Publication[]>();
  for (const pub of pubs) {
    const list = grouped.get(pub.type) ?? [];
    list.push(pub);
    grouped.set(pub.type, list);
  }

  // Sort groups by the defined order
  const sortedGroups = [...grouped.entries()].sort(
    (a, b) => typeOrder.indexOf(a[0]) - typeOrder.indexOf(b[0])
  );

  return (
    <div className="space-y-10">
      {sortedGroups.map(([type, items]) => (
        <section key={type}>
          <h2 className="text-xl font-semibold text-navy mb-4">{type}</h2>
          <ul className="space-y-4">
            {items.map((pub, i) => (
              <li key={i} className="border-l-2 border-border pl-4">
                <p className="font-medium text-navy">{pub.title}</p>
                <p className="text-sm text-slate-warm mt-1">
                  {pub.journal}
                  {pub.year && ` (${pub.year})`}
                </p>
                <div className="flex gap-3 mt-1">
                  {pub.adsUrl && (
                    <a
                      href={pub.adsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent"
                    >
                      ADS
                    </a>
                  )}
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent"
                    >
                      DOI
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
