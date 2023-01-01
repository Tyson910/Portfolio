<script lang="ts">
  interface NavigationLink {
    href: string;
    /** What is shown to end user */
    text: string;
  }

  const navigationLinks: NavigationLink[] = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/about',
      text: 'About',
    },
    {
      href: '/index.html#projects',
      text: 'Projects',
    },
    {
      href: '/blog',
      text: 'Blog',
    },
    {
      href: '/contact',
      text: 'Contact',
    },
  ];
</script>

<header
  class={`py-2 w-full sticky top-0 z-10
   shadow-md lg:shadow-sm text-purple-100 bg-purple-shade-4`}
>
  <nav class="max-w-screen-xl mx-auto flex justify-evenly">
    {#each navigationLinks as { href, text } (href)}
      <a {href} class="hover:underline p-4 font-medium hover:text-white">
        {text}
      </a>
    {/each}
  </nav>
</header>
