import Link from 'next/link';
import Image from 'next/image';
import { footerItems } from './footerItems';

import logo from '../assets/logo.svg'

export function Footer() {
  return (
    <footer className="px-4 py-16 mx-auto bg-brand-raisin text-brand-off-white md:bg-inherit md:text-brand-raisin">
      <div className="flex flex-col md:flex-row gap-8">
        <Link href={'/'}>
          {/* @TODO: brand blue on hover (req: custom css, change to <svg>?) */}
          <Image alt="Emily Willis" src={logo} className='w-30' />
        </Link>

        <div className='w-full'>
          <nav className="flex flex-wrap w-full border-t-2 md:border-t-0 md:border-b-1 py-4 justify-center md:justify-start gap-x-10 gap-y-4" id="nav">
            {Object.entries(footerItems).map(([path, { name, newTab }]) => {
              let target = newTab ? "_blank" : "";
              return (
                <Link
                  key={`footer-${name}`}
                  href={path}
                  target={target}
                  className="md:self-end uppercase transition-colors hover:text-brand-blue"
                >
                  {name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </footer>
  )
}
