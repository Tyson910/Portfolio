import { MailIcon } from '@heroicons/react/outline';
import Image from 'next/image';

import {
  GitHubIcon,
  LinkedInIcon,
} from './Icons';

export default function Hero() {
  // min h 500px
  return (
    <section className="flex flex-col items-center px-5 gap-5 border-b pb-10">
      <div className="pt-10">
        {/* <Image
          src="/img/miniScreenshot.jpg"
          alt="My headshot"
          width={500}
          height={800}
        /> */}
        <img
          src="/img/miniScreenshot.jpg"
          alt="My Headshot"
          className="h-48 w-48 object-cover rounded-full shadow-md"
        />
      </div>
      <div className="text-center space-y-5">
        <h1 className="border-b-2 w-max mx-auto text-5xl font-bold">
          Tyson Suttle
        </h1>
        <h2 className="text-2xl">
          Software & Web Developer
        </h2>
      </div>
      <div className="flex gap-x-8 text-gray-700">
        <a
          href="https://linkedin.com/in/tyson-suttle"
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
      <a
        href="doc/Tyson_S_Resume.pdf"
        className="border border-black px-12 py-3 shadow-md hover:shadow-lg rounded-md bg-zinc-400"
      >
        My Resume
      </a>
    </section>
  );
}
