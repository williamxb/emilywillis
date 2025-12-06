"use client";
import * as React from "react";
import Link from 'next/link'
import Image from "next/image";
import Video from "next-video";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

// import book from '../assets/cautionary-tales-for-children/book.mp4'
import cover from '../assets/cautionary-tales-for-children/talesCover.jpg'
import layout from '../assets/cautionary-tales-for-children/layout.png'
import moodboard from '../assets/cautionary-tales-for-children/moodboard.png'
import bookPage13 from '../assets/cautionary-tales-for-children/talesPage13.jpg'
import bookPage19 from '../assets/cautionary-tales-for-children/talesPage19.jpg'
import bookPage20 from '../assets/cautionary-tales-for-children/talesPage20.jpg'
import bookPage27 from '../assets/cautionary-tales-for-children/talesPage27.jpg'
import bookPage29 from '../assets/cautionary-tales-for-children/talesPage29.jpg'
import bookPage37 from '../assets/cautionary-tales-for-children/talesPage37.jpg'

export default function Page() {

  return (
    <>
      <div className="block mx-auto 3xl:rounded-3xl 3xl:w-[1760px] mb-8 md:mb-12">
        video
        {/* <Video
          src={book}
          className="w-full h-auto"
        /> */}
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">
        <div className="prose">
          <h1 className="uppercase">Cautionary Tales for Children</h1>
        </div>
        <div className="md:flex flex-row gap-24">
          <div className="prose md:w-1/2 my-3 md:my-0">
            <p>A true crime inspired version of Hilaire Belloc's Cautionary Tales for Children, laid out and illustrated as if it were the diary of a murderer.</p>
            <p className="italic">Publication Design - Cover Design - Art Direction</p>
            <p>Tools: InDesign, Photoshop</p>
          </div>

          <div className="prose md:w-1/2">
            <h2 className="uppercase">Brief:</h2>
            <p>Produce a version of Hilaire Belloc's Cautionary Tales for Children suitable for an adult audience.</p>
            <h2 className="uppercase">Team:</h2>
            <p>
              Cover Design: Emily Willis<br />
              Layout Design: Emily Willis and Katherine Sheldon<br />
              Illustration: Grace Bradshaw, Amy Calladine and Dulcie Lanaghan<br />
              Typography: Tobial Benedikt Reif
            </p>
          </div>
        </div>
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">
        <div className="prose">
          <h2 className="uppercase">Book Images</h2>
        </div>
        <Swiper
          spaceBetween={48}
          scrollbar={{ hide: true, }}
          modules={[Scrollbar]}
          className="pb-4!"
        >
          <SwiperSlide>
            <Image
              src={bookPage13}
              className="rounded-3xl"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={bookPage19}
              className="rounded-3xl"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={bookPage20}
              className="rounded-3xl"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={bookPage27}
              className="rounded-3xl"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={bookPage29}
              className="rounded-3xl"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={bookPage37}
              className="rounded-3xl"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">
        <div className="prose">
          <h2 className="uppercase">Cover Design</h2>
        </div>

        <Image
          src={cover}
          className="rounded-3xl"
          alt=""
        />
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">
        <div className="prose">
          <h2 className="uppercase me-8!">Visual Identity</h2>
          <div className="grid sm:grid-cols-2 gap-12">
            <Image
              src={moodboard}
              alt=""
              className="bg-white rounded-3xl"
            />
            <Image
              src={layout}
              alt=""
              className="bg-white rounded-3xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

