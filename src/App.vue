<template>
  <PageNavbar />
  <ComponentMain />
  <router-view />
  <PageFooter />
</template>

<script setup>
import PageNavbar from "@/components/ComponentNavbar.vue";
import ComponentMain from "@/components/ComponentMain.vue";
import PageFooter from "@/components/ComponentFooter.vue";
</script>