/* eslint-disable react/prop-types */
import Head from 'next/head';

import Footer from './Footer';
import NavBar from './NavBar';

export default function Layout({
  children,
}) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/img/icons/avi.svg"
        />
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
