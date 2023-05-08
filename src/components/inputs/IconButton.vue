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
        ["primary", "secondary"].find((ele) => {
          return variation === ele;
        }) ?? "primary"
      );
    },
  },
};
</script>

<template>
  <button :class="className">
    <slot />
  </button>
</template>

<style>
button {
  display: flex;
  padding: 8px;
  background-color: transparent;
  border: none;
  border-radius: 1000px;
}

.primary:hover {
  background-color: var(--color-primary-darken-1);
}

.secondary:hover {
  background-color: var(--color-secondary-lighten-3);
}
</style>
