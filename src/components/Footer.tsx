import { socialLinks } from '@utils/helpers';

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-700/40">
      <div className="container py-12 md:flex md:items-center md:justify-between">
        <div className="flex justify-center gap-x-6 md:order-2">
          {socialLinks.map(({ Icon, ariaLabel, href }) => (
            <a
              key={href}
              href={href}
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <span className="sr-only">{ariaLabel}</span>
              <Icon aria-hidden="true" className="size-6" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm/6 text-gray-600 dark:text-gray-400 md:order-1 md:mt-0">
          &copy; {new Date().getFullYear()} Tyson Suttle. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
