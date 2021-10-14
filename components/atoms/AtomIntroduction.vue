<template>
  <header
    class="
      flex
      gap-x-5
      justify-start
      items-center
      border-b border-gray-700
      pb-8
    "
  >
    <a href="https://github.com/adamkasper" target="_blank">
      <nuxt-img
        src="/adam-kasper.jpeg"
        width="128"
        height="128"
        class="rounded-full w-16 h-16"
        alt="Adam Kasper"
      />
    </a>
    <div>
      <h1 class="text-xl text-white font-bold tracking-wide">Adam Kasper</h1>
      <p class="pt-1 text-xs text-gray-400 font-mono tracking-widest">
        <a
          href="https://github.com/adamkasper"
          target="_blank"
          class="underline hover:no-underline"
        >
          web developer</a
        >
        <span class="text-gray-600"> / </span>
        <a
          href="mailto:adam@obvio.cz"
          target="_top"
          class="underline hover:no-underline"
        >
          adam@obvio.cz</a
        >
      </p>
    </div>
  </header>
</template>
