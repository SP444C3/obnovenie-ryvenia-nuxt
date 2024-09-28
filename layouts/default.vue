<template>
  <div class="w-full min-h-screen flex flex-col justify-center items-center lg:px-16 lg:pt-16 overflow-x-hidden bg-gradient">
    <main
      class="flex flex-col min-h-screen w-full justify-top items-center bg-primary drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] p-4">
      <TopHeader />
      <slot />
    </main>
  </div>
</template>

<script setup>

</script>

<style>
.bg-gradient {
  background: rgb(222, 231, 208);
  background: linear-gradient(140deg, rgba(222, 231, 208, 1) 0%, rgba(177, 200, 208, 1) 35%, rgba(237, 220, 208, 1) 100%);
}
</style>