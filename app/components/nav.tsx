import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/contact': {
    name: 'contact',
  }
}

export function Navbar() {
  return (
    <aside className="min-w-96 mb-16 tracking-tight">
      <div className="pr-6 sticky top-8">
        <h1 className="text-4xl tracking-tight mb-6">Emily Willis</h1>
        <p className="text-lg mb-6 max-width-96">London-based Graphic Designer, specialised in branding and illustration.</p>
        <nav
          className="flex flex-col items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-col space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-hover:text-neutral-800 dark:hover:text-neutral-200 hover:underline flex align-middle relative"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
        <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/emily-willis-646bb2171/"
            >
              <p className="ml-2 h-7">LinkedIn</p>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
