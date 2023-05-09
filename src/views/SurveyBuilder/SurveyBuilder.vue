<script setup lang="ts">
import Divider from "@/components/shared/Divider.vue";
import ToolBars from "./ToolBars.vue";
import Question from "./Question.vue";
import { reactive } from "vue";
import IconButton from "@/components/inputs/IconButton.vue";
import EndPage from "./EndPage.vue";
import Table from "./Table.vue";
import Plus from "@/components/icons/Plus.vue";

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
</script>

<template>
  <ToolBars :onSizeUpdate="onSizeUpdate" />
  <Divider />
  <div class="scrollContainer">
    <Table id="questions" v-model="data.questions">
      <template #title>
        <h2 class="thinTitle">Questions</h2>
      </template>
      <template #item="{ element, index, toggle, onDelete }">
        <Question
          :onDelete="onDelete"
          :question="element"
          :index="index"
          :toggle="toggle"
          :id="`questionRow${index}`"
        />
      </template>
    </Table>
    <Table id="endPages" v-model="data.pages">
      <template #title>
        <div class="row">
          <h2 class="boldTitle">End Pages</h2>
          <IconButton variation="secondary">
            <Plus />
          </IconButton>
        </div>
      </template>
      <template #item="{ element, index, toggle, onDelete }">
        <EndPage
          :endPage="element"
          :onDelete="onDelete"
          :toggle="toggle"
          :id="`endPageRow${index}`"
        />
      </template>
    </Table>
  </div>
</template>

<style scoped>
@import url("./styles.css");
.scrollContainer {
  position: relative;
  align-self: stretch;
  flex-grow: 1;
  overflow: scroll;
  padding: 24px 88px;
  gap: 4px;
  display: flex;
  flex-direction: column;
}

.thinTitle {
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  z-index: 10;
}

.boldTitle {
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 32px;
}
</style>
