<template>
  <li
    class="grid grid-cols-[4fr_4fr_1fr] font-thin text-zinc-400 py-1 px-4 hover:text-white hover:bg-zinc-800 transition-all duration-300 items-center">
    <span class="px-2">{{ item.name }}</span><span class="px-2">{{ item.token }}</span>
    <div class="p-2 flex flex-row gap-4">
      <ManageAction title="Vymazať" icon="DeleteIcon" @click="handleDelete(item._id)"/>
      <ManageAction title="Kopírovať odkaz" icon="CopyIcon" />
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  item: Object,
})

onMounted(() => {

})

const handleDelete = async (id) => {
  let response
  await $fetch('/api/deleteRecord', {
    headers: { 'Authorization': `Bearer ${useCookie('token').value}` },
    body: { id: id },
    method: 'POST',
    credentials: 'include'
  }).then((res) => {
    response = res
    location.reload()
  })
}
</script>

<style></style>