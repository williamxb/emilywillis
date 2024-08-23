import Image from 'next/image'
import Link from 'next/link'
import HomeLink from './components/homeLink'

import oasen from './images/oasen07.png'
import zophos from './images/zophos01.png'
import keepdancing from './images/keepdancing01.png'

export default function Page() {
  return (
    <section className="max-w-7xl">
      <HomeLink
        href="/oasen"
        image={oasen}
        priority={true}
        title="Oasen"
        subtitle="Competition Brief"
        content="A skincare brand designed to cater to those with sensory differences."
        callout="Highly Commended for RSA In Your Skin Design Award"
      />

      <HomeLink
        href="/zophos"
        image={zophos}
        title="Zophos · The&nbsp;Drosoulites"
        subtitle="Competition Brief"
        content="Visual identity for a rare natural ghost experience; The&nbsp;Drosoulites&nbsp;of&nbsp;Crete."
      />

      <HomeLink
        href="/keep-dancing"
        image={keepdancing}
        title="Keep Dancing"
        subtitle="Personal Project"
        content="A campaign to encourage elderly women to dance."
      />
    </section>
  )
}
