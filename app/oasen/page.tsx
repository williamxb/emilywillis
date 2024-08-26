import * as React from "react";
import Link from 'next/link'
import ImageWithLightbox from "../components/lightboxImage";

import oasen01 from '../images/oasen01.png'
import oasen08 from '../images/oasen08.png'
import oasen07 from '../images/oasen07.png'
import oasen02 from '../images/oasen02.png'
import oasen04 from '../images/oasen04.png'
import oasen03 from '../images/oasen03.png'
import oasen05 from '../images/oasen05.png'

export default function Page() {

  return (
    <section className="prose max-w-7xl">
      <h1 className="text-balance mb-2! text-3xl font-normal! tracking-tighter">
        Oasen · <i className="font-italic">RSA In Your Skin Competition Brief</i>
      </h1>
      <p>Group Project / Naming / Branding / Experiential Design / Research</p>

      <p className="font-bold"><Link target="_blank" href="https://www.thersa.org/student-design-awards/winners/2023-24/In-your-skin">Highly Commended for RSA In Your Skin Design Award</Link></p>

      <p className="text-lg">Oasen is a skincare brand for young neurodiverse individuals, offering a sensory-safe product range and an accommodating pop-up store experience that creates an environment to foster confidence and skin health.</p>

      <ImageWithLightbox src={oasen01} alt="" priority={true} />

      <p className="text-lg">My group partner Ju and I decided to focus on sensory issues that neurodiverse people face. Our solution was to create a brand, Oasen, which shows skin diversity, has sensory-safe products, creates community through a pop-up store and or line, uses positive language and is accessible.</p>

      <ImageWithLightbox src={oasen08} alt="" />

      <p className="text-lg">Oasen was a research heavy project, ensuring that we understood the audience as well as possible, taking their feedback into consideration when we planned the pop-up shop experience and designed the brand.</p>

      <p className="text-lg">We decided to name the brand Oasen as a spin on the word 'Oasis' meaning a safe space, a sanctuary.</p>

      <ImageWithLightbox src={oasen07} alt="" />

      <p className="text-lg">The blob illustrations were inspired by lava lamps, which are a sensory light, and can be used as a visual stim.</p>

      <div className="flex-auto flex flex-row mb-6 gap-6">
        <div className="grow">
          <ImageWithLightbox src={oasen02} alt="" className="w-full h-full object-cover cursor-pointer" />
        </div>
        <div className="grow">
          <ImageWithLightbox src={oasen04} alt="" className="w-full object-cover cursor-pointer" />
        </div>
      </div>
      <div className="flex-auto flex flex-row gap-6">
        <div className="grow">
          <ImageWithLightbox src={oasen03} alt="" className="w-full h-full object-cover cursor-pointer" />
        </div>
        <div className="grow ">
          <ImageWithLightbox src={oasen05} alt="" className="w-full h-full object-cover cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
