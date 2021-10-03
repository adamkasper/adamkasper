<template>
  <section>
    <h2
      class="py-4 text-sm text-gray-300 font-semibold tracking-widest uppercase"
    >
      <slot />
    </h2>
    <div class="grid grid-cols-2 gap-8 border-b border-opacity-25 pb-8 mb-4">
      <atom-reference-logo
        v-for="(item, i) in items"
        :key="i"
        :reference="item"
      />
    </div>
  </section>
</template>

<script>
import AtomReferenceLogo from '@/components/atoms/AtomReferenceLogo.vue'

export default {
  components: { AtomReferenceLogo },
  props: {
    items: { type: Array, required: true },
  },
}
</script>
