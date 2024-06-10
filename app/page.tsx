import Image from 'next/image'
import Link from 'next/link'

import oasen01 from './images/oasen01.png'
import zophos01 from './images/zophos01.png'
import keepdancing01 from './images/keepdancing01.png'

export default function Page() {
  return (
    <section>
      <div className="mb-10">
        <Link href="/oasen">
          <Image
            src={oasen01}
            width={3118}
            height={1754}
            alt="Picture of the author"
          />
          <div className="flex justify-between text-2xl tracking-tight border-b p-2 mb-1">
            <p className="w-fit">Oasen</p>
            <p className="w-fit">Competition Brief</p>
          </div>
          <div className="w-1/2 px-2">
            <p className='mb-2'>A skincare brand designed to cater to those with sensory differences.</p>
            <p><i>Shortlisted for RSA In Your Skin Design Award</i></p>
          </div>
        </Link>
      </div>
      <div className="mb-10">
        <Link href="/zophos">
          <Image
            src={zophos01}
            width={1637}
            height={1158}
            alt="Picture of the author"
          />
          <div className="flex justify-between text-2xl tracking-tight border-b p-2 mb-1">
            <p className="w-fit">Zophos - The Drosulites</p>
            <p className="w-fit">Competition Brief</p>
          </div>
          <div className="w-1/2 px-2">
            <p className='mb-2'>Visual identity for a rare natural ghost experience - The&nbsp;Drosulites&nbsp;of&nbsp;Crete.</p>
          </div>
        </Link>
      </div>
      <div className="mb-10">
        <Link href="/keepdancing">
          <Image
            src={keepdancing01}
            width={2573}
            height={1448}
            alt="Picture of the author"
          />
          <div className="flex justify-between text-2xl tracking-tight border-b p-2 mb-1">
            <p className="w-fit">Keep Dancing</p>
            <p className="w-fit">Personal Project</p>
          </div>
          <div className="w-1/2 px-2">
            <p className='mb-2'>A campaign to encourage elderly women to dance.</p>
          </div>
        </Link>
      </div>
    </section>
  )
}
