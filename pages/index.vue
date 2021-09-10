<template>
  <div class="flex justify-center items-center min-h-screen p-4">
    <div class="w-96">
      <introduction />
      <reference />
    </div>
  </div>
</template>

<script>
import Introduction from '@/components/Introduction.vue'
import Reference from '@/components/Reference.vue'

export default {
  components: { Introduction, Reference },
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
