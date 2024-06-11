import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/about': {
    name: 'About',
  },
  '/contact': {
    name: 'Contact',
  }
}

export function Navbar() {
  return (
    <aside className="lg:min-w-96 mb-16 tracking-tight">
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
                  className="transition-all text-lg hover:text-hover:text-neutral-800 dark:hover:text-neutral-200 hover:underline flex align-middle relative"
                >
                  {name}
                </Link>
              )
            })}
            <Link
              className="mt-6 flex items-center transition-all hover:text-hover:text-neutral-800 dark:hover:text-neutral-200 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/emily-willis-646bb2171/"
            >
              <p className="mr-2 text-lg">LinkedIn</p>
            </Link>

            <div className="flex flex-row">
              <Link
                className="flex items-center transition-all hover:text-hover:text-neutral-800 dark:hover:text-neutral-200 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
                href="mailto:willisjemily@gmail.com"
              >
                <p className="mr-2 text-lg">Email</p>
              </Link>
            </div>
          </div>
        </nav>

      </div>
    </aside>
  )
}
