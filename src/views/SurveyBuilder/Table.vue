<script setup lang="ts">
import DotsVertical from "@/components/icons/DotsVertical.vue";
import IconButton from "@/components/inputs/IconButton.vue";
import Button from "@/components/inputs/Button.vue";
import Question from "./Question.vue";
import ContextMenu from "@/components/hoc/ContextMenu.vue";
import { reactive, type PropType, computed, ref } from "vue";
import draggable from "vuedraggable";
import Delete from "@/components/icons/Delete.vue";

const props = defineProps({
  modelValue: { type: Array },
  deleteQuestionAtIndex: {
    type: Function as PropType<(index: number) => void>,
    default: () => {},
  },
});
const emit = defineEmits(["update:modelValue"]);

const tableItems = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    console.log(value);
    emit("update:modelValue", value);
  },
});
const tableId = computed(() => crypto.randomUUID());

let selectedIndexes = ref<number[]>([]);

function toggleIndex(index: number) {
  const search = selectedIndexes.value.findIndex((ele) => ele === index);
  if (search >= 0) {
    selectedIndexes.value?.splice(search, 1);
  } else {
    selectedIndexes.value?.push(index);
  }
}

function deleteSelected() {
  selectedIndexes.value.forEach((index, i) => {
    tableItems.value?.splice(index - i, 1);
  });
  selectedIndexes.value = [];
}

function deleteQuestionAtIndex(index: number) {
  tableItems.value?.splice(index, 1);
}
</script>

<template>
  <div class="container">
    <div class="title">
      <slot name="title">Table</slot>
    </div>
    <div class="fixedSize">
      <ContextMenu>
        <template #button="{ toggleMenu }">
          <IconButton variation="secondary" @click="toggleMenu">
            <DotsVertical />
          </IconButton>
        </template>
        <template #menu>
          <Button variation="secondary" @click="deleteSelected">
            <Delete /> Delete Selected
          </Button>
        </template>
      </ContextMenu>
    </div>
  </div>
  <draggable
    v-model="tableItems"
    item-key="id"
    style="gap: inherit; display: flex; flex-direction: column"
  >
    <template #item="{ element, index }">
      <div>
        <slot
          name="item"
          :element="element"
          :index="index"
          :toggle="() => toggleIndex(index)"
          :onDelete="() => deleteQuestionAtIndex(index)"
        />
      </div>
    </template>
  </draggable>
</template>

<style scoped>
@import url("./styles.css");
</style>
