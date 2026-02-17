import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

const timeline = [
  {
    period: "2025 \u2013 present",
    role: "PhD Student in Astronomy",
    org: "University of Massachusetts Amherst",
    description:
      "Actively researching young planetary mass objects as they are still in the midst of forming using data from JWST, ALMA, and other telescopes.",
  },
  {
    period: "2022 \u2013 2025",
    role: "Data Systems Software Engineer III",
    org: "Laboratory for Atmospheric and Space Physics (LASP), CU Boulder",
    description:
      "Worked on heliophysics missions and climate satellites, developing data processing pipelines for solar and climate measurements. Contributed to the CLARREO, IMAP-Ultra, IMAP-Hi, and IMAP-Lo instruments.",
  },
  {
    period: "2020 \u2013 2022",
    role: "Science Support Analyst",
    org: "Space Telescope Science Institute (STScI)",
    description:
      "Supported operations for the Hubble and James Webb Space Telescopes. Led calibration efforts for the Cosmic Origins Spectrograph (COS) at Lifetime Position 6, including characterization of spectral and spatial resolution.",
  },
  {
    period: "2016 \u2013 2020",
    role: "B.S. (Honors) in Astrophysics",
    org: "Yale University",
    description:
      "Undergraduate research included Undergraduate thesis characterizing the EXPRES spectrometer, improving its wavelength calibration to precisely measure radial velocities and enable exoplanet detection. Additional research with Simons Observatory, Dragonfly Telephoto Array, and Hubble observations of galaxy clusters.",
  },
];

const technicalSkills = [
  "Python (NumPy, SciPy, Astropy, Plotting, Machine Learning)",
  "Scientific data pipeline development",
  "Git, Linux/Unix, SQL",
  "Basic optical modeling",
];

const scientificCompetencies = [
  "Scientific literature writing, reading, & review",
  "Scientific education, communication, & mentoring",
  "Scientific data pipeline design",
  "Spectroscopic calibration & analysis",
  "UV / Optical / IR / mm instrumentation",
  "JWST, ALMA, Hubble data analysis",
  "Exoplanet detection & characterization",
  "Heliophysics, Earth, & Climate science",
];

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-navy mb-8">About Me</h1>

      {/* Bio */}
      <section className="mb-12">
        <p className="text-lg text-slate-warm leading-relaxed mb-4">
          I am a PhD student in the Department of Astronomy at the University
          of Massachusetts Amherst. My research focuses on understanding how
          objects like exoplanets and brown dwarfs form, using multi-wavelength observations
          from JWST and ALMA.
        </p>
        <p className="text-lg text-slate-warm leading-relaxed mb-4">
          Before graduate school, I spent five years working on space telescope
          operations and scientific instrumentation &mdash; first at the Space
          Telescope Science Institute (STScI) supporting the Hubble Telescope&apos;s Cosmic Origins
          Spectrograph, and then at the Laboratory for Atmospheric and Space
          Physics (LASP) building data systems for heliophysics and climate missions.
        </p>
        <p className="text-lg text-slate-warm leading-relaxed">
          I have a background teaching scientific computing and data analysis.
          I taught the upper-level undergraduate course on
          scientific data analysis and computing at CU Boulder.
        </p>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-navy mb-6">
          Education &amp; Experience
        </h2>
        <div className="space-y-8">
          {timeline.map((item, i) => (
            <div key={i} className="border-l-2 border-border pl-6 relative">
              <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-accent" />
              <p className="text-sm text-accent font-medium">{item.period}</p>
              <h3 className="text-lg font-medium text-navy mt-1">
                {item.role}
              </h3>
              <p className="text-sm text-slate-warm">{item.org}</p>
              <p className="text-slate-warm mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold text-navy mb-6">
          Skills &amp; Competencies
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium text-navy mb-3">Technical</h3>
            <ul className="space-y-2">
              {technicalSkills.map((skill) => (
                <li
                  key={skill}
                  className="text-slate-warm flex items-start gap-2"
                >
                  <span className="text-accent mt-1">&bull;</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-navy mb-3">Scientific</h3>
            <ul className="space-y-2">
              {scientificCompetencies.map((skill) => (
                <li
                  key={skill}
                  className="text-slate-warm flex items-start gap-2"
                >
                  <span className="text-accent mt-1">&bull;</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
