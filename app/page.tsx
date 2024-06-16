import Image from 'next/image'
import Link from 'next/link'

import oasen from './images/oasen01.png'
import zophos from './images/zophos01.png'
import keepdancing from './images/keepdancing01.png'

export default function Page() {
  return (
    <section className="max-w-7xl">
      <div className="mb-10">
        <Link href="/oasen">
          <Image
            priority={true}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 70vw"
            src={oasen}
            alt=""
          />
          <div className="flex flex-col md:flex-row justify-between tracking-tight border-b p-2 mb-1">
            <p className="w-fit text-2xl">Oasen</p>
            <p className="w-fit text-right text-lg lg:text-2xl font-semilight lg:font-normal">Competition Brief</p>
          </div>
          <div className="lg:w-1/2 px-2">
            <p className='mb-2'>A skincare brand designed to cater to those with sensory differences.</p>
            <p><i>Shortlisted for RSA In Your Skin Design Award</i></p>
          </div>
        </Link>
      </div>
      <div className="mb-10">
        <Link href="/zophos">
          <Image
            src={zophos}
            placeholder="blur"
            alt=""
          />
          <div className="flex flex-col md:flex-row justify-between tracking-tight border-b p-2 mb-1">
            <p className="w-fit text-2xl">Zophos - The&nbsp;Drosoulites</p>
            <p className="w-fit text-right text-lg lg:text-2xl font-semilight lg:font-normal">Competition Brief</p>
          </div>
          <div className="lg:w-1/2 px-2">
            <p className='mb-2'>Visual identity for a rare natural ghost experience - The&nbsp;Drosoulites&nbsp;of&nbsp;Crete.</p>
          </div>
        </Link>
      </div>
      <div className="mb-10">
        <Link href="/keep-dancing">
          <Image
            src={keepdancing}
            placeholder="blur"
            alt=""
          />
          <div className="flex flex-col md:flex-row justify-between tracking-tight border-b p-2 mb-1">
            <p className="w-fit text-2xl">Keep Dancing</p>
            <p className="w-fit text-right text-lg lg:text-2xl font-semilight lg:font-normal">Personal Project</p>
          </div>
          <div className="lg:w-1/2 px-2">
            <p className='mb-2'>A campaign to encourage elderly women to dance.</p>
          </div>
        </Link>
      </div>
    </section>
  )
}
