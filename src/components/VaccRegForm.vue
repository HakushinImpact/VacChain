<template>
  <div>
    <p class="title is-1 has-text-centered">Vaccination Registration Form</p>
    <PersonalInformationForm
      v-show="page === 1"
      @next-page="nextPage($event)"
    />
    <HealthInformationForm
      v-show="page === 2"
      @back-page="backPage"
      @submit="submit($event)"
    />
  </div>
</template>

<script>
import PersonalInformationForm from './PersonalInformationForm.vue';
import HealthInformationForm from './HealthInformationForm.vue';

import axios from 'axios';

export default {
  components: {
    PersonalInformationForm,
    HealthInformationForm
  },
  data() {
    return {
      personal_form: {},
      health_form: {},
      page: 1
    };
  },
  methods: {
    backPage() {
      this.page = 1;
    },
    nextPage(data) {
      this.page = 2;
      this.personal_form = data;
    },
    async submit(data) {
      this.health_form = data;
      const regform_data = { ...this.personal_form, ...this.health_form };

      const entry_id = await axios
        .post('http://localhost:5000/insertEntry', regform_data)
        .then(response => {
          return response.data;
        });

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