import { Metadata } from "next";
import Image from 'next/image'
import emily from "../images/emily.jpeg"

export const metadata: Metadata = {
  title: 'About Me',
};

const skillItems = {
  'branding': {
    name: 'Branding',
  },
  'illustration': {
    name: 'Illustration',
  },
  'photography': {
    name: 'Photography',
  },
  'layout': {
    name: 'Layout Design',
  },
  'adobe': {
    name: 'Adobe Creative Cloud',
  }
}

const experienceItems = {
  'IW': {
    title: 'Interactive Workshops ',
    position: 'Junior Graphic Designer · Internship'
  }
}

const educationItems = {
  'loughborough': {
    title: 'Loughborough University',
    content:
      [<>
        <p className="mt-0! text-balance">
          <span className="text-xl">Loughborough University</span><br />
          <span className="font-bold">Bachelor of Arts (BA Hons)</span><br />
          Graphic Communication and Illustration<br />
          <span className="text-sm text-zinc-600 dark:text-zinc-400">2020 - 2024</span>
        </p>
        <p>
          <span className="font-bold">Diploma in Professional Studies (DPS)</span><br />
          <span className="text-sm text-zinc-600 dark:text-zinc-400">2022 - 2023</span>
        </p>
        <p>
          <span className="font-bold">Activities and societies:</span><br />
          Train and Gain Society · Media Rep
        </p>
      </>]
  }
}

export default function About() {
  return (
    <section className="md:grid md:auto-rows-fr grid-cols-2 gap-12">
      <div className="max-h-min">
        <Image
          className="w-1/2 mx-auto mb-12 md:mb-0 md:w-full sticky top-8"
          priority={true}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 70vw"
          src={emily}
          alt=""
        />
      </div>
      <div className="prose">
        <p className="text-2xl tracking-tight text-balance">Hi, I'm Emily, a graphic designer based in London with a particular interest in branding.</p>
        <p className="text-lg">I've been studying design since I was 14 and have now graduated from Loughborough University with a degree in Graphic Communication and Illustration. I'm currently looking for a full-time junior design position.</p>
        <p className="text-lg">As a self proclaimed nerdy gym-rat, you'll find me watching the latest anime, reading fantasy or lifting heavy objects and putting them back down again.</p>
        <p className="text-lg">Creativity has always been at the heart of what I enjoy and what my free time revolves around.</p>
        <p className="text-lg font-bold">Skills:</p>
        <ul className="flex flex-col space-x-0 pr-10 text-lg">
          {Object.entries(skillItems).map(([key, { name }]) => {
            return (
              <li key={key}>
                {name}
              </li>
            )
          })}
        </ul>
        <p className="text-lg font-bold">Experience:</p>
        <ul className="flex flex-col gap-4 p-0! list-none!">
          {Object.entries(experienceItems).map(([key, { title, position }]) => {
            return (
              <li key={key}>
                <span className="text-xl">{title}</span>
                <br></br>
                {position}
              </li>
            )
          })}
        </ul>
        <p className="text-lg font-bold">Education:</p>
        <ul className="flex flex-col gap-4 p-0! list-none!">
          {Object.entries(educationItems).map(([key, { title, content }]) => {
            return (
              <li key={key}>
                {content}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  );
}
