<script setup lang="ts">
import Badge from "../shared/Badge.vue";
import DotsHorizontal from "../icons/DotsHorizontal.vue";
import LeftArrow from "../icons/LeftArrow.vue";
import Translate from "../icons/Translate.vue";
import IconButton from "../inputs/IconButton.vue";
</script>

<template>
  <div class="details">
    <IconButton variation="secondary"><LeftArrow /></IconButton>
    <h2 class="survey-name">Gardening Survey Spring 2023</h2>
    <Badge>English</Badge>
    <IconButton variation="secondary"><Translate /></IconButton>
    <IconButton variation="secondary"><DotsHorizontal /></IconButton>
  </div>
</template>

<style scoped>
.details {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-grow: 0;
  z-index: 0;
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
