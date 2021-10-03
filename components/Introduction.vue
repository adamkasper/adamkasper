<template>
  <div
    class="
      flex
      gap-x-5
      justify-start
      items-center
      border-b border-opacity-25
      pb-8
      mb-4
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
      <p class="pt-1 text-xs text-gray-300 font-mono tracking-widest">
        <a
          href="https://github.com/adamkasper"
          target="_blank"
          class="underline hover:no-underline"
        >
          web developer</a
        >
        <span> | </span>
        <a
          href="mailto:adam@obvio.cz"
          target="_top"
          class="underline hover:no-underline"
        >
          adam@obvio.cz</a
        >
      </p>
    </div>
  </div>
</template>
