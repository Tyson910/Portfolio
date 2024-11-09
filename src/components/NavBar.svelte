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
  ] as const satisfies NavigationLink[];

  let showOverlay = $state(false);
</script>

<header
  class={`hidden md:block py-2 w-full sticky top-0 z-10
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

<!-- Mobile NavBar (hidden on md: screen breakpoint) -->
{#if showOverlay}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed opacity-90 inset-0 bg-black md:hidden"
    onclick={() => (showOverlay = false)}
  >
    <nav class="text-center opacity-90 mt-40 flex flex-col">
      {#each navigationLinks as { href, text } (href)}
        <a
          {href}
          class="w-max mx-auto text-4xl p-4 font-medium text-white"
        >
          {text}
        </a>
      {/each}
    </nav>
  </div>
{:else}
  <header
    class={`md:hidden py-2 px-8 w-full sticky top-0 z-10
   shadow-md text-purple-100 bg-purple-shade-4`}
  >
    <nav class="flex items-center justify-between">
      {#each navigationLinks.slice(0, 1) as { href, text } (href)}
        <a {href} class="hover:underline p-4 font-medium hover:text-white">
          {text}
        </a>
      {/each}
      <button onclick={() => (showOverlay = true)}>
        <!-- Heroicons/outline bars-3 -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </nav>
  </header>
{/if}
