import { MailIcon } from '@heroicons/react/outline';

// import Image from 'next/image';
// import Me from '../../public/img/miniScreenshot.jpg';
import {
  GitHubIcon,
  LinkedInIcon,
} from './Icons';

export default function Hero() {
  // min h 500px
  return (
    <section className="flex flex-col items-center px-5 gap-5 lg:grid lg:grid-cols-2 lg:container lg:py-20 lg:mb-20 pb-10 lg:pb-5">
      <div className="mb-4 lg:m-0 pt-14 lg:pt-10 justify-self-center	">
        <img
          src="/img/miniScreenshot.jpg"
          alt="My Headshot"
          className="h-48 w-48 lg:h-96 lg:w-96 border border-black object-cover rounded-full shadow-md"
        />
      </div>
      <div className="flex flex-col text-center gap-y-5 lg:gap-y-10">
        <h1 className="w-max mx-auto text-slate-700 text-5xl lg:text-7xl font-bold lg:no-underline">
          Tyson Suttle
        </h1>
        <h2 className="text-slate-500 text-2xl lg:text-4xl lg:font-light lg:-mt-5">
          Software & Web Developer
        </h2>
        <SocialMediaLinks />
        <a
          href="doc/Tyson_S_Resume.pdf"
          className="mt-8 lg:m-0 max-w-max self-center border border-black px-12 py-3 shadow-md hover:shadow-lg rounded-md bg-zinc-400"
        >
          My Resume
        </a>
      </div>
    </section>
  );
}

function SocialMediaLinks() {
  return (
    <div className="hidden md:flex justify-center gap-x-8 text-gray-700">
      <a
        href="https://linkedin.com/in/tyson-suttle"
        rel="noopener noreferrer"
        target="_blank"
        className="w-12 h-12 hover:text-[#0A66C2]"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://linkedin.com/in/tyson-suttle"
        className="pt-four w-14 h-14 hover:text-yellow-600"
      >
        <MailIcon />
      </a>
      <a
        href="https://linkedin.com/in/tyson-suttle"
        className="w-12 h-12 hover:text-green-500"
      >
        <GitHubIcon />
      </a>
    </div>
  );
}
