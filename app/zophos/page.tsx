"use client";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "../components/ImageLightbox";
import "yet-another-react-lightbox/styles.css";
import Image from 'next/image'
import link from 'next/link'

import zophos01 from '../images/zophos01.png'

export default function Page() {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <section className="prose max-w-7xl">
        <h1 className="title mb-2! text-3xl tracking-tighter font-normal!">
          Zophos - <i className="font-italic">Pearlfisher Competition Brief</i>
        </h1>
        <p>Naming / Branding / Illustration / Website Design</p>
        <p className="text-lg font-bold tracking-tight">'How can we unlock rarity as a journey into the extraordinary?'</p>
        <p className="text-lg">Legends unveiled with the rising sun. Meet nature's ghost army, the drosoulites. Their shadows weave tales of their forgotten rebellion. In the glow of the dawn, the drosoulites reveal their timeless dance between the realm of the living and the spirits that dwell beyond the veil of reality.</p>
        <Image
          priority={true}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          src={zophos01}
          alt=""
          onClick={() => setIndex(0)}
        />
        <p className="text-lg">The drosoulites - dew shadows - are a naturally occuring ghost army in Sfakia, Crete. During the Greek War of Independence, on 17th May 1828, a battle between Greeks and Turks at Frangokastello Castle occurred. 335 Greek soldiers were killed. These fallen rebels are said to haunt the area.</p>

      </section>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => [setIndex(-1)]}
        slides={[zophos01]}
        render={{ slide: NextJsImage }}
      />
    </>
  );
}
