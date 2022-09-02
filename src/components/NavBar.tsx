export function NavBar(): JSX.Element {
  console.log(`Thanks for visiting my portfolio site! Please, feel free to contact me using any of these options: 
  📧 Email: TysonS.417@gmail.com 
  👨🏿‍💻 Github: https://github.com/Tyson910 
  👨🏿‍💼 LinkedIn: https://linkedin.com/in/tyson-suttle`);

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
      href: '/projects',
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
    <header className={`mb-10 w-full sticky top-0 shadow-md z-10
     opacity-[98%] bg-slate-100 text-purple-shade-4`}>
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
