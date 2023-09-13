<template>
    <div class="container mt-5">
        <div class="d-flex flex-column gap-4">
            <div class="bg-white p-4 rounded-3 d-flex justify-content-between" v-for="get_user in   get_users  "
                :key="get_user">
                <div class="d-flex flex-column gap-2">
                    <h2 class="fw-bold">{{ get_user.title }}</h2>
                    <h3 class="fs-6">{{ get_user.date }}</h3>
                    <p>{{ get_user.text }}</p>
                    <router-link :to="{ name: 'update', params: { id: get_user.id } }"
                        class="btn btn-secondary">update</router-link>
                </div>
                <div>
                    <div @click="function_delete(get_user.id)"
                        class="bg-black rounded-circle image_close users_hover d-flex align-items-center justify-content-center">
                        <img src="@/assets/icon_close.svg" alt="Close Icon" class="w-50">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
const get_users = ref();
const function_get = async () => {
    try {
        const get_url = await axios.get("http://localhost:3000/users");
        get_users.value = get_url.data;
    } catch (error) {
        console.error('Error deleting user:', error);
    }
}
const function_delete = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/users/${id}`);
        const updatedUsers = get_users.value.filter(user => user.id !== id);
        get_users.value = updatedUsers;
    } catch (error) {
        console.error('Error deleting user:', error);
    }
}
onMounted(() => {
    function_get();
    function_delete();
})
</script>