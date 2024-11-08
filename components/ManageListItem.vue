<template>
  <li
    class="grid grid-cols-[4fr_10rem_1fr] font-thin text-zinc-400 py-1 px-4 hover:text-white hover:bg-zinc-800 transition-all duration-300 items-center relative">
    <Icon v-if="item.responded" class="absolute left-1 text-green-500 cursor-pointer" name="uil:info-circle"
      @mouseover="showInfoPopover" @mouseout="hideInfoPopover" />
    <span class="px-2">{{ item.name }}</span><span class="px-2 truncate" v-tooltip.top="{
      value: item.token,
      autoHide: false
    }">{{ item.token }}</span>
    <div class="p-2 flex flex-row gap-4">
      <ManageAction title="Vymazať" icon="uil:trash" @click="handleDelete(item._id)" />
      <ManageAction title="Skopírovať odkaz" :icon="copyIcon" @click="copyLink()" />
      <NuxtLink :to="`obnovit?id=${item._id}&token=${item.token}`" target="_blank">
        <ManageAction title="Zobraziť" icon="uil:eye" />
      </NuxtLink>
      <Popover ref="recordInfoPopover">
        <div class="flex flex-col">
          <div class="flex flex-row">
            <span class="text-white font-thin">Zvolený plán:</span><span class="font-bold ml-1">{{ props.item.options.plan }}</span>
          </div>
          <div class="flex flex-row">
            <span class="text-white font-thin">Obnovovať:</span><span class="font-bold ml-1">{{ props.item.options.period }}</span>
          </div>
          <div class="flex flex-row">
            <span class="text-white font-thin">Pamätať?</span><span class="font-bold ml-1">{{ props.item.options.remember }}</span>
          </div>
        </div>
      </Popover>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  item: Object,
})
const recordInfoPopover = ref(null)

onMounted(() => {
  console.log(props.item)
})

const copyIcon = ref('uil:copy')

watchEffect(() => {
  if (copyIcon.value === 'uil:check') {
    setTimeout(() => {
      copyIcon.value = 'uil:copy'
    }, 1000)
  }
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

const copyLink = (token) => {
  navigator.clipboard.writeText(`${useRuntimeConfig().public.BASE_URL}obnovit?id=${props.item._id}&token=${props.item.token}`)
  copyIcon.value = 'uil:check'
}

const showInfoPopover = (event) => {
  recordInfoPopover.value.show(event);
};
const hideInfoPopover = (e) => {
  recordInfoPopover.value.hide(e);
};
</script>

<style></style>