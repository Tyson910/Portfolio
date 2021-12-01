/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function NavBar() {
  // eslint-disable-next-line no-console
  console.log(`Thanks for visiting my portfolio site! Please, feel free to contact me using any of these options: 
  📧 Email: TysonS.417@gmail.com 
  👨🏿‍💻 Github: https://github.com/Tyson910 
  👨🏿‍💼 LinkedIn: https://linkedin.com/in/tyson-suttle`);
  return (
    <header className="w-full sticky top-0 shadow-md z-10 opacity-[98%] bg-slate-100 text-[#2C0E44]">
      <nav className="max-w-screen-xl mx-auto flex justify-evenly">
        <NavLink href="/#top">
          Home
        </NavLink>
        <NavLink href="/#about">
          About Me
        </NavLink>
        <NavLink href="/#projects">
          Projects
        </NavLink>
        <NavLink href="/#contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="hover:underline p-4">
        {children}
      </a>
    </Link>
  );
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
