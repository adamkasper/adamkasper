<template>
  <section class="grid grid-cols-5 gap-16 border-b border-gray-700 py-8">
    <div class="col-span-2 py-2" :class="titleClass">
      <h2
        class="
          text-sm text-gray-300
          font-bold
          tracking-widest
          uppercase
          inline-block
        "
      >
        <slot />
      </h2>
    </div>
    <div class="col-span-3 grid grid-cols-2 gap-x-12 gap-y-4">
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
    titleClass: { type: String, default: null },
  },
}
</script>
