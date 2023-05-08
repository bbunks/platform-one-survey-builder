<script setup lang="ts">
import AccountMultipleOutline from "../icons/AccountMultipleOutline.vue";
import BellOutline from "../icons/BellOutline.vue";
import CogOutline from "../icons/CogOutline.vue";
import DatabaseActivity from "../icons/DatabaseActivity.vue";
import Finance from "../icons/Finance.vue";
import LogoIcon from "../icons/LogoIcon.vue";
import MessageOutline from "../icons/MessageOutline.vue";
import QuestionMark from "../icons/QuestionMark.vue";
import StarOutline from "../icons/StarOutline.vue";
import IconButton from "../inputs/IconButton.vue";
</script>

<template>
  <header>
    <div class="group">
      <div class="logo">
        <LogoIcon />
      </div>
      <IconButton type="primary">
        <MessageOutline />
      </IconButton>
      <IconButton type="primary">
        <AccountMultipleOutline />
      </IconButton>
      <IconButton type="primary">
        <Finance />
      </IconButton>
      <IconButton type="primary">
        <StarOutline />
      </IconButton>
      <IconButton type="primary">
        <CogOutline />
      </IconButton>
    </div>
    <div class="group">
      <IconButton type="primary">
        <BellOutline />
      </IconButton>
      <IconButton type="primary">
        <DatabaseActivity />
      </IconButton>
      <IconButton type="primary">
        <QuestionMark />
      </IconButton>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  background-color: var(--color-primary-base);
  height: 100%;
  width: 56px;
  color: var(--color-secondary-darken-4);
}

.group {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  gap: 8px;
  margin-bottom: 8px;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: var(--color-primary-darken-1);
  align-self: stretch;
}
</style>
