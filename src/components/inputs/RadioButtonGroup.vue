<script lang="ts">
import type { Prop, PropType, VueElement } from "vue";

// A current resctrition of this component is that it will always start on the first option.
// You can also not update its value from outside the component.

export default {
  props: {
    name: String,
    options: {
      type: Array as PropType<string[]>,
    },
  },
  computed: {
    inputName() {
      return this.name ?? crypto.randomUUID();
    },
  },
  methods: {
    change(e: MouseEvent) {
      e.stopPropagation();
      this.$emit("optionChange", (e.target as HTMLInputElement).value);
    },
  },
};
</script>

<template>
  <div class="buttonGroup">
    <div class="button" v-for="(option, i) in options" key="{{ inputName+i }}">
      <input
        type="radio"
        name="inputName"
        :value="option"
        :checked="i === 0"
        @click="change"
      />
      <label>
        <slot :name="option">
          {{ option.charAt(0).toUpperCase() + option.slice(1) }}
        </slot>
      </label>
    </div>
  </div>
</template>

<style scoped>
.buttonGroup {
  display: flex;
  border-radius: var(--border-radius-large);
  overflow: hidden;
}

.button {
  position: relative;
  display: flex;
  align-items: stretch;
}

.button > label {
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  padding: 8px 14px;
  color: var(--color-secondary-darken-2);
  background-color: var(--color-secondary-lighten-4);
}

.button > label:hover {
  background-color: var(--color-secondary-lighten-3);
}

.button > label:active {
  background-color: var(--color-secondary-lighten-2);
}

input[type="radio"] {
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 100;
  opacity: 0;
  border: 0px;
}

input[type="radio"]:checked + label {
  color: var(--color-basic-white);
  background-color: var(--color-secondary-darken-4);
}
</style>
