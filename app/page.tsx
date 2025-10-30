import { Metadata } from 'next'
import HomeLink from './components/homeLink'

import oasen1 from './assets/home/home-oasen-1.png'
import oasen2 from './assets/home/home-oasen-2.png'
import zophos1 from './assets/home/home-zophos-1.png'
import zophos2 from './assets/home/home-zophos-2.png'
import tales1 from './assets/home/home-tales-1.png'
import tales2 from './assets/home/home-tales-2.png'
import egg1 from './assets/home/home-creme-egg-1.png'
import egg2 from './assets/home/home-creme-egg-2.png'

export const metadata: Metadata = {
  description: "Emily Willis | Branding - Digital - Illustration - More | Designing for Positive Change",
};

export default function Page() {
  return (
    <>
      <section className="pt-10 pb-32 3xl: text-center">
        <h1 className="uppercase text-3xl sm:text-5xl md:text-6xl 3xl:text-[5rem]/25 font-extrabold sm:font-black">Designing for <br />Positive Im<span className="tracking-[-0.075em]">pa</span>ct</h1>
        <p className="sm:text-xl lowercase">Branding - Digital - Illustration - More</p>
      </section>

      <section className="block w-11/12 mx-auto 3xl:w-[1760px]">
        <div className="grid sm:grid-cols-2 gap-12">
          <HomeLink
            href="/oasen"
            image1={oasen1}
            image2={oasen2}
            priority={true}
            title="Oasen"
            subtitle="A skincare brand designed to cater to those with sensory differences."
            tags="Branding - Motion&nbsp;Graphics - Advertising"
          />

          <HomeLink
            href="/zophos"
            image1={zophos1}
            image2={zophos2}
            priority={true}
            title="Zophos"
            subtitle="Visual identity for a rare natural ghost experience; the Drosoulites of Crete."
            tags="Branding - Website&nbsp;Design - Illustration"
          />

          <HomeLink
            href="/gooville"
            image1={egg1}
            image2={egg2}
            title="Gooville"
            subtitle="A theoretical Creme Egg animated ad exploring the chocolatey world of Gooville."
            tags="Motion&nbsp;Design - Advertising - Illustration"
          />

          <HomeLink
            href="/cautionary-tales-for-children"
            image1={tales1}
            image2={tales2}
            title="Cautionary Tales for Children"
            subtitle="An interpretation of Hilaire Belloc's book for an adult audience."
            tags="Publication&nbsp;Design - Cover Design - Art&nbsp;Direction"
          />
        </div>
      </section>
    </>
  )
}
