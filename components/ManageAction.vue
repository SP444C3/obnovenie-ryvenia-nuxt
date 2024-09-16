<template>
  <div class="flex flex-row">
    <Icon :name="icon" class="w-6 cursor-pointer h-6 block" v-tooltip.top="{value: title, autoHide:false }"/>
  </div>
</template>

<script setup>
import Tooltip from 'primevue/tooltip';


const props = defineProps({
  title: String,
  icon: String
})

</script>

<style></style>