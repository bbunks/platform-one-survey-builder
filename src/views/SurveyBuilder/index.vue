<script setup lang="ts">
import Divider from "@/components/Divider.vue";
import ToolBars from "./ToolBars.vue";

function onSizeUpdate(size: string) {
  console.log(size);
}

const options = ["one", "two"];
</script>

<template>
  <ToolBars :onSizeUpdate="onSizeUpdate" :options="options" />
  <Divider />
  <Questions />
  <EndPages />
</template>
