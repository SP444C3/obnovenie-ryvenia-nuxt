<template>
  <div>
    <h1>Firestore Data</h1>
    <ul>
      <li >
        {{ items }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: items } = await useFetch('/api/getRecords',{
    
})
</script>
