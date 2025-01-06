"use client";
import * as React from "react";
// import Link from "next/link";
import ImageWithLightbox from "../components/lightboxImage";
import Image from "next/image";
import Video from 'next-video';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

import zophosWebsite from '../videos/zophos-website.mov' 

import book from '../assets/zophos/book.jpg'
import dawn from '../assets/zophos/dawn.jpg'
import discover from '../assets/zophos/discover.jpg'
import dusk from '../assets/zophos/dusk.jpg'

import brand from '../assets/zophos/brand.png'
import experiences from '../assets/zophos/experiences.jpg'
import home from '../assets/zophos/home.jpg'
import illustrationCastle from '../assets/zophos/illustrationCastle.jpg'
import illustrationDawn from '../assets/zophos/illustrationDawn.jpg'
import illustrationDawnCastle from '../assets/zophos/illustrationDawnCastle.jpg'
import illustrationTent from '../assets/zophos/illustrationTent.jpg'
import palette from '../assets/zophos/palette.png'
import poster from '../assets/zophos/poster.jpg'

export default function Page() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-36 pt-16 mb-16">
        <div>
          <div className="rounded-xl">
            <Video
              className="rounded-xl mb-3"
              src={zophosWebsite}
            />
          </div>
          <p>
            <span className="font-semibold">Tools: </span>
            <span className="font-light">Photoshop, Illustrator, Figma</span>
          </p>
        </div>
        <div className="order-first md:order-last">
          <h1 className="glow glow-title mb-6 uppercase text-5xl font-semibold tracking-wide">Zophos</h1>
          <p className="mb-3 text-xl italic">‘How can we unlock rarity as a journey into the extraordinary?’</p>
          <p className="mb-3 text-xl">This project was a response to the Pearlfisher 2024 Fresh Pearls Brief. A visual identity for a rare natural ghost experience; The Drosoulites of Crete.</p>
          <p className="font-light text-brand-raisin/75 mb-8">Branding - Website Design - Illustration</p>
        </div>
      </div>

      <div className="prose-grid-3">
        <div>
          <h2 className="prose-header">Insight</h2>
          <div className="prose">
            <p>Millenials are the generation that travels the most, seeking out unique experiences and spending ore on immersive activities.</p>
            <p>Dark tourism is a rising sector of the industry, providing an entertaining way to learn history and experience the paranormal.</p>
            <p>The drosoulites - ‘dew shadows’ - are a naturally occurring ghost army in Sfakia, Crete. During the Greek War of Independence, on 17th May 1828, a battle between Greeks and Turks at Frangokastello Castle occurred. 335 Greek soldiers were killed.</p>
          </div>
        </div>
        <div>
          <div className="prose mt-16">
            <p>These fallen rebels are said to haunt the area. Around the anniversary of the battle each year from mid May until early June, a procession of soldiers shrouded in shadow march towards the castle at dawn. They appear with the first morning dew on a moist, calm morning.</p>
          </div>
        </div>
        <div>
          <h2 className="prose-header">Solution</h2>
          <div className="prose">
            <p>Zophos seamlessly blends modernity with the cultural history of Crete, catering to young travellers seeking authenticity. Zophos invites travellers on a transformative expedition to the haunted coastline of Sfakia, blurring the lines between reality and legend.</p>
            <p>From exploring forgotten ruins, to an innovative augmented reality experience, Zophos offers an unforgettable fusion of culture, excitement, and the supernatural, setting a new standard for travellers.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12 lg:gap-16 my-16">
        <div className="grid-cols-subgrid col-span-2">
          <Image
            src={brand}
            alt=""
          />
        </div>
        <div>
          <Image
            src={poster}
            alt=""
          />
        </div>
        <div>
          <Image
            src={palette}
            alt=""
          />
        </div>
      </div>

      <section>
        <h2 className="prose-header">Visual Strategy</h2>
        <div className="prose-grid-2">
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

        <div>
          <Image
            src={home}
            alt=""
          />
        </div>

        <div>
          <Image
            src={experiences}
            alt=""
          />
        </div>
      </div>

      <section>
        <h2 className="prose-header">Website design</h2>
        <div className="prose-grid-2">
          <div className="prose">
            <h3 className="uppercase">Navigation:</h3>
            <p>I wanted to make the website easy to navigate by simplifying information provided - often I find travel websites very text-heavy, so I wanted to simplify this as much as I could.</p>
            <p>Adding a ‘Book Now’ button at the bottom of all the information pages makes it easy to purchase tickets and access the booking page at any time.</p>
          </div>
          <div className="prose">
            <h3 className="uppercase">Photos and Illustration:</h3>
            <p>Having a ‘discover’ page offered the opportunity to include photos in the website to ground the brand in realism and sell the location. Keeping an illustrative approach on the other pages helps to keep the mystery and intrigue about the ‘ghost army', rather than trying to depict them realistically.</p>
          </div>
        </div>
      </section>
    </>
  );
}