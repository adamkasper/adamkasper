<template>
  <footer class="pt-8 pb-4">
    <p
      class="
        text-center text-xs text-gray-300
        font-semibold
        tracking-widest
        uppercase
      "
    >
      {{ year }} &copy; Adam Kasper
    </p>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>
