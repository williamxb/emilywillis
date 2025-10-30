import Link from 'next/link'
import Image from 'next/image'
import { navItems } from './navItems';

import logo from '../assets/logo.svg'

export function Navbar() {
  return (
    <div className="p-2 md:p-6 mx-auto flex flex-row gap-8 justify-normal">
      <Link href={'/'}>
        {/* @TODO: brand blue on hover (req: custom css, change to <svg>?) */}
        <Image alt="Emily Willis" src={logo} className='w-20'></Image>
      </Link>
      <nav className="flex flex-row gap-8" id="nav">
        {
          Object.entries(navItems).map(([path, { name, newTab }]) => {
          let target = newTab ? "_blank" : "";
          return (
            <Link
              key={name}
              href={path}
              target={target}
              className="pt-4 uppercase transition-colors hover:text-brand-blue"
            >
              {name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
