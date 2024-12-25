<template>
  <Aurora />
  <Starry />

  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>

<script setup lang="ts">
import Aurora from './Aurora.vue';
import Starry from './Starry.vue';
</script>

<style scoped lang="scss"></style>
