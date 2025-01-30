export const socialLinks = [
  {
    href: "https://bsky.app/profile/tysons.bsky.social",
    ariaLabel: "Follow on Blue Sky",
    Icon: "ri:bluesky-line",
  },
  {
    href: "https://www.linkedin.com/in/tyson-suttle/",
    ariaLabel: "Follow on LinkedIn",
    Icon: "ri:linkedin-fill",
  },
  {
    href: "https://github.com/Tyson910",
    ariaLabel: "Follow on GitHub",
    Icon: "ri:github-fill",
  },
] as const satisfies {
  href: string;
  ariaLabel: string;
  Icon: string;
}[];
