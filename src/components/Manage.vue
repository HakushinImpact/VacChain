<template>
  <div class="container mt-6">
    <div class="columns is-centered">
      <div class="column is-three-fifths">
        <div class="mb-6">
          <p class="control has-icons-left">
            <input
              v-model.lazy="search"
              class="input is-rounded"
              type="text"
              placeholder="Search Record by ID"
            />
            <span class="icon is-small is-left">
              <FontAwesomeIcon icon="search" />
            </span>
          </p>
          <p class="help">Press Enter to search.</p>
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
      search: '',
      vaccinees: null
    };
  },
  watch: {
    search() {
      if (this.search) {
        axios
          .get(`http://localhost:5000/getEntry?id=${this.search}`)
          .then(response => {
            this.vaccinees = [response.data];
          });
      } else {
        this.getEntries();
      }
    }
  },
  created() {
    this.getEntries();
  },
  methods: {
    record(event) {
      this.$router.push({ name: 'Vaccination Record', params: { id: event } });
    },
    getEntries() {
      axios.post('http://localhost:5000/getEntries').then(response => {
        this.vaccinees = response.data;
      });
    }
  }
};
</script>

<style>
</style>