<script setup lang="ts">
import DotsVertical from "@/components/icons/DotsVertical.vue";
import IconButton from "@/components/inputs/IconButton.vue";
import EndPage from "./EndPage.vue";
import Plus from "@/components/icons/Plus.vue";
import { reactive, type PropType, computed } from "vue";
import draggable from "vuedraggable";

const props = defineProps({
  modelValue: {
    type: Array as PropType<EndPage[]>,
    default: [],
  },
  deletePageAtIndex: {
    type: Function as PropType<(index: number) => void>,
    default: () => {},
  },
});
const emit = defineEmits(["update:modelValue"]);

const pages = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const data = reactive({ drag: false });
</script>

<template>
  <div class="container">
    <div style="display: flex; gap: 16px">
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
  <draggable
    v-model="pages"
    group="people"
    @start="data.drag = true"
    @end="data.drag = false"
    item-key="{{page.name + index}}"
  >
    <template #item="{ element, index }">
      <EndPage :endPage="element" :onDelete="() => deletePageAtIndex(index)" />
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
