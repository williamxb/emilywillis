import Link from "next/link"
import Image, { StaticImageData } from "next/image"

interface homeLinkProps {
  href: string,
  image: StaticImageData,
  priority?: boolean,
  title: string,
  subtitle: string,
  content: string,
  callout?: string,
}

export default function HomeLink({ href, image, priority = false, title, subtitle, content, callout }: homeLinkProps) {
  return (
    <div className="mb-10">
      <Link href={href}>
        <Image
          priority={priority}
          placeholder="blur"
          sizes="(max-width: 1023px) 100vw, (max-width: 1800px) 80vw, 80vw"
          quality={100}
          src={image}
          alt=""
        />
        <div className="flex flex-col md:flex-row justify-between tracking-tight border-b p-2 mb-1">
          <p className="w-fit text-2xl">{title}</p>
          <p className="w-fit text-right text-lg lg:text-2xl font-semilight lg:font-normal">{subtitle}</p>
        </div>
        <div className="lg:w-1/2 px-2">
          <p className='mb-2'>{content}</p>
          <p><i>{callout}</i></p>
        </div>
      </Link>
    </div>
  )
}