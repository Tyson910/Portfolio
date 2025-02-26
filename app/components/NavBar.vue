<script setup lang="ts">
interface NavigationLink {
  href: string;
  /** What is shown to end user */
  text: string;
}

const navigationLinks = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "About",
  },
  // {
  //   href: '/projects',
  //   text: 'Projects',
  // },
  {
    href: "/blog",
    text: "Blog",
  },
  // {
  //   href: '/contact',
  //   text: 'Contact',
  // },
] as const satisfies NavigationLink[];
</script>

<template>
  <header class="py-4 w-full sticky top-0 z-10">
    <nav
      class="w-max mx-auto gap-x-6 px-8 flex justify-evenly bg-(--ui-primary) shadow-md lg:shadow-sm rounded-full"
    >
      <a
        v-for="{ href, text } in navigationLinks"
        :key="href"
        :href="href"
        class="hover:underline py-4 text-sm font-medium text-white hover:text-purple-100"
      >
        {{ text }}
      </a>
    </nav>
  </header>
</template>
