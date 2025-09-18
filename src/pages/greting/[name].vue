<script setup lang="ts">
const route = useRoute('/greting/[name]')
const name = route.params.name
</script>

<template>
  <div>
    <h1>Hi <code>{{ name }}</code></h1>
  </div>
</template>
