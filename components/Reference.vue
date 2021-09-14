<template>
  <div class="grid grid-cols-2 gap-8 space-ju">
    <reference-item v-for="(item, i) in reference" :key="i" :reference="item" />
  </div>
</template>

<script>
import ReferenceItem from '@/components/ReferenceItem.vue'

export default {
  components: { ReferenceItem },
  data() {
    return {
      reference: [
        // {
        //   logo: 'mountfield',
        //   link: 'https://www.mountfield.cz/',
        // },
        {
          logo: 'hanaboso',
          link: 'https://hanaboso.com/',
        },
        {
          logo: 'twentio',
          link: 'https://twentio.cz/',
        },
        {
          logo: 'plenky-levne',
          link: 'https://www.plenkylevne.cz/',
        },
        {
          logo: 'hotel-patria',
          link: 'https://hotelpatria.cz/',
        },
        {
          logo: 'crowning-arts',
          link: 'https://www.crowningarts.com/',
        },
        {
          logo: 'intee',
          link: 'https://intee.cz/',
        },
        {
          logo: 'wpj',
          link: 'https://www.wpj.cz/',
        },
        {
          logo: 'masinuv-statek',
          link: 'https://masinuvstatek.cz/',
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
    }
  },
}
</script>
