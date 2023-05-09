<script setup lang="ts">
import DotsVertical from "@/components/icons/DotsVertical.vue";
import IconButton from "@/components/inputs/IconButton.vue";
import Question from "./Question.vue";
import type { PropType } from "vue";

const { questions } = defineProps({
  questions: { type: Array as PropType<Question[]> },
  deleteQuestionAtIndex: {
    type: Function as PropType<(index: number) => void>,
    default: () => {},
  },
});
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
  <Question
    v-for="(question, i) in questions"
    key="{{ question.id + question.question }}"
    :onDelete="() => deleteQuestionAtIndex(i)"
    :question="question"
    :index="i"
  />
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
