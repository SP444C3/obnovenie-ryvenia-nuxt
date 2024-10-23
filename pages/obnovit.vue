<template>
  <div v-if="!error" class="flex flex-col justify-center items-center bg-primary">
    <div class="flex flex-col gap-8 justify-center items-center">
      <div class="flex flex-col gap-8 justify-center items-center">
        <h1 class="text-3xl font-bold">Je na čase obnoviť Váš web!</h1>
        <p class="text-zinc-400 font-thin text-center max-w-700p text-balance">Ubehol už rok od dokončenia vášho webu a
          preto je nutné obnoviť hosting a vašu doménu. Dúfame, že sa vášmu
          podnikaniu a úsiliam darí, a že budeme spolupracovať aj v budúcnosti. Každá stránka potrebuje starostlivosť a
          aktualizácie aby ostala bezpečná a tak sa nestala ľahkým terčom útočníkov.</p>
        <div class="border border-primary2 p-4 flex flex-col justify-center items-center gap-4 rounded-2xl">
          <span class="font-thin text-primary2">Vaša webová adresa:</span>
          <span class="text-2xl">{{ item.name }}</span>
        </div>
      </div>
      <main class="py-20 flex flex-col gap-10">
        <h2 class="text-xl text-center">Vyberte si z našich balíčkov obnovenia</h2>
        <div class="grid lg:grid-cols-3 gap-8">
          <div class="border border-primary2 p-8 flex rounded-2xl flex-col items-start gap-8 justify-between">
            <div class="flex flex-col gap-8">
              <h3 class="text-lg opacity-60">Iba doménu a hosting</h3>
              <ul class="text-white text-left text-sm opacity-60 font-light flex flex-col gap-4 items-start">
                <li class="flex flex-row justify-center items-center">
                  <icon name="uil:angle-right" class="text-2xl" /><span>Predĺženie domény hostingu na 12 mesiacov</span>
                </li>
                <li class="flex flex-row justify-center items-center">
                  <icon name="uil:angle-right" class="text-2xl" /><span>Zahŕňa priestor na web a emaily</span>
                </li>
                <li class="flex flex-row justify-center items-center">
                  <icon name="uil:angle-right" class="text-2xl" /><span>SSL certifikát</span>
                </li>
                <li class="flex flex-row justify-center items-center">
                  <icon name="uil:angle-right" class="text-2xl" /><span>PBez technickej podpory a aktualizácií</span>
                </li>
              </ul>
            </div>
            <button @click="basePopupVisible = true"
              class="bg-primary2 text-white py-2 px-4 rounded-full w-full border border-primary2 transition-all duration-500 hover:border-white">Vybrať</button>
          </div>
          <div class="border border-white p-8 flex rounded-2xl flex-col items-start gap-8">
            <h3 class="text-2xl font-bold">Základná správa webu</h3>
            <ul class="text-white text-sm font-light flex flex-col gap-4 items-start">
              <li class="flex flex-row justify-center items-center">
                <icon name="uil:check" class="text-2xl text-green-500" /><span>Zaručíme bezproblémový beh stránky po
                  celý
                  rok</span>
              </li>
              <li class="flex flex-row justify-center items-center">
                <icon name="uil:check" class="text-2xl text-green-500" /><span>Všetko v rámci domény a hostingu</span>
              </li>
              <li class="flex flex-row justify-center items-center">
                <icon name="uil:check" class="text-2xl text-green-500" /><span>Pravidelná mesačná aktualizácia
                  stránky</span>
              </li>
              <li class="flex flex-row justify-center items-center">
                <icon name="uil:check" class="text-2xl text-green-500" /><span>1 záloha webu mesačne (uchovávaná 3
                  mesiace)</span>
              </li>
              <li class="flex flex-row justify-center items-center">
                <icon name="uil:check" class="text-2xl text-green-500" /><span>Podpora v prípade napadnutia webu</span>
              </li>
              <li class="flex flex-row justify-center items-center">
                <icon name="uil:check" class="text-2xl text-green-500" /><span>Technická podpora v prípade nedostupnosti
                  webu</span>
              </li>
            </ul>
            <button @click="activatePopup('basic')"
              class="bg-white border border-white text-primary2 py-2 px-4 rounded-full w-full transition-all duration-500 hover:bg-primary hover:text-white">Vybrať</button>
          </div>
          <div
            class="border border-white bg-white p-8 flex rounded-2xl flex-col items-center gap-8 text-primary justify-between">
            <div class="flex flex-col gap-8">
              <h3 class="text-2xl font-bold">Pokročilá správa webu</h3>
              <ul class="text-primary text-sm font-normal flex flex-col gap-4 items-start">
                <li class="flex flex-row justify-center items-center">
                  <icon name="uil:award" class="text-yellow-500" /><span>Určené pre stránky dôležité pre váš
                    biznis</span>
                </li>
                <li class="flex flex-row justify-center items-center">
                  <icon name="uil:award" class="text-yellow-500" /><span>Monitoring dostupnosti</span>
                </li>
                <li class="flex flex-row justify-center items-center">
                  <icon name="uil:award" class="text-yellow-500" /><span>Týždenná aktualizácia systému</span>
                </li>
                <li class="flex flex-row justify-center items-center">
                  <icon name="uil:award" class="text-yellow-500" /><span>Denné zálohovanie s 3 mesačnou
                    retenciou</span>
                </li>
                <li class="flex flex-row justify-center items-center">
                  <icon name="uil:award" class="text-yellow-500" /><span class="block">Ručná záloha webu každý mesiac na
                    úložisko
                    na 12 mesiacov</span>
                </li>
              </ul>
            </div>
            <button @click="activatePopup('pro')"
              class="bg-primary border border-primary text-white py-2 px-4 rounded-full w-full transition-all duration-500 hover:bg-white hover:text-primary">Vybrať</button>
          </div>
        </div>
      </main>

      <Dialog v-model:visible="basePopupVisible" modal :draggable="false" header="Iba doménu a hosting"
        class="max-w-700p">
        <div class="flex flex-col gap-8">
          <ul class="text-white text-sm font-normal flex flex-col gap-4 items-start p-4">
            <li class="flex flex-row justify-center items-center gap-2">
              <icon name="uil:exclamation-circle" class="text-2xl text-red-600" /><span>Nebudete krytí v prípade
                napadnutia webu útočnikmi</span>
            </li>
            <li class="flex flex-row justify-center items-center gap-2">
              <icon name="uil:exclamation-circle" class="text-2xl text-red-600" /><span>Nebudete mať bezpečnostné
                aktualizácie</span>
            </li>
            <li class="flex flex-row justify-center items-center gap-2">
              <icon name="uil:exclamation-circle" class="text-2xl text-red-600" /><span>Nebudete mať pravidelné zálohy
                vášho webu</span>
            </li>
          </ul>
          <div class="flex flex-row justify-center items-center gap-4 text-sm"><Button @click=""
              class="bg-primary border border-red-900 rounded-full py-2 px-4 text-red-600 transition-all duration-500 hover:bg-red-600 hover:text-white">Áno
              chcem iba hosting a doménu</Button>
            <Button @click="basePopupVisible = false"
              class="bg-primary border border-white bg-white text-primary transition-all duration-500 hover:bg-primary hover:text-white rounded-full py-2 px-4">Pozrieť
              ostatné možnosti</Button>
          </div>
        </div>
      </Dialog>
      <Dialog v-model:visible="advPopupVisible" modal :draggable="false"
        :header="plansMap[userOptions.plan].name + ' plán'" class="max-w-700p min-w-400p">
        <div class="flex flex-col gap-8">
          <div class="flex flex-row justify-start items-center gap-4 text-sm">
            <RadioButton v-model="userOptions.period" inputId="periodMonth" name="period" value="month" />
            <label for="periodMonth " class="ml-2 font-light">Mesačne</label>
            <span class="font-bold">{{ plansMap[userOptions.plan].price.month }}</span>
          </div>
          <div class="flex flex-row justify-start items-center gap-4 text-sm">
            <RadioButton v-model="userOptions.period" inputId="periodYear" name="period" value="year" />
            <label for="periodMonth " class="ml-2">Ročne</label>
            <span class="font-bold">{{ plansMap[userOptions.plan].price.year }}</span>
          </div>
          <div class="flex items-center gap-4">
            <ToggleSwitch v-model="userOptions.remember" />
            <label for="remember" class="ml-2 text-sm"> Pamätať voľbu </label>
          </div>
          <div class="flex flex-row justify-center items-center gap-4 text-sm">
            <Button @click="advPopupVisible = false"
              class="bg-primary border border-white bg-white text-primary transition-all duration-500 hover:bg-primary hover:text-white rounded-full py-2 px-4">Naspäť</Button>
            <Button v-if="optionsValid" @click="submitResponse()"
              class="border border-green-900 bg-green-700 rounded-full py-2 px-4 text-white transition-all duration-500 hover:bg-transparent hover:text-green-600">Odoslať</Button>
          </div>
        </div>
      </Dialog>

    </div>
  </div>
  <div v-else>
    {{ error.statusCode }}
    {{ error.statusMessage }}
  </div>
</template>

<script setup>
const basePopupVisible = ref(false)
const advPopupVisible = ref(false)
const optionsValid = ref(false)

const plansMap = ref({
  basic: { name: "Základný", price: { month: "24,90 € / mes.", year: "209 € - Ušetríte až 30%" } },
  pro: { name: "Pokročilý", price: { month: "74,90 € / mes.", year: "629 € - Ušetríte až 30%" } }
})

const userOptions = ref({ plan: 'basic', period: '', remember: false })

watch(userOptions.value, () => {
  optionsValid.value = verifyOptions(userOptions.value)
})

const id = useRoute().query.id
const token = useRoute().query.token
const { data: item, error } = await useFetch('/api/getRecord', {
  params: { id: id, token: token },
})

function activatePopup(planName) {
  userOptions.value.plan = planName

  if (planName === 'domain') {
    userOptions.value.period = 'domain'
  } else {
    userOptions.value.period = ''
  }
  advPopupVisible.value = true
}

function verifyOptions(options) {
  if (options.plan !== 'basic' && options.plan !== 'pro' && options.plan !== 'domain') {
    return false
  }

  if (options.period !== 'month' && options.period !== 'year' && options.period !== 'domain') {
    return false
  }

  if (typeof options.remember !== 'boolean') {
    return false
  }

  return true

}

async function submitResponse() {
  if (!verifyOptions(userOptions.value)) {
    alert('Neplatný formulár')
    return;
  }

  await $fetch('/api/recordOptions', {
    headers: { 'Authorization': `Bearer ${{id: id, token: token}}` },
    body: userOptions.value,
    method: 'POST',
    credentials: 'include'
  }).then(() => {
    location.reload()
  })

}

</script>

<style></style>