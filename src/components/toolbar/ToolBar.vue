<script setup lang="ts">
import LeftArrow from "../icons/LeftArrow.vue";
import IconButton from "../inputs/IconButton.vue";
</script>

<template>
  <div class="container">
    <div class="controls">
      <IconButton variation="secondary"><LeftArrow /></IconButton>
    </div>
    <div class="controls">
      <IconButton><LeftArrow /></IconButton>
    </div>
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

.controls {
  display: flex;
  align-items: center;
  gap: 8px;

  flex-grow: 0;
  z-index: 0;
}
</style>
