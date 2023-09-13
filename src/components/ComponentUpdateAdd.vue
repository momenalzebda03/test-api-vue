<template>
    <div class="container mt-5">
        <form @submit.prevent="performAction" class="row row_gap1">
            <div class="col-md-6">
                <input type="text" class="w-100 py-3 rounded-4 border border-0 input_color px-4" placeholder="enter title"
                    v-model="title">
            </div>
            <div class="col-md-6">
                <input type="date" class="w-100 py-3 rounded-4 border border-0 input_color px-4" placeholder="enter date"
                    v-model="date">
            </div>
            <div class="col-md-6">
                <input type="text" class="w-100 py-3 rounded-4 border border-0 input_color px-4" placeholder="enter text"
                    v-model="text">
            </div>
            <div class="col-md-12">
                <input type="submit"
                    class="mt-4 w-100 py-3 rounded-4 border border-0 input_color input_submit text-white fw-bold"
                    :value="isEdit ? 'Update' : 'Create'">
            </div>
        </form>
    </div>
</template>
    
<script setup>
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import { ref, computed, onMounted } from "vue";
const route = useRoute();
const router = useRouter();
const title = ref('');
const date = ref('');
const text = ref('');
const isEdit = computed(() => {
    return route.params.id !== undefined;
});
onMounted(async () => {
    if (isEdit.value) {
        try {
            const response = await axios.get(`http://localhost:3000/users/${route.params.id}`);
            const userData = response.data;
            title.value = userData.title;
            date.value = userData.date;
            text.value = userData.text;
        } catch (error) {
            console.error(error);
        }
    }
});
const performAction = async () => {
    if (isEdit.value) {
        try {
            await axios.put(`http://localhost:3000/users/${route.params.id}`, {
                title: title.value,
                date: date.value,
                text: text.value,
            });
            router.push('/users');
        } catch (error) {
            console.error(error);
        }
    } else {
        try {
            await axios.post("http://localhost:3000/users", {
                title: title.value,
                date: date.value,
                text: text.value,
            });
            router.push('/users');
        } catch (error) {
            console.log(error);
        }
    }
}
</script>