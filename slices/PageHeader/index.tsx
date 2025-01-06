import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `PageHeader`.
 */
export type PageHeaderProps = SliceComponentProps<Content.PageHeaderSlice>;

/**
 * Component for "PageHeader" Slices.
 */
const PageHeader = ({ slice }: PageHeaderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for page_header (variation: {slice.variation})

      {slice.primary.left_content}
      <h1>{slice.primary.title}</h1>
      <PrismicRichText field={slice.primary.introduction} />
      {slice.primary.tools}
      {slice.primary.tags}
    </section>
  );
};

export default PageHeader;
