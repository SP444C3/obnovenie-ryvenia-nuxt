<template>
  <main class="flex flex-col min-h-screen w-screen justify-center items-center">
    <ul class="flex flex-col bg-[#ffffff05] rounded-2xl py-2">
      <li class="grid grid-cols-[4fr_4fr_1fr] font-black px-4 py-1">
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
const { data: items } = await useFetch('/api/getRecords', { headers: { 'Authorization': `Bearer ${useCookie('token').value}` } });
</script>

<style></style>