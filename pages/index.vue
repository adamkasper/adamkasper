<template>
  <main class="flex bg-black justify-center items-center min-h-screen p-4">
    <div class="max-w-sm my-16 md:my-32">
      <atom-introduction />
      <molecule-reference :items="partners">Spolupráce</molecule-reference>
      <molecule-reference :items="projects" title-class="order-last text-right">
        Projekty
      </molecule-reference>
      <atom-copyright />
    </div>
  </main>
</template>

<script>
import AtomIntroduction from '@/components/atoms/AtomIntroduction.vue'
import MoleculeReference from '@/components/molecules/MoleculeReference.vue'
import AtomCopyright from '@/components/atoms/AtomCopyright.vue'

export default {
  components: { AtomIntroduction, MoleculeReference, AtomCopyright },
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
