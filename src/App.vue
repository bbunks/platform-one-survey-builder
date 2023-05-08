<script setup lang="ts">
import { RouterView } from "vue-router";
import Sidebar from "./components/sidebar/SideBar.vue";
</script>

<template>
  <Sidebar />

  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
.content {
  max-height: 100%;
  flex-grow: 1;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
