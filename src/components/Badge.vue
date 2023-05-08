<template>
  <div class="badge">
    <slot />
  </div>
</template>

<style scoped>
.badge {
  background-color: var(--color-secondary-lighten-3);
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  border-radius: var(--border-radius-small);
  padding: 2px 6px;
}
</style>
