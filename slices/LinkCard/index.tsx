import { Content } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `LinkCard`.
 */
export type LinkCardProps = SliceComponentProps<Content.LinkCardSlice>;

/**
 * Component for "LinkCard" Slices.
 */
const LinkCard = ({ slice }: LinkCardProps): JSX.Element => {
  return (
    <article>
      <PrismicNextLink className="group" field={slice.primary.link}>
        <PrismicNextImage
          field={slice.primary.image}
          className="mb-4 transition-opacity group-hover:opacity-80 bg-brand-off-white"
          sizes="(max-width: 1023px) 100vw, (max-width: 1800px) 80vw, 80vw"
          quality={100}
          alt=""
        />
        <h1 className="text-xl tracking-wider font-semibold uppercase">{slice.primary.title}</h1>
        <h2 className="mb-2 text-balance">{slice.primary.subtitle}</h2>
        <p className="text-sm sm:text-md font-light">{slice.primary.tags}</p>
      </PrismicNextLink>
    </article>
  );
};

export default LinkCard;
