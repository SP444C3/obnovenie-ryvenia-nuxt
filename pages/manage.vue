<template>
  <main class="flex flex-col min-h-screen w-screen justify-center items-center">
    <ul class="flex flex-col bg-[#ffffff05] rounded-2xl py-2">
      <li class="grid grid-cols-3 font-black px-4 py-1">
        <span>Meno klienta</span>
        <span>Prístup</span>
        <span>Akcie</span>
      </li>
      <ManageListItem v-for="item in items" :key="item.id" :item="item" />
    </ul>
  </main>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})
const { data: items } = await useFetch('/api/getRecords');
</script>

<style></style>