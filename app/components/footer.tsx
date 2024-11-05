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
  }
}

import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="mt-96 mb-24 flex">
      <div className="w-container m-auto mb-0 flex flex-row">
        <h1 className="text-6xl w-auto pr-6">Emily<br></br>Willis</h1>
        <nav className="w-full p-4 sm:px-6 md:px-16 flex flex-row gap-16 border-b-2 " id="nav">
          {Object.entries(navItems).map(([path, { name, newTab }]) => {
            let target = newTab ? "_blank" : "";
            return (
              <Link
                href={path}
                target={target}
                className="uppercase text-lg self-end transition-colors hover:text-brand-blue"
              >
                {name}
              </Link>
            )
          })}
        </nav>
      </div>
    </footer>
  )
}
