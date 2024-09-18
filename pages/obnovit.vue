<template>
  <div v-if="!error" class="flex flex-col justify-center items-center bg-primary">
    <div class="flex flex-col gap-4 justify-center items-center">
      <h1 class="text-3xl font-bold">Je na čase obnoviť Váš web!</h1>
      <span>Vaša webová adresa:</span>
      <span>{{ item.name }}</span>
    </div>
  </div>
  <div v-else>
    {{ error.statusCode }}
    {{ error.statusMessage }}
  </div>
</template>

<script setup>
const id = useRoute().query.id
const token = useRoute().query.token
const { data: item, error } = await useFetch('/api/getRecord', {
  params: { id: id, token: token },
})

onMounted(() => {
  console.log(error)
})

</script>

<style></style>