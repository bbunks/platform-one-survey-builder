<script lang="ts">
import type { PropType } from "vue";

export default {
  props: {
    variation: {
      type: String as PropType<"primary" | "secondary">,
    },
    id: String,
  },
  computed: {
    // checks the variation is valid. if it is, returns it, else returns primary
    className() {
      let variation = this.variation;

      return (
        ["primary", "secondary"].find((ele) => {
          return variation === ele;
        }) ?? "primary"
      );
    },
  },
};
</script>

<template>
  <button :id="id" :class="className">
    <slot />
  </button>
</template>

<style scoped>
button {
  display: flex;
  padding: 8px;
  background-color: transparent;
  border: none;
  border-radius: 1000px;
}

.primary {
  color: var(--color-secondary-darken-4);
}

.primary:hover {
  background-color: var(--color-primary-darken-1);
}

.primary:active {
  background-color: var(--color-primary-darken-2);
}

.secondary {
  color: var(--color-secondary-darken-2);
}

.secondary:hover {
  background-color: var(--color-secondary-lighten-3);
}

.secondary:active {
  background-color: var(--color-secondary-lighten-4);
}
</style>
