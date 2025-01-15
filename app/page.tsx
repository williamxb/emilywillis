import { Metadata } from 'next'
import HomeLink from './components/homeLink'
import Image from 'next/image'

import arrow from './assets/home/arrow.svg'
import oasen from './assets/home/homeOasen.jpg'
import zophos from './assets/home/homeZophos.jpg'
import keepdancing from './assets/home/homeKeepDancing.jpg'
import cautionarytales01 from './assets/home/homeTales.jpg'

export const metadata: Metadata = {
  description: "Emily Willis | Branding - Digital - Illustration - More | Designing for Positive Change",
};

export default function Page() {
  return (
    <>
      <section className="lg:py-16 text-center">
        {/* @TODO redo font size here in a less dumb way - scaling huge font size is causing issues on mobile*/}
        <h1 className="scale-75 sm:scale-100">
          <span className="block text-[103px] font-serif lowercase -mb-[4.5rem]">Emily</span>
          <span className="block text-[111px] font-bold uppercase">Willis</span>
        </h1>
        <p className="mb-16 text-2xl font-extralight lowercase">Branding - Digital - Illustration - More</p>
        <h2 className="text-3xl font-semibold tracking-widest uppercase">Designing for positive change</h2>
      </section>

      <section className="py-16 lg:pt-12">
        <h2 className="glow glow-xl pb-8 text-brand-off-white text-center lowercase font-serif text-6xl">Projects</h2>
        <Image src={arrow} alt="Arrow" className="mx-auto pb-16" />

        <div className="sm:p-4 sm:px-6 md:px-8 grid sm:grid-cols-2 gap-12 lg:gap-16 xl:gap-30 2xl:gap-40">
          <HomeLink
            href="/oasen"
            image={oasen}
            priority={true}
            title="Oasen"
            subtitle="A skincare brand designed to cater for those with sensory differences."
            tags="Branding · Experiential Design · Research"
          />

          <HomeLink
            href="/zophos"
            image={zophos}
            priority={true}
            title="Zophos"
            subtitle="Visual identity for a rare natural ghost experience; the Drosoulites of Crete."
            tags="Branding · Website Design · Illustration"
          />

          <HomeLink
            href="/cautionary-tales-for-children"
            image={cautionarytales01}
            title="Cautionary Tales for Children"
            subtitle="An interpretation of Hilaire Belloc's book for an adult audience."
            tags="Publication Design · Cover Design · Art Direction"
          />

          <HomeLink
            href="/keep-dancing"
            image={keepdancing}
            title="Keep Dancing"
            subtitle="A campaign encouraging elderly women to dance."
            tags="Publication Design · Branding · Illustration"
          />
        </div>
      </section>
    </>
  )
}
