import Image from 'next/image';

import Me from '../../public/img/headshot.JPG';
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
} from './Icons';

export default function Hero() {
  return (
    <section className="flex flex-col items-center px-5 gap-5 lg:grid lg:grid-cols-2 lg:container pb-10 lg:py-5">
      <div className="mb-4 lg:m-0 pt-14 lg:pt-10 justify-self-center	">
        <div className="h-48 w-48 lg:h-96 lg:w-96 border border-black object-cover rounded-full shadow-md relative">
          <Image
            src={Me}
            alt="My Headshot"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col text-center gap-y-5 lg:gap-y-10 text-purple-shade-4">
        <h1 className="w-max mx-auto text-5xl lg:text-7xl font-bold lg:no-underline">
          Tyson Suttle
        </h1>
        <h2 className="text-2xl lg:text-4xl lg:font-light lg:-mt-5">
          Software & Web Developer
        </h2>
        <SocialMediaLinks />
        <a
          href="/doc/Tyson_S_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 lg:m-0 px-12 py-3 max-w-max self-center 
        text-slate-900 font-medium border-2 border-current 
          shadow-med hover:shadow-lg rounded-md 
        hover:bg-slate-100 active:bg-slate-200 btn-animation`}
        >
          My Resume
        </a>
      </div>
    </section>
  );
}

function SocialMediaLinks() {
  return (
    <div className="hidden md:flex justify-center gap-x-8 text-slate-900">
      <a
        href="https://linkedin.com/in/tyson-suttle"
        rel="noopener noreferrer"
        target="_blank"
        className="w-12 h-12 hover:drop-shadow	btn-animation text-[#0A66C2]"
      >
        <LinkedInIcon />
      </a>
      <a
        href='mailto:TysonS.417@gmail.com, subject="Inquiry from website" '
        rel="noopener noreferrer"
        target="_blank"
        className="w-14 h-14 hover:drop-shadow hover:text-slate-700 btn-animation"
      >
        <EmailIcon />
      </a>
      <a
        href="https://github.com/Tyson910"
        rel="noopener noreferrer"
        target="_blank"
        className="w-12 h-12 hover:drop-shadow hover:text-slate-700 btn-animation"
      >
        <GitHubIcon />
      </a>
    </div>
  );
}
