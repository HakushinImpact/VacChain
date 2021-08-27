<template>
  <div class="container mt-6">
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
    <VaccineeCard
      v-for="(item, index) in haha"
      :key="index"
    />
  </div>
</template>

<script>
import VaccineeCard from './VaccineeCard.vue';

export default {
  name: 'Manage',
  components: {
    VaccineeCard
  },
  data() {
    return {
      haha: ['1', '2', '3']
    };
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