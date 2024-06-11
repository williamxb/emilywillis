import Image from 'next/image'
import link from 'next/link'

import zophos01 from '../images/zophos01.png'

export default function Page() {
  return (
    <section className="prose max-w-7xl">
      <h1 className="title mb-2! text-3xl tracking-tighter font-normal!">
        Zophos - <i className="font-italic">Pearlfisher Competition Brief</i>
      </h1>
      <p>Naming / Branding / Illustration / Website Design</p>
      <p className="text-lg font-bold tracking-tight">'How can we unlock rarity as a journey into the extraordinary?'</p>
      <p className="text-lg">Legends unveiled with the rising sun. Meet nature's ghost army, the drosoulites. Their shadows weave tales of their forgotten rebellion. In the glow of the dawn, the drosoulites reveal their timeless dance between the realm of the living and the spirits that dwell beyond the veil of reality.</p>
      <Image
        src={zophos01}
        alt=""
      />
      <p className="text-lg">The drosoulites - dew shadows - are a naturally occuring ghost army in Sfakia, Crete. During the Greek War of Independence, on 17th May 1828, a battle between Greeks and Turks at Frangokastello Castle occurred. 335 Greek soldiers were killed. These fallen rebels are said to haunt the area.</p>

    </section>
  );
}
