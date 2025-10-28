import Link from 'next/link'
import Image from 'next/image'
import { navItems } from './navItems';

import logo from '../assets/logo.svg'

export function Navbar() {
  return (
    <div className="px-8 py-8 mx-auto flex flex-row gap-8 justify-normal">
      <Link href={'/'}>
        {/* @TODO: brand blue on hover (req: custom css, change to <svg>?) */}
        <Image alt="Emily Willis" src={logo} className='w-30'></Image>
      </Link>
      <nav className="flex flex-row gap-10" id="nav">
        {
          Object.entries(navItems).map(([path, { name, newTab }]) => {
          let target = newTab ? "_blank" : "";
          return (
            <Link
              key={name}
              href={path}
              target={target}
              className="pt-6 uppercase text-xl transition-colors hover:text-brand-blue"
            >
              {name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
