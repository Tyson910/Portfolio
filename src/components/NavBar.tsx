export function NavBar(): JSX.Element {
  const navigationLinks: Array<{
    href: string;
    /** What is shown to end user */
    text: string;
  }> = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/about',
      text: 'About',
    },
    {
      href: '/index.html#projects',
      text: 'Projects',
    },
    {
      href: '/contact',
      text: 'Contact',
    },
    // {
    //   href: '/blog',
    //   text: 'Blog',
    // },
  ];
  return (
    <header
      className={`py-2 w-full sticky top-0 z-10
   bg-white shadow-md lg:shadow-sm text-purple-shade-4`}
    >
      <nav className="max-w-screen-xl mx-auto flex justify-evenly">
        {navigationLinks.map(
          ({ href, text }) => (
            <a
              key={href}
              href={href}
              className="hover:underline p-4 font-medium"
            >
              {text}
            </a>
          )
        )}
      </nav>
    </header>
  );
}
