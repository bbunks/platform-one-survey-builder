<script setup lang="ts">
import Badge from "../../components/Badge.vue";
import ListMulti from "@/components/icons/ListMulti.vue";
import { defineProps, type PropType } from "vue";
import TableRow from "./TableRow.vue";

defineProps({
  endPage: {
    type: Object as PropType<EndPage>,
    req: true,
    default: { id: 0, name: "", flags: [] },
  },
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
        <div class="row">
          <p class="question">{{ endPage.name }}</p>
          <Badge v-for="flag in endPage.flags" key="{{ endPage.Name + flag }}">
            {{ flag }}
          </Badge>
        </div>
      </div>
    </div>
  </TableRow>
</template>

<style scoped>
.row {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 16px;
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
</style>
