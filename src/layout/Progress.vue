<template>
  <div
    class="progress rd-50%"
    :style="{ '--scroll-percent': `${scrollPercent}%` }"
    fixed
    bottom-12
    right-4
    p-1
    cursor-pointer
    @click="scrollToTop"
    v-if="scrollPercent > 0"
  >
    <div
      style="background-color: var(--background-primary); border-radius: 50%"
      p-1
    >
      <div
        class="i-line-md:upload-loop"
        style="color: var(--text-accent)"
        h-10
        w-10
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/pinia';

const { scrollPercent } = storeToRefs(useGlobalStore());
const calcScrollPercent = () => {
  // 整个页面内容的高度
  let scrollHeight = document.documentElement.scrollHeight;
  // 浏览器视口的可视区域高度
  let windowHeight = window.innerHeight;
  // 当前滚动的高度
  let scrollTop = document.documentElement.scrollTop;

  // 计算滚动百分比
  let scrolled = Math.ceil((scrollTop / (scrollHeight - windowHeight)) * 100);
  scrollPercent.value = Math.min(scrolled, 100);
};
const handleScroll = () => {
  requestAnimationFrame(() => {
    calcScrollPercent();
  });
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleScroll);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped lang="scss">
.progress {
  // 圆形进度条
  background: conic-gradient(
    var(--text-accent) calc(var(--scroll-percent)),
    var(--background-primary) 0
  );
}
</style>
