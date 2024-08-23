import * as React from "react";
import Link from "next/link";
import ImageWithLightbox from "../components/lightboxImage";

import zophos01 from '../images/zophos01.png';
import zophos02 from '../images/zophos02.png';
import zophos03 from '../images/zophos03.png';
import zophos04 from '../images/zophos04.png';
import zophos05 from '../images/zophos05.png';
import zophos06 from '../images/zophos06.png';
import zophos07 from '../images/zophos07.png';
import zophos08 from '../images/zophos08.png';
import zophos09 from '../images/zophos09.png';

export default function Page() {
  return (
    <section className="prose max-w-7xl">
      <h1 className="text-balance mb-2! text-3xl tracking-tighter font-normal!">
        Zophos · <i className="font-italic">Pearlfisher Competition Brief</i>
      </h1>
      <p>Naming / Branding / Illustration / Website Design</p>
      <p className="font-bold text-balance"><Link target="_blank" href="https://pearlfisher.com/news/pearlfisher-london-calling-creatives-for-fresh-pearls-2024-competition/">Pearlfisher 2024 Fresh Pearls | Design for Life: Once in a Blue Moon</Link></p>
      <p className="text-lg font-bold tracking-tight">'How can we unlock rarity as a journey into the extraordinary?'</p>
      <p className="text-lg">Legends unveiled with the rising sun. Meet nature's ghost army, the Drosoulites. Their shadows weave tales of their forgotten rebellion. In the glow of the dawn, the Drosoulites reveal their timeless dance between the realm of the living and the spirits that dwell beyond the veil of reality.</p>

      <ImageWithLightbox src={zophos01} alt="" priority={true} />

      <p className="text-lg">The Drosoulites - dew shadows - are a naturally occuring ghost army in Sfakia, Crete. During the Greek War of Independence, on 17th May 1828, a battle between Greeks and Turks at Frangokastello Castle occurred. 335 Greek soldiers were killed. These fallen rebels are said to haunt the area.</p>

      <ImageWithLightbox src={zophos02} alt="" />

      <p className="text-lg">Zophos means 'darkness' in Greek. I wanted to create a visual identity that looks refined yet mysterios, inspired by Cretean embroidery and visual culture. The target audience are Millenial and Gen Z travellers, who tend to travel to seek unique experiences.</p>

      <div className="grid grid-cols-2 gap-2 md:gap-4">
        <div className="grid-cols-subgrid col-span-2">
          <ImageWithLightbox src={zophos03} alt="" />
        </div>
        <div className="basis-1/2">
          <ImageWithLightbox src={zophos04} alt="" />
        </div>
        <div className="basis-1/2">
          <ImageWithLightbox src={zophos05} alt="" />
        </div>
        <div className="basis-1/2">
          <ImageWithLightbox src={zophos06} alt="" />
        </div>
        <div className="grid grid-cols-subgrid col-span-1 gap-2 md:gap-4 justify-start">
          <div>
            <ImageWithLightbox src={zophos07} alt="" />
          </div>
          <div>
            <ImageWithLightbox src={zophos08} alt="" />
          </div>
          <div>
            <ImageWithLightbox src={zophos09} alt="" className="h-full object-cover object-right-top cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
}
