<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
.is-primary {
  color: #6065d7 !important;
  border-color: transparent;
  color: #fff;
}

.button.is-primary {
  color: #fff !important;
  background-color: #1b17ec !important;
  border-color: transparent;
  color: #fff;
}
</style>
