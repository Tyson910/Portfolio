<script setup lang="ts">
useSeoMeta({
  title: "About Me",
  description: "Learn more about me",
});
</script>
<template>
  <div>
    <div
      class="size-96 mt-12 mx-auto rounded-full border border-black shadow-md"
    >
      <img
        src="/img/headshot.JPG"
        alt="My Headshot"
        loading="lazy"
        class="rounded-full h-full w-full object-cover"
      />
    </div>
    <UContainer class="text-lg pb-12 lg:pb-30">
      <h1 class="text-4xl pb-16 font-semibold pt-20" id="about">About Me</h1>
      <div class="space-y-10">
        <p>
          I am a Software Developer specializing in Front-End development and
          creating accessible UIs. I'm experienced in using HTML, CSS,
          JavaScript, and JS frameworks. Lately, I have been learning to use
          NextJS alongside Prismic, a headless CMS.
        </p>
        <p>
          I graduated from Missouri State University in the Spring of 2021 with
          a Bachelor's degree in Information Technology and an emphasis in
          Application Development.
        </p>

        <p>
          My experience consists of serving in a full time role as a front-end
          software engineer as well as part time role at various non profits
          such as PivotTech & Congregational Health &amp; Education Network
          (CHEN), both based in Nashville. PivotTech is a software bootcamp with
          a focus on helping people from underrepresented groups
          <em>'pivot'</em> from their current career into a new one in
          technology. I was responsible for giving one-on-one and small group
          instruction as well as lesson review consisting of collaborating with
          other instructors to recognize issues students are facing and
          recommend solutions. I helped CHEN by creating web forms and
          maintaining their database to aid those in need of assistance due to
          the COVID-19 pandemic.
        </p>

        <p>
          I take pride in working with other individuals who are passionate
          about using modern technology and sleek design to deliver incredible
          experiences and products to people in a way that is environmentally
          conscious, socially inclusive, and accessible to all.
        </p>

        <p>
          I love learning new things, and trying new techonologies. This website
          was built using&nbsp;a combination of Nuxt, VueJS, TailwindCSS &
          Markdown.&nbsp; My next goal is to start a blog writing about new
          techonologies I'm learning. Hosted on this same site!
        </p>

        <p>
          With my free time,&nbsp; I like to cook as well as explore local
          restaurants, complete puzzles, and stay active by playing pick up
          basketball.&nbsp;
        </p>
      </div>
    </UContainer>
  </div>
</template>
