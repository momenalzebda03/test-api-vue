<template>
  <header class="navbar navbar-expand-lg navbar-light py-md-0 position-fixed w-100 top-0 start-0 colorheaderfooter">
    <div class="container">
      <router-link class="navbar-brand text-white fs-2" to="/">api vue</router-link>
      <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-md-5">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/users" :class="{ 'active': isActive('users') }">
              users
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/add" :class="{ 'active': isActive('add') }">
              add users
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/update" :class="{ 'active': isActive('update') }">
              update users
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const isActive = (routeName) => route.name === routeName;
</script>