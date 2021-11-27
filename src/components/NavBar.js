/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function NavBar() {
  return (
    <header className="w-full sticky top-0 shadow-md z-10 opacity-95 bg-transparent backdrop-filter backdrop-blur-sm">
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
