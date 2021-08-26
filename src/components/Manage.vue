<template>
  <div class="column is-4 is-offset-4 my-auto">
    <div>
      <p class="control has-icons-left">
          <input
            v-model="search"
            class="input is-rounded"
            type="text"
            placeholder="Search Record"
          />
          <span class="icon is-small is-left">
            <FontAwesomeIcon icon="search" />
          </span>
        </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>