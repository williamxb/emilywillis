import HomeLink from './components/homeLink'

import oasen from './images/oasen-home.png'
import zophos from './images/zophos-home.png'
import keepdancing from './images/keepdancing-home.png'
import cautionarytales01 from './images/cautionarytales-home.png'

export default function Page() {
  return (
    <section className="p-4 sm:px-6 md:px-8 grid grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-30 2xl:gap-40">
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
    </section>
  )
}
