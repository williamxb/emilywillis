"use client";
import * as React from "react";
import Image from 'next/image';
import Link from 'next/link'

import Lightbox from "yet-another-react-lightbox";
import { Zoom, Thumbnails } from "yet-another-react-lightbox/plugins";
import NextJsImage from "../components/ImageLightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import oasen01 from '../images/oasen01.png'
import oasen08 from '../images/oasen08.png'
import oasen07 from '../images/oasen07.png'
import oasen02 from '../images/oasen02.png'
import oasen04 from '../images/oasen04.png'
import oasen03 from '../images/oasen03.png'
import oasen05 from '../images/oasen05.png'

export default function Page() {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <section className="prose max-w-7xl">
        <h1 className="text-balance mb-2! text-3xl font-normal! tracking-tighter">
          Oasen · <i className="font-italic">RSA In Your Skin Competition Brief</i>
        </h1>
        <p>Group Project / Naming / Branding / Experimental Design / Research</p>
        <p className="font-bold"><Link target="_blank" href="https://www.thersa.org/student-design-awards/winners/2023-24/In-your-skin">Highly Commended for RSA In Your Skin Design Award</Link></p>
        <p className="text-lg">Oasen is a skincare brand for young neurodiverse individuals, offering a sensory-safe product range and an accommodating pop-up store experience that creates an environment to foster confidence and skin health.</p>
        <Image
          priority={true}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 70vw"
          src={oasen01}
          alt=""
          onClick={() => setIndex(0)}
          className="cursor-pointer"
        />
        <p className="text-lg">My group partner Ju and I decided to focus on sensory issues that neurodiverse people face. Our solution was to create a brand, Oasen, which shows skin diversity, has sensory-safe products, creates community through a pop-up store and or line, uses positive language and is accessible.</p>
        <Image
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 85vw, 85vw"
          src={oasen08}
          alt=""
          onClick={() => setIndex(1)}
          className="cursor-pointer"
        />
        <p className="text-lg">Oasen was a research heavy project, ensuring that we understood the audience as well as possible, taking their feedback into consideration when we planned the pop-up shop experience and designed the brand.</p>
        <p className="text-lg">We decided to name the brand Oasen as a spin on the word 'Oasis' meaning a safe space, a sanctuary.</p>
        <Image
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 70vw"
          src={oasen07}
          alt=""
          onClick={() => setIndex(2)}
          className="cursor-pointer w-full"
        />
        <p className="text-lg">The blob illustrations were inspired by lava lamps, which are a sensory light, and can be used as a visual stim.</p>
        <div className="flex-auto flex flex-row mb-6 gap-6">
          <div className="grow">
            <Image
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 70vw"
              src={oasen02}
              alt=""
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setIndex(3)}
            />
          </div>
          <div className="grow">
            <Image
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 70vw"
              src={oasen04}
              alt=""
              className="w-full object-cover cursor-pointer"
              onClick={() => setIndex(4)}
            />
          </div>
        </div>
        <div className="flex-auto flex flex-row gap-6">
          <div className="grow">
            <Image
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 70vw"
              src={oasen03}
              alt=""
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setIndex(5)}
            />
          </div>
          <div className="grow ">
            <Image
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 70vw"
              src={oasen05}
              alt=""
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setIndex(6)}
            />
          </div>
        </div>
      </section>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => [setIndex(-1)]}
        slides={[oasen01, oasen08, oasen07, oasen02, oasen04, oasen03, oasen05]}
        render={{ slide: NextJsImage }}
        plugins={[Zoom, Thumbnails]}
      />
    </>
  );
}
