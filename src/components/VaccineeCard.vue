<template>
  <div class="box" @click="record(item._id)">
    <div class="columns is-vcentered">
      <div class="column has-text-centered is-3">
        <span class="icon is-large fa-5x">
          <FontAwesomeIcon icon="user" />
        </span>
      </div>
      <div class="column">
        <div>
          <p class="title is-4">John Smith</p>
          <p class="subtitle is-6">Vaccination Status: Vaccinated (1st Dose)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VaccineeCard'
  props: {
      
  }
};
</script>

<style>
</style>