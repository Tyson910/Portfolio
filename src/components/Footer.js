export default function Footer() {
  return (
    <footer className="w-full text-purple-100 bg-[#2C0E44] py-14 mt-20 md:mt-40">
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
          <a
            href="https://linkedin.com/in/tyson-suttle"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            here
          </a>{' '}
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
