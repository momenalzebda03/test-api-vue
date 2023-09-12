<template>
    <div class="container mt-5">
        <form @submit.prevent="function_post" action="" method="" class="row row_gap1">
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
                    value="send">
            </div>
        </form>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const title = ref('');
const date = ref('');
const text = ref('');
const function_post = async () => {
    await axios.post("http://localhost:3000/users", {
        title: title.value,
        date: title.value,
        text: title.value
    });
    title.value = "";
    date.value = "";
    text.value = "";
}
</script>