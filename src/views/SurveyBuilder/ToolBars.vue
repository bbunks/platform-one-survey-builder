<script setup lang="ts">
import ToolBar from "@/components/toolbar/ToolBar.vue";
import ToolbarDetails from "@/components/toolbar/ToolbarDetails.vue";
import Group from "@/components/toolbar/Group.vue";
import Button from "@/components/inputs/Button.vue";
import RadioButtonGroup from "@/components/inputs/RadioButtonGroup.vue";
import ArrowCollapseVertical from "@/components/icons/ArrowCollapseVertical.vue";
import ArrowExpandVertical from "@/components/icons/ArrowExpandVertical.vue";

const { onSizeUpdate } = defineProps(["onSizeUpdate"]);
const options = ["min", "max"];
</script>

<template>
  <ToolBar>
    <ToolbarDetails />
    <Group>
      <Group variation="button">
        <Button variation="secondary"> Preview </Button>
        <Button variation="secondary"> Logic path </Button>
      </Group>
      <Group variation="button">
        <Button variation="primary"> Save </Button>
        <Button variation="tertiary"> Publish </Button>
      </Group>
    </Group>
  </ToolBar>
  <ToolBar>
    <Group>
      <RadioButtonGroup :options="options" @optionChange="onSizeUpdate">
        <template v-slot:one>
          <ArrowCollapseVertical />
          Min
        </template>
        <template v-slot:two>
          <ArrowExpandVertical />
          Max
        </template>
      </RadioButtonGroup>
    </Group>
  </ToolBar>
</template>
