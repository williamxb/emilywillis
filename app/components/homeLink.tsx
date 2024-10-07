import Link from "next/link"
import Image from "next/image"
import StaticImageData from "next/image"
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
    <div>
      <Link href={href}>
        <Image
          className="mb-6"
          priority={priority}
          placeholder="blur"
          sizes="(max-width: 1023px) 100vw, (max-width: 1800px) 80vw, 80vw"
          quality={100}
          src={image}
          alt=""
        />
        <p className="mb-4 text-xl lg:text-3xl font-semibold tracking-wider uppercase">{title}</p>
        <p className='mb-2 tracking-wider text-xl'>{subtitle}</p>
        <p className="text-lg font-light">{tags}</p>
      </Link>
    </div>
  )
}