"use client";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "../components/ImageLightbox";
import "yet-another-react-lightbox/styles.css";
import Image from 'next/image'
import link from 'next/link'

import zophos01 from '../images/zophos01.png'
import zophos02 from '../images/zophos02.png'
import zophos03 from '../images/zophos03.png'
import zophos04 from '../images/zophos04.png'
import zophos05 from '../images/zophos05.png'
import zophos06 from '../images/zophos06.png'
import zophos07 from '../images/zophos07.png'
import zophos08 from '../images/zophos08.png'
import zophos09 from '../images/zophos09.png'

export default function Page() {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <section className="prose max-w-7xl">
                <h1 className="text-balance mb-2! text-3xl tracking-tighter font-normal!">
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
        <Image
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          src={zophos02}
          alt=""
          onClick={() => setIndex(1)}
        />
        <p className="text-lg">Zophos means 'darkness' in Greek. I wanted to create a visual identity that looks refined yet mysterios, inspired by Cretean embroidery and visual culture. The target audience are Millenial and Gen Z travellers, who tend to travel to seek unique experiences.</p>
        <div className="grid grid-cols-2 gap-6">
          <div className="grid-cols-subgrid col-span-2">
            <Image
              className="w-full h-full"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              src={zophos03}
              alt=""
              onClick={() => setIndex(2)}
            />
          </div>
          <div className="basis-1/2">
            <Image
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              src={zophos04}
              alt=""
              onClick={() => setIndex(3)}
            />
          </div>
          <div className="basis-1/2">
            <Image
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              src={zophos05}
              alt=""
              onClick={() => setIndex(4)}
            />
          </div>
          <div className="basis-1/2">
            <Image
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              src={zophos06}
              alt=""
              onClick={() => setIndex(5)}
            />
          </div>
          <div className="grid grid-cols-subgrid auto-rows-min col-span-1 gap-6 justify-start">
            <div>
              <Image
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                src={zophos07}
                alt=""
                onClick={() => setIndex(6)}
              />
            </div>
            <div>
              <Image
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                src={zophos08}
                alt=""
                onClick={() => setIndex(7)}
              />
            </div>
            <div>
              <Image
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                src={zophos09}
                alt=""
                onClick={() => setIndex(8)}
              />
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => [setIndex(-1)]}
        slides={[zophos01, zophos02, zophos03, zophos04, zophos05, zophos06, zophos07, zophos08, zophos09]}
        render={{ slide: NextJsImage }}
      />
    </>
  );
}
