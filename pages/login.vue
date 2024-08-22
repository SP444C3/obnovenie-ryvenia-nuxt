<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <div>
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" />
      </div>
      <button type="submit">Login</button>
    </form>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'loginpage'
})

const password = ref('')
const error = ref(null)
const jwtCookie = useCookie('token', { maxAge: 60 * 60 * 24 * 30, secure: true });

async function login() {
  
  const { verified, error: apiError } = await $fetch('/api/login', {
    query: { password: password.value },
  })
  error.value = apiError

  if (verified) {
    navigateTo('/manage')
  }
}

</script>