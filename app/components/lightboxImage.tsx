"use client";

import * as React from "react";
import Image, { StaticImageData } from 'next/image';
import NextJsImage from "./lightbox";
import Lightbox from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";

interface ImageWithLightboxProps {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
  className?: string;
}

export default function ImageWithLightbox({ src, alt, priority = false, className = "w-full cursor-pointer" }: ImageWithLightboxProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Image
        className={className}
        priority={priority}
        placeholder="blur"
        sizes="(max-width: 1023px) 100vw, (max-width: 1800px) 80vw, 80vw"
        quality={100}
        src={src}
        alt={alt}
        onClick={() => setOpen(true)}
      />

      <Lightbox
        carousel={{ finite: true }}
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        slides={[{ src: src.src, width: src.width, height: src.height }]}
        render={{
          slide: NextJsImage,
          buttonPrev: () => undefined,
          buttonNext: () => undefined,
        }}
      />
    </>
  );
}