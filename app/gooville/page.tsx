import { Suspense } from "react";
import Image from "next/image";
import Video from "next-video";
import { Container } from "../components/container";

import animation from '../../videos/goovilleAnimation.mp4'
import mindmap from '../assets/gooville/mindmap.png'
import storyboard from '../assets/gooville/storyboard.png'

// @TODO: Test if this actually helps with CLS
const fallback = (
  <div className="aspect-video w-full"></div>
)

export default function Page() {
  return (
    <>
      <Container className="mb-8 md:mb-12 !w-full !max-w-full">
        <Suspense fallback={fallback}>
          <Video
            className="3xl:rounded-3xl overflow-hidden shadow-xl 3xl:shadow-xl"
            src={animation}
            loop
            controls />
        </Suspense>
      </Container>

      <Container className="my-8">
        <div className="prose">
          <h1 className="uppercase">Gooville</h1>
        </div>
        <div className="md:flex flex-row gap-24">
          <div className="prose md:w-1/2 my-3 md:my-0">
            <p>A theoretical Cadbury Creme Egg social media campaign (pre rebrand) exploding the chocolatey world of Gooville.</p>
            <p className="italic">Advertising - Animation - Social Media</p>
          </div>

          <div className="prose md:w-1/2">
            <h3 className="uppercase">Brief:</h3>
            <p>Produce an animated advert for Cadbury Creme Egg that is 1s or under for social media.</p>
            <p><b>TOOLS:</b> Photoshop, After Effects</p>
          </div>
        </div>
      </Container>

      <Container className="mt-8 mb-16">
        <div className="prose">
          <h2 className="uppercase mb-8!">Pop-up Store and Product Advertising</h2>
        </div>

        <div className="grid grid-cols-6 gap-6 sm:gap-x-12 sm:gap-y-8">
          <div className="col-span-6 md:col-span-3">
            <Image
              src={mindmap}
              alt=""
              className="rounded-3xl"
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <Image
              src={storyboard}
              alt=""
              className="rounded-3xl"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
