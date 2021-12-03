import Image from 'next/image';

import Me from '../../public/img/miniScreenshot.jpg';
import {
  GitHubIcon,
  LinkedInIcon,
} from './Icons';

export default function Hero() {
  return (
    <section className="flex flex-col items-center px-5 gap-5 lg:grid lg:grid-cols-2 lg:container lg:py-20 lg:mb-20 pb-10 lg:pb-5">
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
      <div className="flex flex-col text-center gap-y-5 lg:gap-y-10 text-[#2C0E44]">
        <h1 className="w-max mx-auto text-5xl lg:text-7xl font-bold lg:no-underline">
          Tyson Suttle
        </h1>
        <h2 className="text-2xl lg:text-4xl lg:font-light lg:-mt-5">
          Software & Web Developer
        </h2>
        <SocialMediaLinks />
        <a
          href="/doc/Tyson_Suttle_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 lg:m-0 max-w-max self-center text-slate-900 border-2 border-current px-12 py-3 shadow-med hover:shadow-lg rounded-md hover:bg-slate-200   active:bg-slate-300"
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
        className="w-12 h-12 hover:drop-shadow	 text-[#0A66C2]"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://linkedin.com/in/tyson-suttle"
        className="w-14 h-14 hover:drop-shadow hover:text-slate-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
          />
        </svg>
      </a>
      <a
        href="https://linkedin.com/in/tyson-suttle"
        className="w-12 h-12 hover:drop-shadow hover:text-slate-700"
      >
        <GitHubIcon />
      </a>
    </div>
  );
}
