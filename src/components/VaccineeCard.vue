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
          <p class="title is-4">
            {{ vaccinee.personal_info.first_name }}
            {{ vaccinee.personal_info.middle_name }}
            {{ vaccinee.personal_info.last_name }}
            {{ vaccinee.personal_info.suffix }}
          </p>
          <p class="subtitle is-6">
            Vaccination Status: Vaccinated ({{
              vaccinee.vaccine_info.dosage
            }}
            Dose)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VaccineeCard',
  props: {
    vaccinee: {}
  },
  methods: {
    // record(item._id){
    //   this.$router.push('record')
    // }
  }
};
</script>

<style>
</style>