import * as React from "react";
import Link from 'next/link'
import ImageWithLightbox from "../components/lightboxImage";

export default function Page() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-36 pt-16 mb-16">
        <div>
          <div className="bg-brand-raisin aspect-video w-full mb-3">
            <p className="text-3xl text-brand-off-white p-4">video</p>
          </div>
          <p>
            <span className="font-semibold">Tools: </span>
            <span className="font-light">InDesign, Illustrator</span>
          </p>
        </div>
        <div className="order-first md:order-last">
          <h1 className="glow glow-title mb-6 uppercase text-5xl font-semibold tracking-wide">Keep Dancing</h1>
          <p className="mb-3 text-xl">An ‘NHS’ campaign encouraging elderly women to get involved in dance, in collaboration with ‘Strictly Come Dancing.' Inspired by Live to 100: Secrets of the Blue Zone docuseries and 70s design.</p>
          <p className="font-light text-brand-raisin/75 mb-8">Publication Design - Branding - Illustration</p>
        </div>
      </div>

      <div className="prose-grid-3">
        <div>
          <h2 className="prose-header">Problem</h2>
          <div className="prose">
            <p>Only 43% of people over the age of 74 are physically active in the UK, with women being less physically active than men.</p>
            <p>Catering towards this group is vital to ensure their healthy years of life can be increased.
            </p>
          </div>
        </div>
        <div>
          <h2 className="prose-header">Insight</h2>
          <div className="prose">
            <p>People aged 75+ watch 5 hours 48 minutes of TV a day on average, with Strictly Come Dancing being one of the most popular reality shows among elderly women.</p>
            <p>Harnessing the glitz, glamour and fun of Strictly Come Dancing to make dance accessible and appealing to elderly women could aid combatting inactivity.</p>
          </div>
        </div>
        <div>
          <h2 className="prose-header">Solution</h2>
          <div className="prose">
            <p>'Keep Dancing' is a campaign launched by the NHS in collaboration with Strictly Come Dancing, sending information packs to elderly women, teaching them basic dance moves and offering a range of fun, sociable dance classes in their local area. This will help women aged 75 and over to have easy access to resources for dance.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12 lg:gap-16 my-16">
        <div className="grid-cols-subgrid col-span-2">
          <div className="bg-brand-raisin aspect-video w-full mb-3">
            <p className="text-3xl text-brand-off-white p-4">hero image</p>
          </div>
        </div>
      </div>
    </>
  );
}

