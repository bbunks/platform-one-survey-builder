<script setup lang="ts">
import DotsVertical from "@/components/icons/DotsVertical.vue";
import IconButton from "@/components/inputs/IconButton.vue";
import EndPage from "./EndPage.vue";
import Plus from "@/components/icons/Plus.vue";
import type { PropType } from "vue";

const { pages } = defineProps({
  pages: {
    type: Array as PropType<EndPage[]>,
    default: [],
  },
  deletePageAtIndex: {
    type: Function as PropType<(index: number) => void>,
    default: () => {},
  },
});
defineEmits(["update:pages"]);
</script>

<template>
  <div class="container">
    <div style="display: flex">
      <h2 class="title">End Pages</h2>
      <IconButton variation="secondary">
        <Plus />
      </IconButton>
    </div>
    <div class="fixedSize">
      <IconButton variation="secondary">
        <DotsVertical />
      </IconButton>
    </div>
  </div>
  <EndPage
    v-for="(page, i) in pages"
    key="{{page.name + i}}"
    :endPage="page"
    :onDelete="() => deletePageAtIndex(i)"
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
  font-weight: 700;
  font-size: 17px;
  line-height: 32px;
}

.fixedSize {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
