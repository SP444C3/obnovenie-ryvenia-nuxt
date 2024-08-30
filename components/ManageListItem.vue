<template>
  <li
    class="grid grid-cols-3 font-thin text-zinc-400 py-1 px-4 hover:text-white hover:bg-zinc-800 transition-all duration-300">
    <span>{{ item.name }}</span><span>{{ item.token }}</span>
    <SpeedDial :model="actions" :radius="80" type="circle" :style="{ position: 'absolute' }"
      :buttonProps="{ severity: 'warn', rounded: true }" />
  </li>
</template>

<script setup>
const props = defineProps({
  item: Object,
})

const actions = [

]
</script>

<style></style>