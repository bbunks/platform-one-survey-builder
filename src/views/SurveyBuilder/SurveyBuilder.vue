<script setup lang="ts">
import Divider from "@/components/Divider.vue";
import ToolBars from "./ToolBars.vue";
import Questions from "./Questions.vue";
import EndPages from "./EndPages.vue";
import { reactive, watch } from "vue";

function onSizeUpdate(size: string) {
  console.log(size);
}

const data = reactive({
  pages: [
    {
      id: 1,
      name: "Screenout",
      flags: ["System Default"],
    },
    {
      id: 2,
      name: "Quota Full",
      flags: ["System Default"],
    },
    {
      id: 3,
      name: "Complete",
      flags: ["System Default"],
    },
  ],
  questions: [
    {
      id: 1,
      question: "Do you have a garden?*",
      logic: ["Go to Screenout"],
    },
    {
      id: 2,
      question: "Who does most of the gardening in your household?*",
      logic: ["Skip Q3"],
    },
    {
      id: 3,
      question: "How much time do you spend gardening on average per week?*",
      logic: [],
    },
    {
      id: 4,
      question: "How big is your garden?*",
      logic: [],
    },
  ],
});

function deleteQuestionAtIndex(index: number) {
  console.log("deleting question", index);
  data.questions.splice(index, 1);
}

function deletePageAtIndex(index: number) {
  console.log("deleting pages", index);
  data.pages.splice(index, 1);
}
</script>

<template>
  <ToolBars :onSizeUpdate="onSizeUpdate" />
  <Divider />
  <div class="scrollContainer">
    <Questions
      v-model="data.questions"
      :deleteQuestionAtIndex="deleteQuestionAtIndex"
    />
    <EndPages v-model="data.pages" :deletePageAtIndex="deletePageAtIndex" />
  </div>
</template>

<style>
.scrollContainer {
  align-self: stretch;
  flex-grow: 1;
  overflow: scroll;
  padding: 24px 88px;
  gap: 4px;
  display: flex;
  flex-direction: column;
}
</style>
