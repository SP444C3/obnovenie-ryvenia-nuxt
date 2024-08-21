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

const password = ref('')
const error = ref(null)
const token = useCookie('token');

async function login() {
  const { token, error: apiError } = await $fetch('/api/login', {
    query: { password: password.value },
  })

  error.value = apiError

  if (token) {
    useCookie('token').value = token
    navigateTo('/manage')
  }
}


</script>