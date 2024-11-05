import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
    newTab: false
  },
  '/about': {
    name: 'About',
    newTab: false
  },
  'https://www.linkedin.com/in/emwillis/': {
    name: 'LinkedIn',
    newTab: true
  },
  'mailto:willisjemily@gmail.com': {
    name: 'Email',
    newTab: false
  },
  '#': {
    name: 'Download CV',
    newTab: true
  }
}

export function Navbar() {
  return (
    <div className="max-w-container mx-auto">
      <nav className="p-4 sm:px-6 md:px-8 flex flex-row gap-4 md:gap-6" id="nav">
        {Object.entries(navItems).map(([path, { name, newTab }]) => {
          let target = newTab ? "_blank" : "";
          return (
            <Link
              href={path}
              target={target}
              className="uppercase text-lg transition-colors hover:text-brand-blue"
            >
              {name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
