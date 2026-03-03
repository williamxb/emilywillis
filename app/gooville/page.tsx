"use client";
import * as React from "react";
import Link from 'next/link'
import Image from "next/image";
import Video from "next-video";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

import animation from '../../videos/goovilleAnimation.mp4'
import mindmap from '../assets/gooville/mindmap.png'
import storyboard from '../assets/gooville/storyboard.png'

export default function Page() {

  return (
    <>
      <div className="block mx-auto 3xl:rounded-3xl 3xl:w-440 mb-8 md:mb-12">
        <Video
          src={animation}
          className="w-full h-auto"
        />
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-440 my-8">
        <div className="prose">
          <h1 className="uppercase">Gooville</h1>
        </div>
        <div className="md:flex flex-row gap-24">
          <div className="prose md:w-1/2 my-3 md:my-0">
            <p>A theoretical Cadbury Creme Egg social media campaign (pre re-brand) exploding the chocolatey world of Gooville.</p>
            <p className="italic">Advertising - Animation - Social Media</p>
          </div>

          <div className="prose md:w-1/2">
            <h3 className="uppercase">Brief:</h3>
            <p>Produce an animated advert for Cadbury Creme Egg that is 1s or under for social media.</p>
            <p><b>TOOLS:</b> Photoshop, After Effects</p>
          </div>
        </div>
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-440 my-8">
        <div className="prose">
          <h2 className="uppercase me-8!">Process</h2>
          <div className="grid sm:grid-cols-2 gap-12">
            <Image
              src={storyboard}
              alt=""
              className="bg-white rounded-3xl"
            />
            <Image
              src={mindmap}
              alt=""
              className="bg-white rounded-3xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

