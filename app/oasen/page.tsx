import { Suspense } from "react";


import Link from 'next/link'
import Image from "next/image";
import Video from 'next-video';

import rsaAward from '../assets/oasen/rsaAward.png'
import billboard from '../assets/oasen/billboard.jpg'
import doypack from '../assets/oasen/doypack.jpg'
import process from '../assets/oasen/logo-process.png'
import moisturiser from '../assets/oasen/moisturiser.jpg'
import moisturiserRefill from '../assets/oasen/moisturiserRefill.jpg'
import moodboard from '../assets/oasen/moodboard.png'
import pitch from '../assets/oasen/pitch.png'
import productAd from '../assets/oasen/productAd.jpg'
import productHero from '../assets/oasen/productHero.jpg'
import sachets from '../assets/oasen/sachets.jpg'
import sunscreen from '../assets/oasen/sunscreen.jpg'
import storefront from '../assets/oasen/storefront.jpg'

import fullGraphic from '../../videos/fullGraphic.mp4'
import logo from '../../videos/logo.mp4'
import colourPalette from '../../videos/colourPalette.mp4'

// @TODO: Test if this actually helps with CLS
const fallback = (
  <div className="aspect-video w-full"></div>
)

export default function Page() {
  return (
    <>
      <div className="block mx-auto 3xl:rounded-3xl 3xl:w-[1760px] mb-8 md:mb-12">
        <Suspense fallback={fallback}>
          <Video
            className="3xl:rounded-3xl overflow-hidden shadow-xl 3xl:shadow-xl"
            src={fullGraphic}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
        </Suspense>
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">
        <div className="prose">
          <h1 className="uppercase">Oasen</h1>
        </div>
        <div className="md:flex flex-row gap-24">
          <div className="prose md:w-1/2 my-3 md:my-0">
            <p>A sensory-safe skincare brand empowering young neurodiverse individuals, fostering confidence and skin health.</p>
            <p className="italic">Branding - Advertising - Motion Graphics</p>
            <h2 className="uppercase">Awarded</h2>
            <Link className="block max-w-80 group" target="_blank" href="https://www.thersa.org/student-design-awards/winners/2023-24/in-your-skin">
              <Image
                src={rsaAward}
                alt="RSA Student Design Awards 2024 - Shortlisted, achieved Highly Commended"
                className="rounded group-hover:opacity-70 bg-brand-off-white"
                priority
              />
            </Link>
          </div>

          <div className="prose md:w-1/2">
            <h2 className="uppercase">Brief</h2>
            <p>How we might increase the skin confidence of every young person to enable their unique identity to flourish?</p>
            <h2 className="uppercase">Team</h2>
            <p>
              Visual Identity, Advertising, Motion Design - Emily Willis<br />
              3D and Packaging - Julia Barbagallo<br />
              Research and Concept - Julia and Emily
            </p>
          </div>
        </div>
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">
        <Image
          aria-describedby="pitch"
          src={pitch}
          alt=""
          className="rounded-3xl"
        />
        <div className="sr-only" id="pitch">
          <h2>The Solution</h2>
          <h3>Problem</h3>
          <p>Positive self-esteem is a challenge for many young neurodivergent individuals. The sensory sensitivities and differences those with autism and ADHD face impact their skin and comfort. From textural aversions toward certain skincare products, to sensory overwhelm during in-store experiences, neurodivergent sensory differences are overlooked.</p>
          <h3>Process</h3>
          <p>Investigating through research and questionnaires we discovered 83.3% of respondents also struggled with discomfort from certain textures against skin, with 72.2% experiencing low skin confidence. Further research showed that public perceptions of neurodiverse individuals are largely negative; respondents worrying that they appear weird, difficult or annoying to neurotypicals.</p>
          <h3>Proposal</h3>
          <p>To empower people with sensory differences, we decided to create a sensory-safe skincare brand - Oasen. Launching a series of low-sensory pop-up stores in major cities, providing refuge from the hustle and bustle - giving neurodivergents a safe space and a chance to connect with others that share the same issues.</p>
        </div>
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">
        <div className="prose">
          <h2 className="uppercase me-8!">Visual Identity</h2>
          <div className="grid sm:grid-cols-2 gap-12">
            <Video
              src={logo}
              className="rounded-3xl overflow-hidden"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            />
            <Image
              src={process}
              alt=""
            />
            <Image
              src={moodboard}
              alt=""
            />
            <Video
              src={colourPalette}
              className="rounded-3xl overflow-hidden"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            />
          </div>
        </div>
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">
        <div className="md:flex flex-row gap-24">
          <div className="prose md:w-1/2 my-3 md:my-0">
            <h3 className="uppercase">Logo and Type</h3>
            <p>Oasen (Oasis) - a sanctuary. I brought the name into the logo through the soft oasis shape.</p>
            <p>I hand-lettered 'Oasen' and chose a simple secondary typeface to compliment the lettering.</p>
          </div>
          <div className="prose md:w-1/2 my-3 md:my-0">
            <h2 className="uppercase">Colour</h2>
            <p>We opted for a soft sunset-inspired palette, avoiding bright and overstimulating colours.</p>
            <h2 className="uppercase">Illustration</h2>
            <p>The blob illustrations were inspired by lava lamps - a visual stim tool for neurodiverse individuals.</p>
          </div>
        </div>
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">
        <div className="prose">
          <h2 className="uppercase mb-8!">Pop-up Store and Product Advertising</h2>
          <Image
            src={storefront}
            alt=""
            className="w-full h-auto rounded-3xl"
          />
        </div>

      </div>
      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">
        <div className="flex flex-row gap-12">
          <div className="w-1/3">
            <Image alt="" src={productAd} className="rounded-3xl h-full"></Image>
          </div>
          <div className="w-2/3">
            <Image alt="" src={billboard} className="rounded-3xl h-full object-cover object-left"></Image>
          </div>
        </div>
      </div>

      <div className="block w-11/12 mx-auto 3xl:w-[1760px] my-8">
        <div className="grid sm:grid-cols-3 gap-12">
          <div>
            <Image alt="" src={doypack} className="rounded-3xl"></Image>
          </div>
          <div>
            <Image alt="" src={moisturiserRefill} className="rounded-3xl"></Image>
          </div>
          <div>
            <Image alt="" src={moisturiser} className="rounded-3xl"></Image>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-12 pt-16 mb-16">
          <div>
            <Image alt="" src={sunscreen} className="rounded-3xl"></Image>
          </div>
          <div>
            <Image alt="" src={sachets} className="rounded-3xl"></Image>
          </div>
        </div>
      </div>
    </>
  );
}
