<template>
  <div>
    <p class="title is-1 has-text-centered">Vaccination Registration Form</p> 
    <PersonalInformationForm v-show="show" @next-page="togglePage"/>
    <HealthInformationForm v-show="!show" @back-page="togglePage"/>
  </div>
</template>

<script>
import PersonalInformationForm from './PersonalInformationForm.vue';
import HealthInformationForm from './HealthInformationForm.vue';

export default {
  components: {
    PersonalInformationForm,
    HealthInformationForm
  },
  data() {
    return {
      view: PersonalInformationForm,
      show: true
    }
  },
  methods: {
    togglePage(){
      this.show = !this.show
    }
  }
};
</script>

<style>
</style>