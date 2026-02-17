/**
 * Fetches publications from the ORCID public API and writes them to
 * src/data/publications.json. Run via `npm run fetch-pubs`.
 *
 * This script is also called by the GitHub Actions deploy workflow
 * so the publication list stays up-to-date automatically.
 */

import { writeFileSync } from "fs";
import { join } from "path";

const ORCID_ID = "0009-0003-5115-3832";
const API_URL = `https://pub.orcid.org/v3.0/${ORCID_ID}/works`;
const OUT_PATH = join(__dirname, "..", "src", "data", "publications.json");

interface Publication {
  title: string;
  year: string;
  journal: string;
  type: string;
  doi: string | null;
  bibcode: string | null;
  adsUrl: string | null;
}

function categorize(type: string): string {
  switch (type) {
    case "journal-article":
      return "Journal Articles";
    case "research-technique":
      return "Instrument Science Reports";
    case "conference-paper":
      return "Conference Papers";
    case "conference-abstract":
      return "Conference Abstracts";
    default:
      return "Other";
  }
}

async function main() {
  console.log(`Fetching publications from ORCID (${ORCID_ID})...`);

  const res = await fetch(API_URL, {
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(`ORCID API returned ${res.status}: ${res.statusText}`);
  }

  const data = await res.json();
  const publications: Publication[] = [];

  for (const group of data.group ?? []) {
    for (const ws of group["work-summary"] ?? []) {
      const title = ws.title?.title?.value ?? "Untitled";
      const year = ws["publication-date"]?.year?.value ?? "Unknown";
      const journal = ws["journal-title"]?.value ?? "";
      const type = ws.type ?? "other";

      const extIds = ws["external-ids"]?.["external-id"] ?? [];
      const doi =
        extIds.find((e: any) => e["external-id-type"] === "doi")?.[
          "external-id-value"
        ] ?? null;
      const bibcode =
        extIds.find((e: any) => e["external-id-type"] === "bibcode")?.[
          "external-id-value"
        ] ?? null;

      publications.push({
        title,
        year,
        journal,
        type: categorize(type),
        doi,
        bibcode,
        adsUrl: bibcode
          ? `https://ui.adsabs.harvard.edu/abs/${encodeURIComponent(bibcode)}`
          : null,
      });
    }
  }

  // Sort by year descending, then by title
  publications.sort((a, b) => {
    const yearDiff = (parseInt(b.year) || 0) - (parseInt(a.year) || 0);
    if (yearDiff !== 0) return yearDiff;
    return a.title.localeCompare(b.title);
  });

  writeFileSync(OUT_PATH, JSON.stringify(publications, null, 2) + "\n");
  console.log(`Wrote ${publications.length} publications to ${OUT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
