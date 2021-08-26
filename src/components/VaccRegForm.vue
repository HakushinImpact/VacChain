<template>
  <div> 
    <PersonalInformationForm />
    <HealthInformationForm />
  </div>
</template>

<script>
import PersonalInformationForm from './PersonalInformationForm.vue';
import HealthInformationForm from './HealthInformationForm.vue';

export default {
  components: {
    PersonalInformationForm,
    HealthInformationForm
  }
};
</script>

<style>
</style>