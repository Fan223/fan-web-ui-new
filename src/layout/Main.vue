<template>
  <main>
    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
