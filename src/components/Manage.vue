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
    <div v-for="(item, index) in haha" :key="index" class="columns is-centered">
      <div class="column is-7">
        <VaccineeCard @click-entry="record"/>
      </div>
    </div>
  </div>
</template>

<script>
import VaccineeCard from './VaccineeCard.vue'

export default {
  name: "Manage",
  components: {
    VaccineeCard
  },
  data() {
    return{
      haha: ['1', '2', '3']
    }
  },
  methods: {
    record(){
      this.$router.push('record');
    }
  }
};
</script>

<style>
</style>