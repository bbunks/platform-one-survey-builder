<script setup lang="ts">
import { computed, ref, watch } from "vue";

const open = ref(false);
const button = ref<HTMLElement | null>(null);

// can't use compute because it needs to update the position on rerender
const style = () => {
  const rect = button.value?.getBoundingClientRect();
  if (rect)
    return `top: ${rect.bottom + 4}px; right: ${
      window.innerWidth - rect.right
    }px;`;
  return "";
};

function toggleMenu() {
  open.value = !open.value;
  if (open.value) {
    setupListeners();
  } else {
    stopListeners();
  }
}

function setupListeners() {
  setTimeout(() => {
    window.addEventListener("click", closeMenu);
  }, 100);
}

function stopListeners() {
  window.removeEventListener("click", closeMenu);
}

function closeMenu() {
  open.value = false;
  stopListeners();
}
</script>

<template>
  <div ref="button">
    <slot name="button" :toggleMenu="toggleMenu" />
    <Teleport to="body">
      <div class="container" :style="style()" v-if="open">
        <slot name="menu" />
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  background-color: var(--color-basic-white);
  border-radius: var(--border-radius-medium);
  padding: 8px;
  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
    drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
}
</style>
