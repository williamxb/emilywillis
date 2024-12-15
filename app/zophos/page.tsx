import * as React from "react";
import Link from "next/link";
import ImageWithLightbox from "../components/lightboxImage";
import Image from "next/image";

import zophos01 from '../images/zophos01.png';
import zophos02 from '../images/zophos02.png';
import zophos03 from '../images/zophos03.png';
import zophos04 from '../images/zophos04.png';
import zophos05 from '../images/zophos05.png';
import zophos06 from '../images/zophos06.png';
import zophos07 from '../images/zophos07.png';
import zophos08 from '../images/zophos08.png';
import zophos09 from '../images/zophos09.png';

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-2 gap-12 lg:gap-36 my-16">
        <div className="">
          <div className="bg-brand-raisin aspect-video w-full mb-3">
            <p className="text-3xl text-brand-off-white p-4">video</p>
          </div>
          <p>
            <span className="font-semibold">Tools: </span>
            <span className="font-light">Photoshop, Illustrator, Figma</span>
          </p>
        </div>
        <div className="">
          <h1 className="glow glow-title mb-6 uppercase text-5xl font-semibold tracking-wide">Zophos</h1>
          <p className="mb-3 text-xl italic">‘How can we unlock rarity as a journey into the extraordinary?’</p>
          <p className="mb-3 text-xl">This project was a response to the Pearlfisher 2024 Fresh Pearls Brief. A visual identity for a rare natural ghost experience; The Drosoulites of Crete.</p>
          <p className="font-light text-brand-raisin/75 mb-9">Branding - Website Design - Illustration</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 w-full my-16">
        <div className="">
          <h2 className="mb-6 lowercase text-4xl font-serif">Insight</h2>
          <div className="prose">
            <p>Millenials are the generation that travels the most, seeking out unique experiences and spending ore on immersive activities.</p>
            <p>Dark tourism is a rising sector of the industry, providing an entertaining way to learn history and experience the paranormal.</p>
            <p>The drosoulites - ‘dew shadows’ - are a naturally occurring ghost army in Sfakia, Crete. During the Greek War of Independence, on 17th May 1828, a battle between Greeks and Turks at Frangokastello Castle occurred. 335 Greek soldiers were killed.</p>
          </div>
        </div>
        <div className="">
          <div className="prose mt-16">
            <p>These fallen rebels are said to haunt the area. Around the anniversary of the battle each year from mid May until early June, a procession of soldiers shrouded in shadow march towards the castle at dawn. They appear with the first morning dew on a moist, calm morning.</p>
          </div>
        </div>
        <div className="">
          <h2 className="mb-6 lowercase text-4xl font-serif">Solution</h2>
          <div className="prose">
            <p>Zophos seamlessly blends modernity with the cultural history of Crete, catering to young travellers seeking authenticity. Zophos invites travellers on a transformative expedition to the haunted coastline of Sfakia, blurring the lines between reality and legend.</p>
            <p>From exploring forgotten ruins, to an innovative augmented reality experience, Zophos offers an unforgettable fusion of culture, excitement, and the supernatural, setting a new standard for travellers.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12 lg:gap-16 my-16">
        <div className="grid-cols-subgrid col-span-2">
          <div className="bg-brand-raisin aspect-video w-full mb-3">
            <p className="text-3xl text-brand-off-white p-4">hero image</p>
          </div>
        </div>
        <div className="">
          <div className="bg-brand-raisin aspect-video w-full mb-3">
            <p className="text-3xl text-brand-off-white p-4">logo animation</p>
          </div>
        </div>
        <div className="bg-brand-raisin aspect-video w-full mb-3">
          <p className="text-3xl text-brand-off-white p-4">colour palette animation</p>
        </div>
      </div>

      <section>
        <h2 className="mb-6 lowercase text-4xl font-serif">Visual Strategy</h2>
        <div className="grid grid-cols-2 gap-x-12 lg:gap-x-36 gap-y-12">
          <div className="prose">
            <h3 className="uppercase">Logo and type:</h3>
            <p>Zophos means ‘darkness’ in Greek. The logo design shows the castle, sunrise, and sea. These elements encompass the environment of the experience.</p>
            <p>I chose a serif type for the logo and main headers to create a luxury feel, pairing it with a simple sans serif to maintain the fresh modernity of the visual identity.</p>
          </div>
          <div className="prose">
            <h3 className="uppercase">Colour:</h3>
            <p>The colour palette has rich tones, drawn from the shades of the sunrise, sea, and Cretean art. I wanted to keep it dark, yet bold to attract a younger audience.</p>
            <h3 className="uppercase">Illustration:</h3>
            <p>The hand-stitched look of the ghost illustrations were inspired by Cretean embroidery, drawing on the visual culture of the area and adding a historical feel to the brand.</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-12 lg:gap-16 my-16">

        <div className="grid-cols-subgrid col-span-2">
          <div className="bg-brand-raisin aspect-video w-full mb-3">
            <p className="text-3xl text-brand-off-white p-4">Illustration carousel</p>
          </div>
        </div>

        <div className="bg-brand-raisin aspect-video w-full mb-3">
          <p className="text-3xl text-brand-off-white p-4">website 1</p>
        </div>

        <div className="bg-brand-raisin aspect-video w-full mb-3">
          <p className="text-3xl text-brand-off-white p-4">website 2</p>
        </div>

      </div>

      <section>
        <h2 className="mb-6 lowercase text-4xl font-serif">Website design</h2>
        <div className="grid grid-cols-2 gap-x-12 lg:gap-x-36 gap-y-12">
          <div className="prose">
            <h3 className="uppercase">Stuff:</h3>
            <p>things</p>
          </div>
          <div className="prose">
            <h3 className="uppercase">Things:</h3>
            <p>stuff</p>
          </div>
        </div>
      </section>
    </>
  );
}