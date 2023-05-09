<script setup lang="ts">
import Badge from "../../components/Badge.vue";
import DirectionsUpsideDown from "@/components/icons/DirectionsUpsideDown.vue";
import DotsVertical from "@/components/icons/DotsVertical.vue";
import ListMulti from "@/components/icons/ListMulti.vue";
import IconButton from "@/components/inputs/IconButton.vue";
import Plus from "@/components/icons/Plus.vue";
import ListHeader from "@/components/icons/ListHeader.vue";
import Edit from "@/components/icons/Edit.vue";
import EyeOutline from "@/components/icons/EyeOutline.vue";
import Delete from "@/components/icons/Delete.vue";
import { reactive, defineProps, type PropType } from "vue";

const state = reactive({ hovered: false, selected: false });
const { question } = defineProps({
  question: {
    type: Object as PropType<Question>,
    req: true,
    default: { id: 0, question: "", logic: [] },
  },
  index: { type: Number, req: true, default: 0 },
  onDelete: {
    type: Function as PropType<() => void>,
    default: () => {},
  },
});

function mouseEnter() {
  state.hovered = true;
}
function mouseLeave() {
  state.hovered = false;
}
</script>

<template>
  <div class="container" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="row" style="justify-content: space-between">
      <div class="row">
        <div class="bigIconContainer">
          <ListMulti />
        </div>
        <div class="column">
          <div class="row">
            <div class="iconContainer light">
              <p>Q{{ index + 1 }}</p>
              <div class="status warning" />
            </div>
            <p class="question">{{ question?.question }}</p>
          </div>
          <div class="row" v-if="question.logic.length > 0">
            <div class="iconContainer dark">
              <DirectionsUpsideDown />
              <div class="status warning" />
            </div>
            <Badge
              v-for="(logic, i) in question.logic"
              key="{{ question.id.toString() + i }}"
              >{{ logic }}</Badge
            >
          </div>
        </div>
      </div>

      <div class="row" v-if="state.hovered">
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
      <input type="checkbox" v-model="state.selected" />
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
</style>
