<template>
  <header
    :class="{ active: scrollPercent > 0 }"
    flex="~ justify-between items-center"
    p="x-8 y-4"
    sticky
    left-0
    top-0
    c-white
  >
    <div flex="~ items-center">
      <Logo @click="$router.go(0)" cursor-pointer />
      <Nav />
    </div>
    <Theme />
  </header>
</template>

<script setup lang="ts">
import Nav from './Nav.vue';
import Theme from './Theme.vue';
import { useGlobalStore } from '@/pinia';

const { scrollPercent } = storeToRefs(useGlobalStore());
</script>

<style scoped lang="scss">
header {
  transition: var(--main-transition);

  &.active {
    background-color: var(--background-backdrop);
    backdrop-filter: blur(0.5rem);
    color: var(--text-bright);
    padding: 0.5rem 2rem;
  }
}
</style>
