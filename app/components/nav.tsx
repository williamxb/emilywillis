import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
    ulClass: ''
  },
  '/about': {
    name: 'About',
    ulClass: ''
  },
  'https://www.linkedin.com/in/emily-willis-646bb2171/': {
    name: 'LinkedIn',
    ulClass: 'mt-6'
  },
  'mailto:willisjemily@gmail.com': {
    name: 'Email',
    ulClass: ''
  }
}

export function Navbar() {
  return (
    <aside className="lg:min-w-96 mb-16 tracking-tight">
      <div className="pr-6 sticky top-8">
        <Link href="/"><h1 className="text-balance text-4xl tracking-tight mb-6">Emily Willis</h1></Link>
        <h2 className="text-lg mb-6 max-width-96 text-balance">London-based Graphic Designer, specialised in branding and illustration.</h2>
        <nav
          className="flex flex-col items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <ul className="flex flex-col space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name, ulClass }]) => {
              return (
                <li key={name} className={ulClass}>
                  <Link
                    href={path}
                    className="transition-all text-lg hover:text-hover:text-neutral-800 dark:hover:text-neutral-200 hover:underline flex align-middle relative"
                  >
                    {name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
