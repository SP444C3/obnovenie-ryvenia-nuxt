<template>
  <main class="w-screen h-screen flex flex-col justify-center items-center">
    <MainLogoWhite class="w-[200px] mb-6" />
    <div class="login-container">
      <form @submit.prevent="login">
        <div class="flex flex-row relative">
          <FloatLabel>
            <InputText class="px-4 py-2 focus:border-white border border-transparent rounded-none" :class="{'border-red-500': error}" id="password"
              type="password" v-model="password" autocomplete="current-password"/>
            <label for="password">Heslo</label>
          </FloatLabel>
          <Message v-if="error" class="absolute top-px left-full w-[150px] rounded-none" severity="error">{{ error }}</Message>
        </div>
        <button
          class="mt-4 text-center w-full font-body text-black bg-white py-2 border hover:bg-transparent hover:text-white ease-out duration-300"
          type="submit">Prihlásiť</button>
      </form>
    </div>
  </main>
</template>

<script setup>
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';

definePageMeta({
  middleware: 'loginpage'
})

const password = ref('')
const error = ref(null)

async function login() {

  const { verified, error: apiError } = await $fetch('/api/login', {
    query: { password: password.value },
  })
  error.value = apiError

  if (verified) {
    navigateTo('/manage')
  }
}

watchEffect(() => {
  if (error.value !== null) {
    setTimeout(() => error.value = null, 5000)
  }
})

</script>