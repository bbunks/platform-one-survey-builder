<script setup lang="ts">
import Badge from "../../components/shared/Badge.vue";
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
  toggle: {
    type: Function as PropType<() => void>,
    default: () => {},
  },
});
</script>

<template>
  <TableRow :onDelete="onDelete" :toggle="toggle">
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
@import url("./styles.css");
</style>
