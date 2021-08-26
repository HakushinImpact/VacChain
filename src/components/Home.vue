<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './Navbar';

export default {
  name: 'Home',
  components: {
    Navbar
  }
};
</script>

<style>
</style>