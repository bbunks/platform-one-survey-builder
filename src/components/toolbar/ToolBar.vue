<script setup lang="ts">
import Button from "../inputs/Button.vue";
</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;

  /* Inside auto layout */
  align-self: stretch;
  flex-grow: 0;
}

.container :only-child {
  margin: 0 auto;
}
</style>
