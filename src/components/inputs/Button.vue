<script lang="ts">
export default {
  data() {
    return {};
  },
  props: {
    variation: {
      type: String,
    },
  },
  computed: {
    // checks the variation is valid. if it is, returns it, else returns primary
    className() {
      let variation = this.variation;

      return (
        ["primary", "secondary", "tertiary"].find((ele) => {
          return variation === ele;
        }) ?? "primary"
      );
    },
  },
};
</script>

<template>
  <button :class="className">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  gap: 8px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  border-radius: var(--border-radius-large);
}

.primary {
  color: var(--color-primary-darken-4);
  background-color: var(--color-primary-base);
}

.primary:hover {
  background-color: var(--color-primary-darken-1);
}

.primary:active {
  background-color: var(--color-primary-darken-2);
}

.secondary {
  color: var(--color-secondary-darken-2);
  background-color: var(--color-secondary-lighten-4);
}

.secondary:hover {
  background-color: var(--color-secondary-lighten-3);
}

.secondary:active {
  background-color: var(--color-secondary-lighten-2);
}

.tertiary {
  color: var(--color-basic-white);
  background-color: var(--color-secondary-darken-4);
}

.tertiary:hover {
  background-color: var(--color-secondary-darken-3);
}

.tertiary:active {
  background-color: var(--color-secondary-darken-2);
}
</style>
