<template>
    <div class="pt-5 mt-5 text-center container">
        <!-- start main -->
        <h1>this page admin is <span class="fw-bold color_red">{{ route.name }}</span></h1>
        <h2 class="fs-6">this page is for <span class="fw-bold color_red">{{ route.name }}</span></h2>
        <!-- end main -->
    </div>
</template>
    
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>