<script lang="ts">
  interface NavigationLink {
    href: string;
    /** What is shown to end user */
    text: string;
  }

  const navigationLinks = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/about',
      text: 'About',
    },
    // {
    //   href: '/projects',
    //   text: 'Projects',
    // },
    {
      href: '/blog',
      text: 'Blog',
    },
    // {
    //   href: '/contact',
    //   text: 'Contact',
    // },
  ] as const satisfies NavigationLink[];
</script>

<header class="py-4 w-full sticky top-0 z-10">
  <nav
    class="container max-w-max gap-x-6 px-8 flex justify-evenly text-purple-100 bg-purple-shade-4 shadow-md lg:shadow-sm rounded-full"
  >
    {#each navigationLinks as { href, text } (href)}
      <a
        {href}
        class="hover:underline py-4 text-sm font-medium hover:text-white"
      >
        {text}
      </a>
    {/each}
  </nav>
</header>
