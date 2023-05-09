<script setup lang="ts">
import DirectionsUpsideDown from "@/components/icons/DirectionsUpsideDown.vue";
import DotsVertical from "@/components/icons/DotsVertical.vue";
import IconButton from "@/components/inputs/IconButton.vue";
import Plus from "@/components/icons/Plus.vue";
import ListHeader from "@/components/icons/ListHeader.vue";
import Edit from "@/components/icons/Edit.vue";
import EyeOutline from "@/components/icons/EyeOutline.vue";
import Delete from "@/components/icons/Delete.vue";
import { ref, type PropType } from "vue";

let hovered = ref(false);
let selected = ref(false);

const props = defineProps({
  onDelete: {
    type: Function as PropType<() => void>,
    default: () => {},
  },
});

function mouseEnter() {
  hovered.value = true;
}
function mouseLeave() {
  hovered.value = false;
}
</script>

<template>
  <div
    :class="`container ${selected ? 'selected' : ''}`"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <div class="row" style="justify-content: space-between">
      <slot />

      <div class="row" v-if="hovered && !selected">
        <IconButton variation="secondary"><Plus /></IconButton>
        <IconButton variation="secondary"><ListHeader /></IconButton>
        <IconButton variation="secondary"><Edit /></IconButton>
        <IconButton variation="secondary"><DirectionsUpsideDown /></IconButton>
        <IconButton variation="secondary"><EyeOutline /></IconButton>
        <IconButton variation="secondary" @click="() => onDelete()">
          <Delete />
        </IconButton>
      </div>
    </div>
    <div class="fixedSize">
      <IconButton variation="secondary">
        <DotsVertical />
      </IconButton>
    </div>
    <div class="fixedSize">
      <input type="checkbox" v-model="selected" />
    </div>
  </div>
</template>

<style scoped>
.status {
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 1000px;
  width: 12px;
  height: 12px;
  transform: translate(3px, 3px);
  border: 2px solid var(--color-basic-white);
  box-sizing: border-box;
}

.warning {
  background: var(--color-status-warning);
}
.question {
  color: var(--color-secondary-darken-4);
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 32px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 16px;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.iconContainer {
  position: relative;
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  border-radius: 1000px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
}

.light {
  color: var(--color-secondary-darken-4);
  background-color: var(--color-secondary-lighten-3);
}

.dark {
  color: var(--color-basic-white);
  background-color: var(--color-secondary-base);
}

.bigIconContainer {
  background: var(--color-secondary-lighten-4);
  border: 1px solid var(--color-secondary-base);
  border-radius: 8px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  padding: 12px 16px;
  display: grid;
  grid-template-columns: 1fr 40px 40px;
  gap: 20px;
  border-radius: var(--border-radius-medium);
}

.container:hover {
  background-color: var(--color-secondary-lighten-4);
}

.fixedSize {
  display: flex;
  align-items: center;
  justify-content: center;
}

.selected {
  background-color: var(--color-primary-lighten-4);
}

.selected:hover {
  background-color: var(--color-primary-lighten-4) !important;
}
</style>
