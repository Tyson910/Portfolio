/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Astronaut from '../public/img/icons/astronaut404.svg';
import Scarecrow from '../public/img/icons/scarecrow404.svg';

export default function FourZeroFour() {
  const today = new Date();
  return (
    <>
      <Head>
        <title>
          404 | Tyson Suttle
        </title>
        <meta
          name="description"
          content="Lost? Click the link to return home"
        />
      </Head>
      <article className="flex flex-col text-purple-shade-5">
        <h1 className="text-4xl sm:text-5xl flex flex-col max-w-max mx-auto text-center font-medium">
          This page could not be found.
        </h1>
        <div className="relative h-80 w-80 md:h-[25rem] md:w-[25rem] lg:h-[26rem] lg:w-[26rem] self-center">
          <Image
            src={
              // show scarecrow during October only
              today.getMonth() == 9
                ? Scarecrow
                : Astronaut
            }
            alt="404"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
        <Link href="/">
          <a className="text-2xl underline max-w-max mx-auto text-center font-medium">
            Return Home
          </a>
        </Link>
      </article>
    </>
  );
}
