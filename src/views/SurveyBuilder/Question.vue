<script setup lang="ts">
import Badge from "../../components/Badge.vue";
import DirectionsUpsideDown from "@/components/icons/DirectionsUpsideDown.vue";
import ListMulti from "@/components/icons/ListMulti.vue";
import { defineProps, type PropType } from "vue";
import TableRow from "./TableRow.vue";

defineProps({
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
</script>

<template>
  <TableRow :onDelete="onDelete">
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
            <p class="question">{{ question.question }}</p>
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
    </div>
  </TableRow>
</template>

<style scoped>
@import url("./styles.css");

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

.light {
  color: var(--color-secondary-darken-4);
  background-color: var(--color-secondary-lighten-3);
}

.dark {
  color: var(--color-basic-white);
  background-color: var(--color-secondary-base);
}

.container {
  padding: 12px 16px;
  display: grid;
  grid-template-columns: 1fr 40px 40px;
  gap: 20px;
  border-radius: var(--border-radius-medium);
}
</style>
