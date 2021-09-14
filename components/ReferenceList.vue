<template>
  <section>
    <h2
      class="py-4 text-sm text-gray-500 font-semibold tracking-widest uppercase"
    >
      <slot />
    </h2>
    <div class="grid grid-cols-2 gap-8 border-b border-opacity-75 pb-8 mb-4">
      <reference-item v-for="(item, i) in items" :key="i" :reference="item" />
    </div>
  </section>
</template>

<script>
import ReferenceItem from '@/components/ReferenceItem.vue'

export default {
  components: { ReferenceItem },
  props: {
    items: { type: Array, required: true },
  },
}
</script>
