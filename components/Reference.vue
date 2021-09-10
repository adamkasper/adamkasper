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
          logo: 'wpj',
          link: 'https://www.wpj.cz/',
        },
        {
          logo: 'dami-dev',
          link: 'https://www.damidev.com/',
        },
        {
          logo: 'sabo-it',
          link: 'https://www.saboit.de/',
        },
        {
          logo: 'intee',
          link: 'https://intee.cz/',
        },
      ],
    }
  },
}
</script>
