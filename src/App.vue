<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1 class="text-3xl font-bold underline">    Hello world!  </h1>
    <nav>
      <ul>
        <li><RouterLink :to="{ name: '/' }">HOME</RouterLink></li>
        <li>
          <RouterLink :to="{ name: '/greting/[name]', params: { name: 'Walo' } }"
            >Hi Walo</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped></style>
