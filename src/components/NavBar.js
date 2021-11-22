export default function NavBar() {
  return (
    <header className="w-full sticky top-0 shadow-sm opacity-95">
      <nav className="max-w-screen-xl flex justify-evenly">
        <NavLink href="#top">
          Home
        </NavLink>
        <NavLink href="#about">
          About Me
        </NavLink>
        <NavLink href="#project-container">
          Projects
        </NavLink>
        <NavLink href="#contact-form">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="hover:underline p-4"
    >
      {children}
    </a>
  );
}
