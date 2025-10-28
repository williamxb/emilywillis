import { Suspense } from "react";

import * as React from "react";
import Link from 'next/link'
import Image from "next/image";
import BackgroundVideo from 'next-video/background-video';
import Video from 'next-video';

import rsaAward from '../assets/oasen/rsaAward.png'
import billboard from '../assets/oasen/billboard.jpg'
import doypack from '../assets/oasen/doypack.jpg'
import moisturiser from '../assets/oasen/moisturiser.jpg'
import moisturiserRefill from '../assets/oasen/moisturiserRefill.jpg'
import productAd from '../assets/oasen/productAd.jpg'
import productHero from '../assets/oasen/productHero.jpg'
import sachets from '../assets/oasen/sachets.jpg'
import sunscreen from '../assets/oasen/sunscreen.jpg'
import storefront from '../assets/oasen/storefront.jpg'

import fullGraphic from '../../videos/fullGraphic.mp4'
import logo from '../../videos/logo.mp4'
import colourPalette from '../../videos/colourPalette.mp4'

export default function Page() {
  return (
    <>
      <div className="mb-12">
        <Suspense fallback=""> { /* loading placeholder */}
          <Video
            src={fullGraphic}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
        </Suspense>
      </div>

      <div className="container">

        <div className="md:flex flex-row gap-24">
          <div className="prose w-1/2">
            <h1 className="uppercase">Oasen</h1>
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

          <div className="prose w-1/2">
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

      <div className="container">the solution image</div>

      <div className="container">
        <p>4 images</p>
      </div>

      <div className="container">
        <div className="md:flex flex-row gap-24">
          <div className="prose w-1/2">
            <h2 className="uppercase">Logo and Type:</h2>
            <p>Oasen (Oasis) - a sanctuary. I brought the name into the logo through the soft oasis shape.</p>
            <p>I hand-lettered 'Oasen' and chose a simple secondary typeface to compliment the lettering.</p>
          </div>
        </div>
        <div className="prose w-1/2">
          <h2 className="uppercase">Colour:</h2>
          <p>We opted for a soft sunset-inspired palette, avoiding bright and overstimulating colours.</p>
          <h2 className="uppercase">Illustration:</h2>
          <p>The blob illustrations were inspired by lava lamps - a visual stim tool for neurodiverse individuals.</p>
        </div>
      </div>

      <div className="container">
        <div className="prose">
          <h2 className="uppercase">Pop-up Store and Product Advertising:</h2>
        </div>
      </div>
    </>
  );
}
