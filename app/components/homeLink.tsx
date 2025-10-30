import Link from "next/link"
import Image from "next/image"
import { StaticImageData } from "next/image"
interface homeLinkProps {
  href: string,
  image1: StaticImageData,
  image2: StaticImageData,
  priority?: boolean,
  title: string,
  subtitle: string,
  tags: string,
}

export default function HomeLink({ href, image1, image2, priority = false, title, subtitle, tags }: homeLinkProps) {
  return (
    <article>
      <Link className="block group relative" href={href}>
        {/* Cover image */}
        <Image
          className="mb-8 transition-opacity rounded-3xl"
          priority={priority}
          placeholder="blur"
          sizes="(max-width: 1023px) 100vw, (max-width: 1800px) 80vw, 80vw"
          quality={100}
          src={image1}
          alt=""
        />
        <Image
          className="absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-active:opacity-100 rounded-3xl"
          sizes="(max-width: 1023px) 100vw, (max-width: 1800px) 80vw, 80vw"
          quality={100}
          src={image2}
          alt=""
        />

        <div className="ms-8">
          <h1 className="text-2xl md:text-4xl tracking-wider font-black uppercase mb-2 ">{title}</h1>
          <h2 className="font-light mb-2 text-balance tracking-wider">{subtitle}</h2>
          <p className="text-sm sm:text-md italic font-light tracking-wider">{tags}</p>
        </div>
    </Link>
    </article>
  )
}