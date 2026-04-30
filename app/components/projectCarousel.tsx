"use client";
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y'

interface ProjectCarouselProps {
  images: (StaticImageData | string)[];
  themeColor?: string;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ images, themeColor }) => {
  return (
    <div className="rounded-3xl overflow-hidden" style={themeColor ? {
      '--swiper-theme-color': themeColor,
      '--swiper-navigation-color': themeColor,
      '--swiper-pagination-color': themeColor,
    } as React.CSSProperties : {}}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              className="rounded-3xl w-full h-auto"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
