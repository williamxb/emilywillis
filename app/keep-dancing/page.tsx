"use client";
import * as React from "react";
import Image from 'next/image';
import Link from 'next/link'

import Lightbox from "yet-another-react-lightbox";
import { Zoom, Thumbnails } from "yet-another-react-lightbox/plugins";
import NextJsImage from "../components/ImageLightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import keepdancing01 from '../images/keepdancing01.png'
import keepdancing02 from '../images/keepdancing02.png'
import keepdancing03 from '../images/keepdancing03.png'
import keepdancing04 from '../images/keepdancing04.png'

export default function Page() {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <section className="prose max-w-7xl">
        <h1 className="text-balance mb-2! text-3xl tracking-tighter font-normal!">
          Keep Dancing · <i className="font-italic">Personal Brief</i>
        </h1>
        <p>Branding / Illustration / Layout Design / Campaign</p>
        <p className="text-lg">Inspired by '<i className="font-italic">Live to 100: Secrets of the Blue Zone</i>' I decided to do a project focusing on helping elderly women become more active. Dance was one of the activities that increased longevity in the blue zones.</p>
        <p className="text-lg">'Keep Dancing' is a campaign launched by the 'NHS' in collaboration with 'Strictly Come Dancing', sending information packs to elderly women, teaching them basic dance moves and offering a range of fun, sociable dance classes in their local area. This will help women aged 75 and over have easy access to resources for dance and an easier way of finding classes in their local area.</p>
        <Image
          className="cursor-pointer"
          priority={true}
          placeholder="blur"
          sizes="(max-width: 1023px) 100vw, (max-width: 1800px) 80vw, 80vw"
          quality={100}
          src={keepdancing01}
          alt=""
          onClick={() => setIndex(0)}
        />
        <p className="text-lg">Only 43% of people over the age of 74 are physically active in the UK, with women being less physically active than men, Only 29.9% of females believe they have the opportunity to be physically active in the UK (Sport England, 2024).</p>
        <p className="text-lg">With Strictly Come Dancing being one of the most popular reality shows among elderly women, I decided to use it as a way to design a campaign, making dance fun and accessible for elderly women.</p>
        <Image
          className="cursor-pointer"
          priority={true}
          placeholder="blur"
          sizes="(max-width: 1023px) 100vw, (max-width: 1800px) 80vw, 80vw"
          quality={100}
          src={keepdancing02}
          alt=""
          onClick={() => setIndex(1)}
        />
        <p className="text-lg">I brought together the Strictly Come Dancing colour palette and 1960s design to create a fun, fresh, yet nostalgic campaign design.</p>
        <Image
          priority={true}
          placeholder="blur"
          sizes="(max-width: 1023px) 100vw, (max-width: 1800px) 80vw, 80vw"
          quality={100}
          src={keepdancing03}
          className="mb-6 cursor-pointer"
          alt=""
          onClick={() => setIndex(2)}
        />
        <Image
          className="cursor-pointer"
          priority={true}
          placeholder="blur"
          sizes="(max-width: 1023px) 100vw, (max-width: 1800px) 80vw, 80vw"
          quality={100}
          src={keepdancing04}
          alt=""
          onClick={() => setIndex(3)}
        />

      </section>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => [setIndex(-1)]}
        slides={[keepdancing01, keepdancing02, keepdancing03, keepdancing04]}
        render={{ slide: NextJsImage }}
        plugins={[Zoom, Thumbnails]}
      />
    </>
  );
}
