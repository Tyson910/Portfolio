export default function Footer() {
  return (
    <footer className="w-full bg-slate-100 py-14">
      <div className="container space-y-10">
        <p
          className="text-3xl md:text-4xl font-medium "
          id="contact"
        >
          Contact
        </p>
        <p className="text-lg max-w-screen-sm">
          Whether you have a question or
          just want to chat, you can
          click{' '}
          <span className="underline">
            here
          </span>{' '}
          to send me a message on
          LinkedIn, or shoot me an
          email:{'  '}
          <a
            href='mailto:TysonS.417@gmail.com, subject="Inquiry from website" '
            className="underline"
          >
            TysonS.417@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
