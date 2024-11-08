<template>

  <ul class="flex flex-col bg-[#ffffff05] rounded-2xl py-2">

    <li class="grid grid-cols-[4fr_10rem_1fr] font-black px-4 py-1">
      <span>Meno klienta</span>
      <span>Prístup</span>
      <span>Akcie</span>
    </li>
    <div v-if="items.length">
      <ManageListItem v-for="item in items" :key="item.id" :item="item" />
    </div>
    <span v-else class="text-zinc-400 font-thin px-4 py-1 text-center">Klikni na "+" pre pridanie záznamu</span>
  </ul>
  <Button label="Pridať" raised class="py-2 px-4 mt-4 text-white bg-[#ffffff05]" @click="togglePopover">
    <Icon name="uil:plus" />
  </Button>
  <Popover ref="addPopover">
    <div class="flex flex-col gap-4 w-[25rem]">
      <div class="flex flex-row justify-center items-center align-middle gap-2">
        <InputGroup>
          <InputText placeholder="Meno klienta" v-model="addClientName" class="px-4 py-2">
          </InputText>
        </InputGroup>
        <Button label="Pridať" raised class="py-2 px-4 text-white bg-green-800" @click="handleAddClient" />
      </div>
    </div>
  </Popover>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

const addClientName = ref('')
const addPopover = ref(null)

const togglePopover = (event) => {
  addPopover.value.toggle(event);
};

const handleAddClient = async () => {
  let response
  await $fetch('/api/addRecord', {
    headers: { 'Authorization': `Bearer ${useCookie('token').value}` },
    body: { name: addClientName.value },
    method: 'POST',
    credentials: 'include'
  }).then((res) => {
    response = res
    location.reload()
  })
}

const { data: items } = await useFetch('/api/getRecords', { headers: { 'Authorization': `Bearer ${useCookie('token').value}` } });
</script>

<style></style>