import Link from "next/link";
import { footerItems } from './footerItems';
let i = 0;

export function Footer() {
  return (
    <footer className="max-w-7xl px-4 py-16 mx-auto bg-brand-raisin text-brand-off-white md:bg-inherit md:text-brand-raisin">
      <div className="flex flex-col md:flex-row gap-12">
        <h2 className="mx-auto md:mx-0">
          <span className="block font-serif lowercase text-4xl">Emily </span>
          <span className="block font-bold uppercase text-4xl ml-6">Willis</span>
        </h2>
        <nav className="flex flex-wrap w-full border-t-2 md:border-t-0 md:border-b-2 pt-12 justify-center md:justify-start gap-x-6 gap-y-4" id="nav">

          {Object.entries(footerItems).map(([path, { name, newTab }]) => {
            let target = newTab ? "_blank" : "";
            i++;
            return (
              <Link
                key={"footer" + i}
                href={path}
                target={target}
                className="md:self-end uppercase text-lg transition-colors hover:text-brand-blue"
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
