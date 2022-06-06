<template>
  <div>
    coucou
    <div v-for="user in users">
    {{user.email}}
    </div>

  </div>
</template>

<script setup lang="ts">
  const {data:users} = await useFetch('/api/users')
</script>
