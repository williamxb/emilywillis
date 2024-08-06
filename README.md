# Graphic Designer Portfolio

This is my recently graduated partner's portfolio. She wanted a super simple and sleek design with capacity for lots of images and content, and together over a few weeks we came up with this.

## Features

- Next.js App Router + Vercel
- Optimized for SEO (sitemap, robots, JSON-LD schema)
- Tailwind CSS ([v4 alpha](https://tailwindcss.com/blog/tailwindcss-v4-alpha))
- Vercel Speed Insights / Analytics

## Getting Started

### Clone and Deploy

Prerequisites: Node.js, npm, pnpm.

Clone this repo and install local dependencies.

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

The site will be accessible at `http://localhost:3000`.

This site is deployed to [Vercel](https://vercel.com/) - ([Documentation](https://nextjs.org/docs/app/building-your-application/deploying)).

## Todo/Issues

- Build out components for repeated content
    - Homepage - link sections
    - About - lists
    - Page header sections
- Improve markup for tag section underneath titles (use ul element and CSS for tag separators)
- Add class `text-lg` to base style of `<p>` element, then fix any conflicts with smaller text use
- Investigate other methods of serving images as they are currently included in the repo which isn't ideal, and inflates the repo size and build cache significantly. Potential options include Git LFS, Vercel Blob, Amazon S3/competing cloud object storage
- CMS implementation??? (would be a great project)
- Issue with image size attrubutes
    - using the `next/image` component which _should_ be grabbing the correct width/height attributes automatically, but sometimes doesn't end up with the correct ones.
    - This only affects the blurred placeholder, and it assumes the correct aspect ratio once loaded. Slight CLS impact on a remotely fast connection and not particularly noticeable/detrimental - poor experience on a slow connection though.
- Image optimisation - optimisation has mostly been left to `next/image` which does well, but it'd be good to feed it more optimised images for even better results on smaller viewports.
