<script setup lang="ts">
//TODO: Write to be more extendable
import LeftArrow from "../icons/LeftArrow.vue";
import IconButton from "../inputs/IconButton.vue";
import Badge from "../Badge.vue";
import Translate from "../icons/Translate.vue";
import DotsHorizontal from "../icons/DotsHorizontal.vue";
import Button from "../inputs/Button.vue";
</script>

<template>
  <div class="container">
    <div class="controls">
      <IconButton variation="secondary"><LeftArrow /></IconButton>
      <h2 class="survey-name">Gardening Survey Spring 2023</h2>
      <Badge>English</Badge>
      <IconButton variation="secondary"><Translate /></IconButton>
      <IconButton variation="secondary"><DotsHorizontal /></IconButton>
    </div>
    <div class="controlGroup">
      <div class="buttonGroup">
        <Button variation="secondary"> Preview </Button>
        <Button variation="secondary"> Logic path </Button>
      </div>
      <div class="buttonGroup">
        <Button variation="primary"> Save </Button>
        <Button variation="tertiary"> Publish </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;

  /* Inside auto layout */
  align-self: stretch;
  flex-grow: 0;
}

.controls {
  display: flex;
  align-items: center;
  gap: 8px;

  flex-grow: 0;
  z-index: 0;
}

.buttonGroup {
  display: flex;
  align-items: center;
  gap: 16px;
}

.controlGroup {
  display: flex;
  align-items: center;
  gap: 40px;
}

.survey-name {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: var(--color-secondary-darken-4);
}
</style>
