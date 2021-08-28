<template>
  <div class="box" @click="record(vaccinee._id)">
    <div class="columns is-vcentered">
      <div class="column has-text-centered is-3">
        <span class="icon is-large fa-5x">
          <FontAwesomeIcon icon="user" />
        </span>
      </div>
      <div class="column">
        <div>
          <p class="title is-4 is-primary">
            {{ vaccinee.personal_info.first_name }}
            {{ vaccinee.personal_info.middle_name }}
            {{ vaccinee.personal_info.last_name }}
            {{ vaccinee.personal_info.suffix }}
          </p>
          <p class="subtitle is-6 is-primary">
            Vaccination Status: Vaccinated ({{ vaccinee.vaccine_info.dosage }}
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
    record(entry_id) {
      this.$router.push({
        name: 'Vaccination Record',
        params: { id: entry_id }
      });
    }
  }
};
</script>

<style>
</style>