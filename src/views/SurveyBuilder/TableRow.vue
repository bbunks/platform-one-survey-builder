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
import ContextMenu from "@/components/hoc/ContextMenu.vue";
import Button from "@/components/inputs/Button.vue";

let selected = ref(false);

defineProps({
  onDelete: {
    type: Function as PropType<() => void>,
    default: () => {},
  },
  toggle: {
    type: Function as PropType<() => void>,
    default: () => {},
  },
});
</script>

<template>
  <div :class="`container ${selected ? 'selected' : ''}`">
    <div class="row" style="justify-content: space-between; position: relative">
      <slot />

      <!--
        I decided to stick this to the right and have it sit over top the children.
        I would normally work with a designer on this. I made this decision because
        it would cause the question text to jump around which felt extremely clunky.
       -->
      <div :class="`row stuckRight ${!selected ? 'showWithHover' : 'hidden'}`">
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
      <ContextMenu>
        <template #button="{ toggleMenu }">
          <IconButton variation="secondary" @click="toggleMenu">
            <DotsVertical />
          </IconButton>
        </template>
        <template #menu>
          <Button variation="secondary">Some Actions</Button>
        </template>
      </ContextMenu>
    </div>
    <div class="fixedSize">
      <input type="checkbox" v-model="selected" :onclick="toggle" />
    </div>
  </div>
</template>

<style scoped>
@import url("./styles.css");

.stuckRight {
  position: absolute;
  right: 0;
  background-color: var(--color-secondary-lighten-4);
  padding: 4px;
  border-radius: var(--border-radius-small);
}
.selected {
  background-color: var(--color-primary-lighten-4);
}

.selected:hover {
  background-color: var(--color-primary-lighten-4) !important;
}

.showWithHover {
  display: var(--actions-display);
}

.hidden {
  display: none;
}
</style>
