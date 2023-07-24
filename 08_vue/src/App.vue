<template>
  <div id="app">
    <h3>Welcome!</h3>
    <nav>
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();

const goToIndex = () => {
  router.push('/')
}

const goToMine = () => {
  router.push('/mine')
}
</script>