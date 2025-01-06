"use client";
import * as React from "react";
import Link from 'next/link'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

import talesCover from '../assets/cautionary-tales-for-children/talesCover.jpg'
import talesPage13 from '../assets/cautionary-tales-for-children/talesPage13.jpg'
import talesPage19 from '../assets/cautionary-tales-for-children/talesPage19.jpg'
import talesPage20 from '../assets/cautionary-tales-for-children/talesPage20.jpg'
import talesPage27 from '../assets/cautionary-tales-for-children/talesPage27.jpg'
import talesPage29 from '../assets/cautionary-tales-for-children/talesPage29.jpg'
import talesPage37 from '../assets/cautionary-tales-for-children/talesPage37.jpg'

export default function Page() {

  return (
    <>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-36 pt-16 mb-16">
        <div>
          <Image
            src={talesCover}
            alt=""
            className="w-full mb-3"
          />
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

      <div className="my-16">
        <Swiper
          spaceBetween={48}
          scrollbar={{ hide: true, }}
          modules={[Scrollbar]}
          className="pb-4!"
        >
          <SwiperSlide>
            <Image
              src={talesPage13}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={talesPage19}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={talesPage20}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={talesPage27}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={talesPage29}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={talesPage37}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
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

