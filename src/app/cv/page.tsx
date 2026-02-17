import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "CV" };

export default function CV() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="flex items-baseline justify-between mb-10">
        <h1 className="text-3xl font-bold text-navy">
          Curriculum Vitae
        </h1>
        {/* TODO: Replace with actual PDF link */}
        {/* <a
          href="/files/kerman_cv.pdf"
          className="text-sm text-accent font-medium"
          download
        >
          Download PDF
        </a> */}
      </div>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-navy border-b border-border pb-2 mb-4">
          Education
        </h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between">
              <p className="font-medium text-navy">
                University of Massachusetts Amherst
              </p>
              <p className="text-sm text-slate-warm">2025 &ndash; present</p>
            </div>
            <p className="text-slate-warm">PhD (ongoing) in Astronomy</p>
          </div>
          <div>
            <div className="flex justify-between">
              <p className="font-medium text-navy">Yale University</p>
              <p className="text-sm text-slate-warm">2016 &ndash; 2020</p>
            </div>
            <p className="text-slate-warm">
              B.S. (Honors) in Astrophysics
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-navy border-b border-border pb-2 mb-4">
          Professional Experience
        </h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between">
              <p className="font-medium text-navy">
                Data Systems Software Engineer III
              </p>
              <p className="text-sm text-slate-warm">2022 &ndash; 2025</p>
            </div>
            <p className="text-slate-warm">
              Laboratory for Atmospheric and Space Physics (LASP), CU Boulder
            </p>
          </div>
          <div>
            <div className="flex justify-between">
              <p className="font-medium text-navy">
                Science Support Analyst
              </p>
              <p className="text-sm text-slate-warm">2020 &ndash; 2022</p>
            </div>
            <p className="text-slate-warm">
              Space Telescope Science Institute (STScI)
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-navy border-b border-border pb-2 mb-4">
          Scientific Competencies
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-slate-warm">
          <p>Scientific literature writing/reading/review</p>
          <p>Scientific teaching and mentoring</p>
          <p>Scientific data pipeline design</p>
          <p>UV / Optical / IR / mm instrumentation</p>
        </div>
        <h2 className="text-xl font-semibold text-navy border-b border-border pb-2 mb-4">
          Technical Skills
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-slate-warm">
          <p>Scientific data pipeline development</p>
          <p>Python (NumPy, SciPy, Astropy, Plotting, Machine Learning)</p>
          <p>Spectroscopic calibration &amp; analysis</p>
          <p>JWST, ALMA, Hubble / COS Data</p>
          <p>Basic optical modeling</p>
          <p>Git, Linux/Unix, SQL</p>
        </div>
      </section>

      {/* Teaching */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-navy border-b border-border pb-2 mb-4">
          Teaching
        </h2>
        <div>
          <div className="flex justify-between">
            <p className="font-medium text-navy">
              Instructor, ASTR 3800: Introduction to Scientific Data Analysis
              and Computing
            </p>
          </div>
          <p className="text-slate-warm">
            University of Colorado Boulder
          </p>
        </div>
        <div>
          <div className="flex justify-between">
            <p className="font-medium text-navy">
              Teaching Assistant, ASTR 301: Writing in Astronomy
            </p>
          </div>
          <p className="text-slate-warm">
            University of Massachusetts Amherst
          </p>
        </div>
      </section>

      {/* Publications link */}
      <section>
        <h2 className="text-xl font-semibold text-navy border-b border-border pb-2 mb-4">
          Publications
        </h2>
        <p className="text-slate-warm">
          See my full{" "}
          <Link href="/publications" className="text-accent">
            publication list
          </Link>
          , updated automatically from ORCID.
        </p>
      </section>
    </div>
  );
}
