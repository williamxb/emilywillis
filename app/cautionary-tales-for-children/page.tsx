"use client";
import { Suspense } from "react";
import Image from "next/image";
import Video from "next-video";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y'

import book from '../../videos/Big Book Gif slow.mp4'
import cover from '../assets/cautionary-tales-for-children/talesCover.jpg'
import layout from '../assets/cautionary-tales-for-children/layout.png'
import moodboard from '../assets/cautionary-tales-for-children/moodboard.png'
import bookPage13 from '../assets/cautionary-tales-for-children/talesPage13.jpg'
import bookPage19 from '../assets/cautionary-tales-for-children/talesPage19.jpg'
import bookPage20 from '../assets/cautionary-tales-for-children/talesPage20.jpg'
import bookPage27 from '../assets/cautionary-tales-for-children/talesPage27.jpg'
import bookPage29 from '../assets/cautionary-tales-for-children/talesPage29.jpg'
import bookPage37 from '../assets/cautionary-tales-for-children/talesPage37.jpg'

// @TODO: Test if this actually helps with CLS
const fallback = (
  <div className="aspect-video w-full"></div>
)

export default function Page() {

  return (
    <>
      <style>{`
        :root {
          --swiper-theme-color: var(--color-brand-raisin);
          --swiper-navigation-color: var(--color-brand-raisin);
          --swiper-pagination-color: var(--color-brand-raisin);
        }
      `}</style>

      <div className="block mx-auto 3xl:rounded-3xl 3xl:w-440 mb-8 md:mb-12">
        <Suspense fallback={fallback}>
          <Video
            className="3xl:rounded-3xl overflow-hidden shadow-xl 3xl:shadow-xl content-center"
            src={book}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
        </Suspense>
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-440 my-8">
        <div className="prose">
          <h1 className="uppercase">Cautionary Tales for Children</h1>
        </div>
        <div className="md:flex flex-row gap-24">
          <div className="prose md:w-1/2 my-3 md:my-0">
            <p>A true crime inspired version of Hilaire Belloc's Cautionary Tales for Children, laid out and illustrated as if it were the diary of a murderer.</p>
            <p className="italic">Publication Design - Cover Design - Art Direction</p>
            <p><b>TOOLS:</b> InDesign, Photoshop</p>
          </div>

          <div className="prose md:w-1/2">
            <h2 className="uppercase">Brief:</h2>
            <p>Produce a version of Hilaire Belloc's Cautionary Tales for Children suitable for an adult audience.</p>
            <h2 className="uppercase">Team:</h2>
            <p>
              Cover Design: Emily Willis<br />
              Layout Design: Emily Willis and Katherine Sheldon<br />
              Illustration: Grace Bradshaw, Amy Calladine and Dulcie Lanaghan<br />
              Typography: Tobias Benedikt Reif
            </p>
          </div>
        </div>
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-440 my-8">
        <div className="prose">
          <h2 className="uppercase">Book Images</h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
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

      <div className="block w-11/12 mx-auto 3xl:w-440 my-8">
        <div className="prose">
          <h2 className="uppercase">Cover Design</h2>
        </div>

        <Image
          src={cover}
          className="rounded-3xl"
          alt=""
        />
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-440 my-8">
        <div className="prose">
          <h2 className="uppercase me-8!">Process</h2>
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

