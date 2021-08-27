<template>
  <div class="container mt-6">
    <div class="columns is-centered">
      <div class="column is-three-fifths">
        <div class="mb-6">
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
    </div>
    <VaccineeCard
      v-for="(vaccinee, index) in vaccinees"
      :key="index"
      :vaccinee="vaccinee"
    />
  </div>
</template>

<script>
import axios from 'axios';
import VaccineeCard from './VaccineeCard.vue';

export default {
  name: 'Manage',
  components: {
    VaccineeCard
  },
  data() {
    return {
      vaccinees: null
    };
  },
  created() {
    axios.get('http://localhost:5000/getEntries').then(response => {
      this.vaccinees = response.data;
    });
  },
  methods: {
    record(event) {
      this.$router.push({ name: 'Vaccination Record', params: { id: event } });
    }
  }
};
</script>

<style>
</style>