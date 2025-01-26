<template>
  <div>
    <NuxtRouteAnnouncer />
    <Head>
      <link rel="icon" href="/img/icons/avi.svg" />
    </Head>
    <Body class="min-h-full flex flex-col scroll-smooth">
      <main class="flex-grow selection:bg-primary selection:text-white">
        <NuxtLoadingIndicator />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
        <UNotifications />
      </main>
    </Body>
  </div>
</template>
