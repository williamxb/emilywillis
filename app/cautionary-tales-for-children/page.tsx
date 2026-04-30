import { Suspense } from "react";
import Image from "next/image";
import Video from "next-video";
import { Container } from "../components/container";
import { ProjectCarousel } from "../components/projectCarousel";

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
  const bookImages = [
    bookPage13,
    bookPage19,
    bookPage20,
    bookPage27,
    bookPage29,
    bookPage37,
  ];

  return (
    <>
      <Container className="mb-8 md:mb-12 !w-full !max-w-full">
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
      </Container>

      <Container className="my-8">
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
      </Container>

      <Container className="my-8">
        <div className="prose">
          <h2 className="uppercase">Book Images</h2>
        </div>
        <ProjectCarousel images={bookImages} themeColor="var(--color-brand-raisin)" />
      </Container>

      <Container className="my-8">
        <div className="prose">
          <h2 className="uppercase">Cover Design</h2>
        </div>

        <Image
          src={cover}
          className="rounded-3xl w-full h-auto"
          alt=""
        />
      </Container>

      <Container className="mt-8 mb-16">
        <div className="prose">
          <h2 className="uppercase mb-8!">Process</h2>
        </div>

        <div className="grid grid-cols-6 gap-6 sm:gap-x-12 sm:gap-y-8">
          <div className="col-span-6 md:col-span-3">
            <Image
              src={moodboard}
              alt=""
              className="bg-white rounded-3xl"
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <Image
              src={layout}
              alt=""
              className="rounded-3xl"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
