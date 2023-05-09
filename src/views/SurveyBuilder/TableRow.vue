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
    <div class="row" style="justify-content: space-between; position: relative">
      <slot />

      <!--
        I decided to stick this to the right and have it sit over top the children.
        I would normally work with a designer on this. I made this decision because
        it would cause the question text to jump around which felt extremely clunky.
       -->
      <div class="row stuckRight" v-if="hovered && !selected">
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
@import url("./styles.css");
.stuckRight {
  position: absolute;
  right: 0;
  background-color: var(--color-secondary-lighten-4);
}

.selected {
  background-color: var(--color-primary-lighten-4);
}

.selected:hover {
  background-color: var(--color-primary-lighten-4) !important;
}
</style>
