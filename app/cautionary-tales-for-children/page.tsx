import * as React from "react";
import Link from 'next/link'
import ImageWithLightbox from "../components/lightboxImage";

import cautionarytales01 from '../images/cautionarytales01.png'
import cautionarytales02 from '../images/cautionarytales02.png'
import cautionarytales03 from '../images/cautionarytales03.png'
import cautionarytales04 from '../images/cautionarytales04.png'
import cautionarytales05 from '../images/cautionarytales05.png'

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
            <span className="font-light">InDesign, Photoshop</span>
          </p>
        </div>
        <div className="order-first md:order-last">
          <h1 className="glow glow-title mb-6 uppercase text-5xl font-semibold tracking-wide">Cautionary Tales for Children</h1>
          <p className="mb-3 text-xl">An interpretation of Hilaire Belloc’s <span className="italic">Cautionary Tales for Children</span>, suitable for an adult audience. Inspired by the popularity of true crime, it’s laid out and illustrated as if it were the diary of a criminal.</p>
          <p className="font-light text-brand-raisin/75 mb-8">Publication Design - Cover Design - Art Direction</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12 lg:gap-16 my-16">
        <div className="grid-cols-subgrid col-span-2">
          <div className="bg-brand-raisin aspect-video w-full mb-3">
            <p className="text-3xl text-brand-off-white p-4">hero image</p>
          </div>
        </div>
      </div>

      <section>
        <div className="prose">
          <p>
            <span className="font-semibold">Cover Design:</span> Emily Willis<br />
            <span className="font-semibold">Layout:</span> Emily Willis and Katherine Sheldon<br />
            <span className="font-semibold">Illustrations:</span> Amy Calladine, Dulcie Lanaghan, and Grace Bradshaw<br />
            <span className="font-semibold">Typography:</span> Tobias Benedikt Reif
          </p>
        </div>
      </section>
    </>
  );
}

