<template>
  <div>
    <p class="title is-1 has-text-centered">Vaccination Registration Form</p>
    <PersonalInformationForm v-show="show" @next-page="nextPage" />
    <HealthInformationForm v-show="!show" @back-page="backPage" @submit="submit" />
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
      personal_form: {},
      health_form: {},
      show: true
    };
  },
  methods: {
    backPage(){
      this.show = !this.show
    },
    nextPage($data) {
      this.show = !this.show
      this.personal_form = $data
    },
    submit($data) {
      this.health_form = $data
      const regform_data = {...this.personal_form, ...this.health_form}
      this.$router.push({name: 'Vaccination Record', params: {vaccinee: regform_data}});
    }
  }
};
</script>

<style>
</style>