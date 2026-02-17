import type { Metadata } from "next";

export const metadata: Metadata = { title: "Research" };

const projects = [
  {
    title: "Planetary Mass Object Formation",
    status: "Current",
    where: "UMass Amherst",
    description:
      "Using JWST near- and mid-infrared observations combined with ALMA millimeter data to study the formation and early evolution of substellar companions and free-floating planetary mass objects. Collaborates with Dr. Kim Ward-Duong (Smith College) and Dr. Kate Follette (Amherst College).",
    tools: ["JWST NIRCam / NIRSpec / MIRI", "ALMA", "Python"],
  },
  {
    title: "IMAP Lo / Hi / Ultra Instruments",
    status: "2024\u20132025",
    where: "LASP, CU Boulder",
    description:
      "Contributed to the pipeline development for the IMAP-Lo / IMAP-Hi / IMAP-Ultra instruments aboard NASA's Interstellar Mapping and Acceleration Probe (IMAP) mission.",
    tools: ["Data pipeline development", "Solar and heliospheric physics", "IMAP", "Python"],
  },
  {
    title: "CLARREO Instrument",
    status: "2022\u20132024",
    where: "LASP, CU Boulder",
    description:
      "Led development of the scientific algorithm pipeline for the CLARREO instrument: a NASA Earth and Climate science instrument which is planned for launch to the International Space Station.",
    tools: ["Data pipeline development", "Earth Science", "Climate Science", "CLARREO", "Python"],
  },
  {
    title: "COS Lifetime Position 6 Calibration",
    status: "2020\u20132022",
    where: "STScI",
    description:
      "Led calibration efforts for Hubble's Cosmic Origins Spectrograph at a new detector lifetime position. Characterized the spectral and spatial resolution of the G160M grating and authored multiple Instrument Science Reports documenting the results.",
    tools: ["Hubble / COS", "Python"],
  },
  {
    title: "EXPRES Spectrometer Characterization",
    status: "2019\u20132020",
    where: "Yale University",
    description:
      "Improved the wavelength calibration of the EXtreme PREcision Spectrometer (EXPRES) to allow for lower-mass exoplanet detection.",
    tools: ["EXPRES", "Python"],
  },
];

export default function Research() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-navy mb-4">Research</h1>
      <p className="text-lg text-slate-warm mb-12 max-w-2xl">
        My research spans observational astronomy, instrumentation, and
        scientific software &mdash; with a current focus on understanding how
        substellar objects form.
      </p>

      <div className="space-y-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-bg-alt rounded-lg p-6 border border-border"
          >
            <div className="flex flex-wrap items-baseline gap-3 mb-2">
              <h2 className="text-xl font-semibold text-navy">
                {project.title}
              </h2>
              {project.status === "Current" ? (
                <span className="text-xs font-medium bg-accent text-white px-2 py-0.5 rounded-full">
                  Current
                </span>
              ) : (
                <span className="text-sm text-slate-warm">
                  {project.status}
                </span>
              )}
            </div>
            <p className="text-sm text-accent mb-3">{project.where}</p>
            <p className="text-slate-warm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs bg-white border border-border rounded px-2 py-1 text-slate-warm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
