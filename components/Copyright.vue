<template>
  <p
    class="
      text-center text-xs
      py-4
      font-semibold
      text-gray-300
      tracking-widest
      uppercase
    "
  >
    {{ year }} &copy; Adam Kasper
  </p>
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
