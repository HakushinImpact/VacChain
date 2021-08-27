<template>
  <div class="container">
    <div class="columns is-centered">
      <img src="../assets/404_not_found.png" />
    </div>
    <div class="has-text-centered">
      <p class="title">OOPS... Page not Found!</p>
      <div>
        <router-link :to="{ name: 'Login' }" class="button is-primary is-rounded">
        Login
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Not Found"
};
</script>

<style>
</style>