import Image from 'next/image';
import Link from 'next/link';
import hey from '../assets/about/hey.svg'
import emily from '../assets/about/emily.jpeg';

export default function Page() {
  return (
    <>
      <div className="block w-11/12 mx-auto 3xl:w-440 my-8">
        <div className="md:flex flex-row gap-24">
          <div className="md:w-3/5 my-3 md:my-0">
            <Image
              // @TODO: This should be an SVG
              src={hey}
              alt="Hey!"
              className='w-32 mb-6'
            ></Image>
            <h2 className="uppercase text-3xl sm:text-5xl font-extrabold mb-12">I'm Emily, bringing over a decade of design passion to every project.</h2>
            {/* <h2 className="text-4xl font-semibold uppercase tracking-wide leading-snug text-balance mb-6">I'm Emily, bringing over a decade of design passion to every project</h2> */}
            <div className="prose">
              <p>Recently graduated from Loughborough University with a BA in Graphic Communication and Illustration. I excel at distilling complex ideas into compelling visual stories, with a passion for designing to create positive impact.</p>
              <p>I love challenging myself at the gym, anime, reading fantasy and cooking.</p>
            </div>
          </div>

          <div className="md:w-2/5">
            <div className='relative'>
              <Image src={emily} alt="" className="relative overflow-hidden object-cover object-top" priority={true}></Image>
              <div className="absolute bottom-12 md:bottom-0 right-12 md:right-0 translate-x-1/3 translate-y-1/3">
                <Link className="bg-brand-blue p-14 rounded-full inline-block relative font-semibold" href="https://fnrngkfiwd3vkhpk.public.blob.vercel-storage.com/Emily%20Willis%20CV-vxueVtWmm3WREQFRc5S2sMaFwJ6sKN.pdf" target='_blank'>
                  <span className="text-brand-off-white w-fit absolute -translate-x-1/2 -translate-y-1/2 text-center leading-4.5">download<br></br>CV</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block w-11/12 mx-auto 3xl:w-440 my-8">
        <div className="md:flex flex-row gap-24">
          <div className="md:w-1/2 my-3 md:my-0">
            <div className="flex flex-row items-center mb-2">
              <h2 className="uppercase text-4xl font-extrabold pr-6">Awards</h2>
              <div className="w-full"><hr className="border-t-2 border-brand-raisin" /></div>
            </div>
            <div className="prose">
              <p>
                <b>Highly Commended</b> - RSA Student Design Awards<br></br>
                <i>'In Your Skin'</i> Brief 2023-24
              </p>
            </div>
            <div className="flex flex-row items-center mb-2 mt-12">
              <h2 className="uppercase text-4xl font-extrabold pr-6">Education</h2>
              <div className="w-full"><hr className="border-t-2 border-brand-raisin" /></div>
            </div>
            <div className="prose">
              <p>
                <b>Loughborough University</b> 2020-2024<br />
                BA (Hons) Graphic Communication and Illustration<br />
                Diploma in Professional Studies (DPS)
              </p>
            </div>
          </div>

          <div className="md:w-1/2 my-3 md:my-0">
            <div className="flex flex-row items-center mb-2">
              <h2 className="uppercase text-4xl font-extrabold pr-6">Experience</h2>
              <div className="w-full"><hr className="border-t-2 border-brand-raisin" /></div>
            </div>
            <div className="prose">
              <p>
                <b>Freelance Graphic Designer</b><br />
                Pet Care Sciences - Dec 2024 - April 2025
              </p>
            </div>
            <div className="prose">
              <p>
                <b>Volunteer Graphic Designer</b><br />
                Empathy Action - Jan 2025
              </p>
            </div>
            <div className="prose">
              <p>
                <b>Graphic Design Intern</b><br />
                Interactive Workshops - July 2022 - November 2022
              </p>
            </div>
            <div className="prose">
              <p>
                <b>Media Rep</b><br />
                Train & Gain Society - 2021-2022
              </p>
            </div>
          </div>
        </div>

        <div className="my-3 md:my-0">
          <div className="flex flex-row items-center mb-8 mt-12">
            <h2 className="uppercase text-4xl font-extrabold pr-6">Skills</h2>
            <div className="w-full"><hr className="border-t-2 border-brand-raisin" /></div>
          </div>
          <ul className='grid grid-flow-row grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-8'>
            <li className='border p-5 text-center rounded-full'>Photoshop</li>
            <li className='border p-5 text-center rounded-full'>Illustrator</li>
            <li className='border p-5 text-center rounded-full'>InDesign</li>
            <li className='border p-5 text-center rounded-full'>After Effects</li>
            <li className='border p-5 text-center rounded-full'>Figma</li>
            <li className='border p-5 text-center rounded-full'>Branding</li>
            <li className='border p-5 text-center rounded-full'>Typography</li>
            <li className='border p-5 text-center rounded-full'>Motion Design</li>
            <li className='border p-5 text-center rounded-full'>Advertising</li>
            <li className='border p-5 text-center rounded-full'>Layout Design</li>
            <li className='border p-5 text-center rounded-full'>Web Design</li>
            <li className='border p-5 text-center rounded-full'>Illustration</li>
            <li className='border p-5 text-center rounded-full'>Photography</li>
            <li className='border p-5 text-center rounded-full'>Video Editing</li>
          </ul>
        </div>
      </div >
    </>
  );
}
