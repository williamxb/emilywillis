import * as React from "react";
import Link from 'next/link'
import Image from "next/image";
import BackgroundVideo from 'next-video/background-video';

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

import fullGraphic from '../videos/fullGraphic.mp4'
import logo from '../videos/logo.mp4'
import colourPalette from '../videos/colourPalette.mp4'

export default function Page() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-36 pt-16 mb-16">
        <div>
          <BackgroundVideo
            src={fullGraphic}
            className="rounded-xl mb-3"
          />
          <p>
            <span className="font-semibold">Tools: </span>
            <span className="font-light">Photoshop, Illustrator, After Effects</span>
          </p>
        </div>
        <div className="order-first md:order-last">
          <h1 className="glow glow-title mb-6 uppercase text-5xl font-semibold tracking-wide">Oasen</h1>
          <p className="mb-3 text-xl">A sensory-safe skincare brand empowering young neurodiverse individuals, fostering confidence and skin health. This project was a response to the RSA In Your Skin Brief 2023-24 in partnership with Bond&nbsp;&&nbsp;Coyne and The Skin Health Alliance.</p>
          <p className="font-light text-brand-raisin/75 mb-8">Branding - Experiential Design - Research</p>
          <h2 className="font-light text-xl uppercase mb-4">Awarded:</h2>
          <Link className="block max-w-80 group" target="_blank" href="https://www.thersa.org/student-design-awards/winners/2023-24/in-your-skin">
            <Image
              src={rsaAward}
              alt="RSA Student Design Awards 2024 - Shortlisted, achieved Highly Commended"
              className="group-hover:opacity-70 bg-brand-off-white"
              priority
            />
          </Link>
        </div>
      </div>

      <div className="prose-grid-3">
        <div>
          <h2 className="prose-header">Problem</h2>
          <div className="prose">
            <p>Positive self-esteem is a challenge for many young neurodivergent individuals. Perceptions of neurodivergence are largely negative. The sensory sensitivities and differences those with autism and ADHD face impact their skin and comfort. From textural aversions towards certain skincare products, to sensory overwhelm during in-store experiences, neurodivergent sensory differences are overlooked.</p>
          </div>
        </div>
        <div>
          <h2 className="prose-header">Insight</h2>
          <div className="prose">
            <p>Investigating further through research and questionnaires we discovered 84.2% of respondents also struggled with discomfort from certain textures against skin, with 73.7% experiencing low skin confidence. Our research showed perceptions of neurodiverse individuals are largely negative; respondents worrying that they appear weird, difficult or annoying to neurotypicals. Respondents expressed a strong desire for community, and acommodations.</p>
          </div>
        </div>
        <div>
          <h2 className="prose-header">Solution</h2>
          <div className="prose">
            <p>To empower people with sensory differences, we decided to create a sensory-safe skincare brand: Oasen. Launching a series of low-sensory pop-up stores in major cities, providing refuge from the hustle and bustle -- giving neurodivergents a safe space and a chance to connect with others that share the same issues.</p>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-12 lg:gap-36 pt-16">
        <div>
          <BackgroundVideo
            src={logo}
            className="rounded-xl"
          />
        </div>
        <div>
          <BackgroundVideo
            src={colourPalette}
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="pt-16 mb-16">
        <Image src={productHero} alt=""></Image>
      </div>

      <section>
        <h2 className="prose-header">Visual Strategy</h2>
        <div className="prose-grid-2">
          <div className="prose">
            <h3 className="uppercase">Logo and Type:</h3>
            <p>Oasen is a spin on the word 'Oasis', as we wanted our brand to be a sanctuary. Bringing this insight through the visual identity of the brand, the logo is in the shape of an oasis.</p>
            <p>I hand-lettered 'Oasen' as we wanted it to have a soft and hand-made look, and chose a simple secondary typeface - Lato - to compliment the lettering and create a clean look.</p>
          </div>
          <div className="prose">
            <h3 className="uppercase">Colour:</h3>
            <p>Our research into neurodiversity and colour informed our colour palette choices, avoiding bright and overstimulating colours, opting for a soft sunset-inspired colour palette.</p>
            <h3 className="uppercase">Illustration:</h3>
            <p>The blob illustrations were inspired by lava lamps - a visual stim tool for neurodiverse individuals - to create a soft and soothing, yet visually exciting design.</p>
          </div>
        </div>
      </section>

      <div className="pt-16 mb-16">
        <Image alt="" src={storefront}></Image>
      </div>

      <div className="grid sm:grid-cols-3 gap-12 pt-16 mb-16">
        <div>
          <Image alt="" src={productAd}></Image>
        </div>
        <div className="col-span-2">
          <Image alt="" src={billboard}></Image>
        </div>
      </div>

      <section>
        <h2 className="prose-header">Brand Strategy</h2>
        <div className="prose-grid-2">
          <div className="prose">
            <h3 className="uppercase">Products:</h3>
            <ul>
              <li>Sensory-safe with non-greasy textures and fragrance-free.</li>
              <li>Have fidget aspects built into the packaging, like the fidget ring on the neck of the cleanser bottle.</li>
              <li>Use fully recycled packaging and reef-safe filters in our sunscreen to reduce environmental impact.</li>
            </ul>
            <h3 className="uppercase">Imagery and Tone:</h3>
            <p>Using non-retouched imagery throughout every brand touchpoint is essential to our brand, as we want to celebrate a variety of skin types and textures to help young people feel affirmed.</p>
            <p>Additionally we wanted to have a positive brand tone, avoiding language like 'anti-blemish', and including positive affirmations on our packaging to encourage positive self talk.</p>
          </div>
          <div className="prose">
            <h3 className="uppercase">Pop-up and Experience:</h3>
            <p>We decided that a pop-up store was a trendy way to offer a safe space to nurture a neurodiverse community, and fully accommodate to sensory differences.</p>
            <p>The pop-up store experience would:</p>
            <ul>
              <li>Be low-sensory by using natural or warm lighting (no harsh lights), limited in-store capacity, fragrance-free environment, no music, and offer disposable earplugs, and having a seating area with stim toys.</li>
              <li>Offer testers for customers to trial the products.</li>
              <li>Have a conversation area to nurture community.</li>
              <li>Opportunity to purchase full-size products.</li>
              <li>Positive affirmation stickers with a QR code to the Oasen Discord community.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="grid sm:grid-cols-3 gap-12 pt-16">
        <div>
          <Image alt="" src={doypack}></Image>
        </div>
        <div>
          <Image alt="" src={moisturiserRefill}></Image>
        </div>
        <div>
          <Image alt="" src={moisturiser}></Image>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-12 pt-16 mb-16">
        <div>
          <Image alt="" src={sunscreen}></Image>
        </div>
        <div>
          <Image alt="" src={sachets}></Image>
        </div>
      </div>

      <p className="pt-16 mb-16 flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between">
        <span>Concept, Visual Identity, Research: Emily Willis and Julia Barbagallo. </span>
        <span>Packaging: Julia Barbagallo. </span>
        <span>Motion Design: Emily Willis.</span>
      </p>
    </>
  );
}
