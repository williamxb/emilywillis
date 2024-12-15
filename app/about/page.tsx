import { Metadata } from "next";
import Image from 'next/image';
import Link from "next/link";
import emily from "../images/emily.jpeg";
import rsaAward from '../images/oasen/rsaAward.png'


export const metadata: Metadata = {
  title: 'About Me',
};

export default function About() {
  return (
    <>
      <section className="grid grid-cols-5 mb-8 mt-16">
        <div className="col-span-2">
          <h1 className="glow glow-title text-5xl font-serif mb-4 lowercase">Hello!</h1>
          <h2 className="text-3xl font-semibold uppercase tracking-wide leading-snug mb-6">I'm Emily, bringing over a decade of design passion to every project</h2>
          <div className="prose">
            <p>Recently graduated from Loughborough University with a BA in Graphic Communication and Illustration. I excel at distilling complex ideas into compelling visual stories, with a passion for designing to create positive impact.</p>
            <p>I love challenging myself at the gym, anime, reading fantasy and cooking.</p>
          </div>
        </div>
        <span></span>
        <div>
          <div className="relative mb-[33px]">
            <Image src={emily} alt="" className="max-h-[32rem] overflow-hidden object-cover object-top"></Image>
            <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3">
              <Link className="lowercase bg-brand-blue p-14 rounded-full inline-block relative" href="/">
                <span className="text-brand-off-white w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">download<br></br>CV</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8" id="awards">
        <div className="flex flex-row items-center mb-2">
          <h2 className="text-4xl font-serif lowercase pr-6">Awards</h2>
          <div className="w-full">
            <hr className="border-t-2 border-brand-raisin" />
          </div>
        </div>

        <div className="flex flex-row justify-between max-w-5xl">
        <p>
            <span className="font-semibold">Highly Commended</span> - RSA Student Design Awards <span className="text-sm">2020 - 2024</span><br />
            <i>In Your Skin Brief</i>
          </p>
          <Link className="block max-w-80 group" href="/rsa">
            <Image
              src={rsaAward}
              alt=""
              className="group-hover:opacity-70 bg-brand-off-white"
            />
          </Link>
        </div>
      </section>

      <section className="mb-8" id="experience">
        <div className="flex flex-row items-center mb-2">
          <h2 className="text-4xl font-serif lowercase pr-6">Experience</h2>
          <div className="w-full">
            <hr className="border-t-2 border-brand-raisin" />
          </div>
        </div>

        <p>
          <span className="font-semibold">Junior Graphic Designer</span><br />
          Interactive Workshops - Placement Year</p>
      </section>

      <section className="mb-8" id="education">
        <div className="flex flex-row items-center mb-2">
          <h2 className="text-4xl font-serif lowercase pr-6">Education</h2>
          <div className="w-full">
            <hr className="border-t-2 border-brand-raisin" />
          </div>
        </div>

        <p>
          <span className="font-semibold">Loughborough University</span> <span className="text-sm">2020 - 2024</span><br />
          BA (Hons) Graphic Communication and Illustration<br />
          Diploma in Professional Studies (DPS)
        </p>
      </section>
      <section className="mb-8" id="skills">
        <div className="flex flex-row items-center mb-2">
          <h2 className="text-4xl font-serif lowercase pr-6">Skills</h2>
          <div className="w-full">
            <hr className="border-t-2 border-brand-raisin" />
          </div>
        </div>

        <p>
          Adobe Creative Suite <span className="text-sm">(including Photoshop, Illustrator, InDesign & After Effects)</span><br />
          Figma <br />
          Branding <br />
          Typography <br />
          Publication Design <br />
          Illustration <br />
          Photography 
        </p>
      </section>
    </>
  );
}
