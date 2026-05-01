import * as React from "react";
import Image from "next/image";
import { Container } from "../components/container";
import { ProjectCarousel } from "../components/projectCarousel";

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
  const illustrationImages = [
    illustrationDawn,
    illustrationDawnCastle,
    illustrationCastle,
    illustrationTent,
  ];

  return (
    <>
      <Container className="mb-8 md:mb-12 !w-full !max-w-full">
        <Image
          src={mainImage}
          alt=""
          className="w-full h-auto 3xl:rounded-3xl"
          loading="eager"
        />
      </Container>

      <Container className="my-8">
        <div className="prose">
          <h1 className="uppercase">Zophos</h1>
        </div>
        <div className="md:flex flex-row gap-24">
          <div className="prose md:w-1/2 my-3 md:my-0">
            <p>A visual identity for a rare natural ghost experience; The&nbsp;Drosoulites&nbsp;of&nbsp;Crete.</p>
            <p className="italic">Branding - Website Design - Illustration</p>
          </div>

          <div className="prose md:w-1/2">
            <h2 className="uppercase">Brief</h2>
            <p>“How can we unlock rarity as a journey into the extroadinary?” Pearlfisher Fresh Pearls 2024.</p>
            <p><b>TOOLS:</b> Photoshop, Illustrator, Figma</p>
          </div>
        </div>
      </Container>

      <Container className="my-8">
        <Image
          src={insight}
          alt=""
          className="rounded-3xl w-full h-auto"
        />
      </Container>

      <Container className="my-8">
        <div className="prose">
          <h2 className="uppercase me-8!">The Experiences</h2>
          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <Image
                src={dawnExperience}
                alt=""
                className="rounded-3xl w-full h-auto"
              />
            </div>
            <div>
              <Image
                src={duskExperience}
                alt=""
                className="rounded-3xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Container>

      <Container className="my-8">
        <div className="prose">
          <h2 className="uppercase me-8!">Visual Identity</h2>
          <div className="grid sm:grid-cols-2 gap-12">
            <Image
              src={brand}
              alt=""
              className="bg-white rounded-3xl w-full h-auto"
            />
            <Image
              src={moodboard}
              alt=""
              className="bg-white rounded-3xl w-full h-auto"
            />
            <Image
              src={process}
              alt=""
              className="bg-white rounded-3xl w-full h-auto"
            />
            <div className="prose">
              <h3 className="uppercase">Logo and Type:</h3>
              <p>Zophos means 'darkness' in Greek. The logo design shows the castle, sunrise, and sea. These elements encompass the environment of the experience.</p>
              <p>I chose a serif type for the logo and main headers to create a sense of luxury, pairing it with a sans serif to maintain modernity.</p>
            </div>
          </div>
        </div>
      </Container>

      <Container className="my-8">
        <div className="prose">
          <div className="grid sm:grid-cols-2 gap-12">
            <div className="prose">
              <h3 className="uppercase">Colour:</h3>
              <p>The colour palette has rich tones, drawn from the shades of the sunrise, sea, and Cretean art. I wanted to keep it dark yet bold, to attract a younger audience.</p>
              <h3 className="uppercase">Illustration:</h3>
              <p>The hand-switched appearance of the ghost illustrations were inspired by Cretean embroidery.</p>
            </div>
            <Image
              src={palette}
              alt=""
              className="bg-white rounded-3xl w-full h-auto"
            />
          </div>
        </div>
      </Container>

      <Container className="my-8">
        <ProjectCarousel images={illustrationImages} />
      </Container>

      <Container className="my-8">
        <Image
          src={poster}
          alt=""
          className="rounded-3xl w-full h-auto"
        />
      </Container>

      <Container className="mt-8 mb-16">
        <div className="prose">
          <h2 className="uppercase me-8!">Website</h2>
        </div>

        <div className="grid grid-cols-6 gap-6 sm:gap-x-12 sm:gap-y-8">
          <div className="col-span-6 md:col-span-3">
            <Image src={home} alt="" className="w-full h-full rounded-3xl" />
          </div>
          <div className="col-span-6 md:col-span-3">
            <Image src={experiences} alt="" className="w-full h-full rounded-3xl" />
          </div>
          <div className="col-span-6">
            <Image src={websiteMockup} alt="" className="w-full h-full rounded-3xl" />
          </div>
        </div>
      </Container>
    </>
  );
}
