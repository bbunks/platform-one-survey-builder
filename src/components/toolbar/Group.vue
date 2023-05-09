<script lang="ts">
export default {
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
        ["button", "control"].find((ele) => {
          return variation === ele;
        }) ?? "control"
      );
    },
  },
};
</script>

<template>
  <div :class="className">
    <slot />
  </div>
</template>

<style scoped>
div {
  flex-grow: 0;
}

.button {
  display: flex;
  align-items: center;
  gap: 16px;
}

.control {
  display: flex;
  align-items: center;
  gap: 40px;
}
</style>
