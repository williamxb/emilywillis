import Link from "next/link"
import Image from "next/image"
import { StaticImageData } from "next/image"
interface homeLinkProps {
  href: string,
  image: StaticImageData,
  priority?: boolean,
  title: string,
  subtitle: string,
  tags: string,
}

export default function HomeLink({ href, image, priority = false, title, subtitle, tags }: homeLinkProps) {
  return (
    <article>
      <Link className="group" href={href}>
        <Image
          className="mb-4 transition-opacity group-hover:opacity-80 bg-brand-off-white"
          priority={priority}
          placeholder="blur"
          sizes="(max-width: 1023px) 100vw, (max-width: 1800px) 80vw, 80vw"
          quality={100}
          src={image}
          alt=""
        />
        <h1 className="text-2xl tracking-wider font-semibold uppercase">{title}</h1>
        <h2 className="mb-2 text-balance">{subtitle}</h2>
        <p className="text-sm sm:text-md font-light">{tags}</p>
    </Link>
    </article>
  )
}