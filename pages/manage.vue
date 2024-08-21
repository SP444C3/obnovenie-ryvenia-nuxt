<template>
  <main class="min-h-screen w-screen">
    {{ items }}
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: 'auth'
})
const { data: items} = await useFetch('/api/getRecords');
</script>

<style>

</style>