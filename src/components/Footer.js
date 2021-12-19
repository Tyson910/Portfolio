export default function Footer() {
  return (
    <footer className="w-full text-purple-100 bg-purple-shade-4 py-14 mt-20 md:mt-40">
      <div className="container space-y-10">
        <p
          className="text-3xl md:text-4xl font-medium "
          id="contact"
        >
          Contact
        </p>
        <p className="text-lg max-w-screen-sm">
          Whether you have a question or
          just want to chat, you can{' '}
          <a
            href="https://linkedin.com/in/tyson-suttle"
            rel="noopener noreferrer"
            target="_blank"
            title="LinkedIn profile"
            className="underline hover:text-slate-300"
          >
            send me a message
          </a>{' '}
          on LinkedIn or shoot me an
          email:
          {'  '}
          <a
            href='mailto:TysonS.417@gmail.com, subject="Inquiry from website" '
            rel="noopener noreferrer"
            target="_blank"
            className="underline hover:text-slate-300"
          >
            TysonS.417@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
