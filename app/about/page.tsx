import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Me',
};

const skillItems = {
  '1': {
    name: 'Branding',
  },
  '2': {
    name: 'Illustration',
  },
  '3': {
    name: 'Photography',
  },
  '4': {
    name: 'Layout Design',
  },
  '5': {
    name: 'Adobe Creative Cloud',
  }
}

const experienceItems = {
  '1': {
    title: 'Interactive Workshops ',
    position: 'Junior Graphic Designer · Internship'
  }
}
  
export default function About() {
  return (
    <section className="flex flex-row">
      <div className="">
        
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
        <ul className="flex flex-col p-0! list-none!">
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
      </div>
    </section>
  );
}
