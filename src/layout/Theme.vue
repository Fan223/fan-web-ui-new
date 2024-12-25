<template>
  <div :style="{ height: size, width: size }" cursor-pointer>
    <div
      class="i-ic:round-contrast"
      @click="changeTheme('light')"
      v-if="'os' === theme"
    />
    <div
      class="i-line-md:sunny-filled-loop"
      @click="changeTheme('dark')"
      v-if="'light' === theme"
    />
    <div
      class="i-line-md:moon-filled-loop"
      @click="changeTheme('os')"
      v-if="'dark' === theme"
    />
  </div>
</template>

<script setup lang="ts">
import theme from '@/assets/ts/theme';
import { type Theme } from '@/assets/ts/theme';

defineProps({
  size: {
    type: String,
    default: '2rem',
  },
});
const changeTheme = (val: Theme) => {
  theme.value = val;
};
</script>

<style scoped lang="scss">
div {
  height: inherit;
  width: inherit;
}
</style>
