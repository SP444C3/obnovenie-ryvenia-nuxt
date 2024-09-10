<template>
  <div class="flex flex-row">
    <component :is="actionIcon" class="w-6 cursor-pointer h-6 block" v-tooltip.top="title"/>
  </div>
</template>

<script setup>
import Tooltip from 'primevue/tooltip';


const props = defineProps({
  title: String,
  icon: String
})
const actionIcon = resolveComponent(props.icon)
</script>

<style></style>