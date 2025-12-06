"use client";
import * as React from "react";
import ImageWithLightbox from "../components/lightboxImage";
import Image from "next/image";
import Link from "next/link";
import Video from 'next-video';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

import zophosWebsite from '../../videos/zophos-website.mov' 

import book from '../assets/zophos/book.jpg'
import dawn from '../assets/zophos/dawn.jpg'
import discover from '../assets/zophos/discover.jpg'
import dusk from '../assets/zophos/dusk.jpg'

import dawnExperience from '../assets/zophos/dawnExperience.png'
import duskExperience from '../assets/zophos/duskExperience.png'
import websiteMockup from '../assets/zophos/websiteMockup.png'

import brand from '../assets/zophos/brand.png'
import experiences from '../assets/zophos/experiences.jpg'
import home from '../assets/zophos/home.jpg'
import illustrationCastle from '../assets/zophos/illustrationCastle.jpg'
import illustrationDawn from '../assets/zophos/illustrationDawn.jpg'
import illustrationDawnCastle from '../assets/zophos/illustrationDawnCastle.jpg'
import illustrationTent from '../assets/zophos/illustrationTent.jpg'
import insight from '../assets/zophos/insight.png'
import mainImage from '../assets/zophos/main.png'
import moodboard from '../assets/zophos/moodboard.png'
import palette from '../assets/zophos/palette.png'
import poster from '../assets/zophos/poster.jpg'
import process from '../assets/zophos/process.png'

export default function Page() {
  return (
    <>
      <div className="block mx-auto 3xl:rounded-3xl 3xl:w-[1760px] mb-8 md:mb-12">
        <Image
          src={mainImage}
          alt=""
          className="w-full h-auto"
        />
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">
        <div className="prose">
          <h1 className="uppercase">Zophos</h1>
        </div>
        <div className="md:flex flex-row gap-24">
          <div className="prose md:w-1/2 my-3 md:my-0">
            <p>A visual identity for a rare natural ghost experience; the Drosoulites of Crete.</p>
            <p className="italic">Branding - Website Design - Illustration</p>
          </div>

          <div className="prose md:w-1/2">
            <h2 className="uppercase">Brief</h2>
            <p>“How can we unlock rarity as a journey into the extroadinary?” Pearlfisher Fresh Pearls 2024.</p>
            <p>Tools: Photoshop, Illustrator, Figma</p>
          </div>
        </div>
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">
        <Image
          src={insight}
          alt=""
          className="rounded-3xl"
        />
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">
        <div className="prose">
          <h2 className="uppercase me-8!">The Experiences</h2>
          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <Image
                src={dawnExperience}
                alt=""
                className="rounded-3xl"
              />
            </div>
            <div>
              <Image
                src={duskExperience}
                alt=""
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">
        <div className="prose">
          <h2 className="uppercase me-8!">Visual Identity</h2>
          <div className="grid sm:grid-cols-2 gap-12">
            <Image
              src={brand}
              alt=""
              className="bg-white rounded-3xl"
            />
            <Image
              src={moodboard}
              alt=""
              className="bg-white rounded-3xl"
            />
            <Image
              src={process}
              alt=""
              className="bg-white rounded-3xl"
            />
            <div className="prose">
              <h2 className="uppercase">Logo and Type</h2>
              <p>Zophos means 'darkness' in Greek. The logo design shows the castle, sunrise, and sea. These elements encompass the environment of the experience.</p>
              <p>I chose a serif type for the logo and main headers to create a sense of luxury, pairing it with a sans serif to maintain modernity.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">
        <div className="prose">
          <div className="grid sm:grid-cols-2 gap-12">
            <div className="prose">
              <h2 className="uppercase">Logo and Type</h2>
              <p>Zophos means 'darkness' in Greek. The logo design shows the castle, sunrise, and sea. These elements encompass the environment of the experience.</p>
              <p>I chose a serif type for the logo and main headers to create a sense of luxury, pairing it with a sans serif to maintain modernity.</p>
            </div>
          <Image
              src={palette}
            alt=""
              className="bg-white rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">

        <div className="grid-cols-subgrid col-span-2">
          <Swiper
            spaceBetween={48}
            scrollbar={{ hide: true, }}
            modules={[Scrollbar]}
            className="pb-4!"
          >
            <SwiperSlide>
              <Image
                src={illustrationDawn}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={illustrationDawnCastle}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={illustrationCastle}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={illustrationTent}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">
        <Image
          src={poster}
          alt=""
          className="rounded-3xl"
        />
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">
        <div className="prose">
          <h2 className="uppercase me-8!">Website</h2>
          <div className="grid sm:grid-cols-2 gap-12">
            <Image
              src={home}
              alt=""
              className="bg-white rounded-3xl"
            />
            <Image
              src={experiences}
              alt=""
              className="bg-white rounded-3xl"
            />
            <Image
              src={websiteMockup}
              alt=""
              className="bg-white rounded-3xl"
            />
            <div className="prose">
              <h2 className="uppercase">website video scroll-through</h2>
            </div>
          </div>
        </div>
      </div>
    </>

    // <div id="zophos">
    //   <div className="grid md:grid-cols-2 gap-12 lg:gap-36 pt-16 mb-16">
    //     <div>
    //       <div className="rounded-xl">
    //         <Video
    //           className="rounded-xl mb-3"
    //           src={zophosWebsite}
    //         />
    //       </div>
    //       <p>
    //         <span className="font-semibold">Tools: </span>
    //         <span className="font-light">Photoshop, Illustrator, Figma</span>
    //       </p>
    //     </div>
    //     <div className="order-first md:order-last">
    //       <h1 className="glow glow-title mb-6 uppercase text-5xl font-semibold tracking-wide">Zophos</h1>
    //       <p className="mb-3 text-xl italic">‘How can we unlock rarity as a journey into the extraordinary?’</p>
    //       <p className="mb-3 text-xl">This project was a response to the Pearlfisher 2024 Fresh Pearls Brief. A visual identity for a rare natural ghost experience; The Drosoulites of Crete.</p>
    //       <p className="font-light text-brand-raisin/75 mb-8">Branding - Website Design - Illustration</p>
    //     </div>
    //   </div>

    //   <div className="prose-grid-3">
    //     <div>
    //       <h2 className="prose-header">Insight</h2>
    //       <div className="prose">
    //         <p>Millenials are the generation that travels the most, seeking out unique experiences and spending ore on immersive activities.</p>
    //         <p>Dark tourism is a rising sector of the industry, providing an entertaining way to learn history and experience the paranormal.</p>
    //         <p>The drosoulites - ‘dew shadows’ - are a naturally occurring ghost army in Sfakia, Crete. During the Greek War of Independence, on 17th May 1828, a battle between Greeks and Turks at Frangokastello Castle occurred. 335 Greek soldiers were killed.</p>
    //       </div>
    //     </div>
    //     <div>
    //       <div className="prose mt-16">
    //         <p>These fallen rebels are said to haunt the area. Around the anniversary of the battle each year from mid May until early June, a procession of soldiers shrouded in shadow march towards the castle at dawn. They appear with the first morning dew on a moist, calm morning.</p>
    //       </div>
    //     </div>
    //     <div>
    //       <h2 className="prose-header">Solution</h2>
    //       <div className="prose">
    //         <p>Zophos seamlessly blends modernity with the cultural history of Crete, catering to young travellers seeking authenticity. Zophos invites travellers on a transformative expedition to the haunted coastline of Sfakia, blurring the lines between reality and legend.</p>
    //         <p>From exploring forgotten ruins, to an innovative augmented reality experience, Zophos offers an unforgettable fusion of culture, excitement, and the supernatural, setting a new standard for travellers.</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="grid grid-cols-2 gap-12 lg:gap-16 my-16">
    //     <div className="grid-cols-subgrid col-span-2">
    //       <Image
    //         src={brand}
    //         alt=""
    //       />
    //     </div>
    //     <div>
    //       <Image
    //         src={poster}
    //         alt=""
    //       />
    //     </div>
    //     <div>
    //       <Image
    //         src={palette}
    //         alt=""
    //       />
    //     </div>
    //   </div>

    //   <section>
    //     <h2 className="prose-header">Visual Strategy</h2>
    //     <div className="prose-grid-2">
    //       <div className="prose">
    //         <h3 className="uppercase">Logo and type:</h3>
    //         <p>Zophos means ‘darkness’ in Greek. The logo design shows the castle, sunrise, and sea. These elements encompass the environment of the experience.</p>
    //         <p>I chose a serif type for the logo and main headers to create a luxury feel, pairing it with a simple sans serif to maintain the fresh modernity of the visual identity.</p>
    //       </div>
    //       <div className="prose">
    //         <h3 className="uppercase">Colour:</h3>
    //         <p>The colour palette has rich tones, drawn from the shades of the sunrise, sea, and Cretean art. I wanted to keep it dark, yet bold to attract a younger audience.</p>
    //         <h3 className="uppercase">Illustration:</h3>
    //         <p>The hand-stitched look of the ghost illustrations were inspired by Cretean embroidery, drawing on the visual culture of the area and adding a historical feel to the brand.</p>
    //       </div>
    //     </div>
    //   </section>

    // <div className="grid grid-cols-2 gap-12 lg:gap-16 my-16">

    //   <div className="grid-cols-subgrid col-span-2">
    //     <Swiper
    //       spaceBetween={48}
    //       scrollbar={{ hide: true, }}
    //       modules={[Scrollbar]}
    //       className="pb-4!"
    //     >
    //       <SwiperSlide>
    //         <Image
    //           src={illustrationDawn}
    //           alt=""
    //         />
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <Image
    //           src={illustrationDawnCastle}
    //           alt=""
    //         />
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <Image
    //           src={illustrationCastle}
    //           alt=""
    //         />
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <Image
    //           src={illustrationTent}
    //           alt=""
    //         />
    //       </SwiperSlide>
    //     </Swiper>
    //   </div>

    //   <div>
    //     <Image
    //       src={home}
    //       alt=""
    //     />
    //   </div>

    //   <div>
    //     <Image
    //       src={experiences}
    //       alt=""
    //     />
    //   </div>
    // </div>

    //   <section>
    //     <h2 className="prose-header">Website design</h2>
    //     <div className="prose-grid-2">
    //       <div className="prose">
    //         <h3 className="uppercase">Navigation:</h3>
    //         <p>I wanted to make the website easy to navigate by simplifying information provided - often I find travel websites very text-heavy, so I wanted to simplify this as much as I could.</p>
    //         <p>Adding a ‘Book Now’ button at the bottom of all the information pages makes it easy to purchase tickets and access the booking page at any time.</p>
    //       </div>
    //       <div className="prose">
    //         <h3 className="uppercase">Photos and Illustration:</h3>
    //         <p>Having a ‘discover’ page offered the opportunity to include photos in the website to ground the brand in realism and sell the location. Keeping an illustrative approach on the other pages helps to keep the mystery and intrigue about the ‘ghost army', rather than trying to depict them realistically.</p>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}