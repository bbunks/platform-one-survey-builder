<script setup lang="ts">
import DotsVertical from "@/components/icons/DotsVertical.vue";
import IconButton from "@/components/inputs/IconButton.vue";
import Question from "./Question.vue";
import { reactive, type PropType, computed } from "vue";
import draggable from "vuedraggable";

const props = defineProps({
  modelValue: { type: Array as PropType<Question[]> },
  deleteQuestionAtIndex: {
    type: Function as PropType<(index: number) => void>,
    default: () => {},
  },
});
const emit = defineEmits(["update:modelValue"]);

const questions = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    console.log(value);
    emit("update:modelValue", value);
  },
});

const data = reactive({ drag: false });
</script>

<template>
  <div class="container">
    <h2 class="title">Questions</h2>
    <div class="fixedSize">
      <IconButton variation="secondary">
        <DotsVertical />
      </IconButton>
    </div>
  </div>
  <draggable
    v-model="questions"
    @start="data.drag = true"
    @end="data.drag = false"
    item-key="{{ question.id + question.question }}"
  >
    <template #item="{ element, index }">
      <Question
        :onDelete="() => deleteQuestionAtIndex(index)"
        :question="element"
        :index="index"
      />
    </template>
  </draggable>
</template>

<style scoped>
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

.title {
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
}

.fixedSize {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
