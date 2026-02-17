import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Photography" };

export default function Photography() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-navy mb-4">Photography</h1>
      <p className="text-lg text-slate-warm mb-10 max-w-2xl">
        Alongside my scientific work, I pursue photography as a creative
        practice &mdash; specializing in large-format view camera work,
        astrophotography, and experimental techniques including infrared
        imaging and light painting.
      </p>

      <div className="mb-10">
        <Image
          src="/images/ir_photo_art.jpg"
          alt="Infrared photograph by Nathaniel Kerman"
          width={4102}
          height={5128}
          className="w-full max-w-lg rounded-lg border border-border"
          priority
        />
        <p className="text-sm text-slate-warm mt-3">
          Homemade infrared film photograph &mdash; from my experimental photography portfolio.
        </p>
      </div>

      <p className="text-slate-warm">
        More of my photography and visual work can be found at{" "}
        <a
          href="https://astronat.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-medium"
        >
          astronat.org
        </a>
        .
      </p>
    </div>
  );
}
