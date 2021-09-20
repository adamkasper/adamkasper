<template>
  <div class="flex justify-center items-center min-h-screen p-4">
    <div class="w-96 my-16 md:my-32">
      <introduction />
      <reference-list :items="partners">Spolupráce</reference-list>
      <reference-list :items="projects">Projekty</reference-list>
      <copyright />
    </div>
  </div>
</template>

<script>
import Introduction from '@/components/Introduction.vue'
import ReferenceList from '@/components/ReferenceList.vue'
import Copyright from '@/components/Copyright.vue'

export default {
  components: { Introduction, ReferenceList, Copyright },
  data() {
    return {
      partners: [
        {
          logo: 'hanaboso',
          link: 'https://hanaboso.com/',
        },
        {
          logo: 'twentio',
          link: 'https://twentio.cz/',
        },
        {
          logo: 'wpj',
          link: 'https://www.wpj.cz/',
        },
        {
          logo: 'sabo-it',
          link: 'https://www.saboit.de/',
        },
        {
          logo: 'dami-dev',
          link: 'https://www.damidev.com/',
        },
      ],
      projects: [
        {
          logo: 'plenky-levne',
          link: 'https://www.plenkylevne.cz/',
        },
        {
          logo: 'hotel-patria',
          link: 'https://hotelpatria.cz/',
        },
        {
          logo: 'masinuv-statek',
          link: 'https://masinuvstatek.cz/',
        },
        {
          logo: 'bezpecny-radon',
          link: 'https://bezpecnyradon.cz/',
        },
        {
          logo: 'intee',
          link: 'https://intee.cz/',
        },
        {
          logo: 'crowning-arts',
          link: 'https://www.crowningarts.com/',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Adam Kasper – Web development',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Kompletní dodání webových řešení. Zajistím Vám vše od tvorby wireframů, grafického návrhu, přes vývoj a deployment, až po marketing a následnou správu systému.',
        },
      ],
    }
  },
}
</script>
