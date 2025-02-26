<script setup>
onMounted(() => {
  console.log(`Thanks for visiting my portfolio site! Please, feel free to contact me using any of these options: 
    📧 Email: TysonS.417@gmail.com 
    👨🏿‍💻 Github: https://github.com/Tyson910 
    👨🏿‍💼 LinkedIn: https://linkedin.com/in/tyson-suttle`);
});
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <Head>
      <link rel="icon" href="/img/icons/avi.svg" />
    </Head>
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
