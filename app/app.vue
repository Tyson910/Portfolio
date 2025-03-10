<script setup>
onMounted(() => {
  console.log(`Thanks for visiting my portfolio site! Please, feel free to contact me using any of these options: 
    📧 Email: TysonS.417@gmail.com 
    👨🏿‍💻 Github: https://github.com/Tyson910 
    👨🏿‍💼 LinkedIn: https://linkedin.com/in/tyson-suttle`);
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/img/icons/avi.svg",
    },
  ],
});
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <Body class="min-h-full flex flex-col scroll-smooth">
      <main class="flex-grow selection:bg-primary selection:text-white">
        <NuxtLoadingIndicator />
        <UApp>
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
        </UApp>
      </main>
    </Body>
  </div>
</template>
