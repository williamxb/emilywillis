import * as React from "react";
import Link from 'next/link'
import ImageWithLightbox from "../components/lightboxImage";

import cautionarytales01 from '../images/cautionarytales01.png'
import cautionarytales02 from '../images/cautionarytales02.png'
import cautionarytales03 from '../images/cautionarytales03.png'
import cautionarytales04 from '../images/cautionarytales04.png'
import cautionarytales05 from '../images/cautionarytales05.png'

export default function Page() {

  return (
    <section className="prose max-w-7xl">
      <h1 className="text-balance mb-2! text-3xl font-normal! tracking-tighter">
        Cautionary Tales for Children
      </h1>
      <p>Group Project / Layout Design / Cover Design / Art Design / Print</p>
      <p className="text-lg">This group project was to design an interpretation Hilaire Belloc's Cautionary Tales for Children suitable for an adult audience.</p>
      <p className="text-lg">Our initial research into popular book genres among young adults informed the direction of the design. Crime and thrillers were the most popular genres, so we took a true crime approach towards the book design.</p>
      <ImageWithLightbox src={cautionarytales01} alt="" priority={true} />
      <p className="text-lg">The book was illustrated and laid out as if it were the diary of a criminal, depicting the crimes he committed. All the children in the book face awful fates e.g. getting eaten by a lion.</p>
      <p className="text-lg">After researching criminal diaries, the illustrators produced progressively disturbing inky paintings and I created a layout to reflect the progressively deteriorating state of mind that this 'criminal' had throughout the book as he mudered more people.</p>
      <ImageWithLightbox src={cautionarytales02} alt="" />
      <ImageWithLightbox src={cautionarytales03} alt="" />
      <ImageWithLightbox src={cautionarytales04} alt="" />
      <ImageWithLightbox src={cautionarytales05} alt="" />

    </section>
  );
}

