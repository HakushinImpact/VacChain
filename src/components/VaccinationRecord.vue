<template>
  <div class="container">
    <div class="columns is-centered my-6">
      <div class="column is-three-quarters">
        <div class="columns is-vcentered is-centered">
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
              <p
                v-if="!(typeof vaccinee.vaccine_info === 'undefined')"
                class="subtitle is-6"
              >
                Vaccination Status: Vaccinated ({{
                  vaccinee.vaccine_info.dosage
                }}
                Dose)
              </p>
            </div>
            <div class="mt-2">
              <p class="is-size-6">
                Address: {{ vaccinee.personal_info.contact.address }}
              </p>
              <p class="is-size-6">
                Contact Number: {{ vaccinee.personal_info.contact.number }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-centered">
      <div class="column is-three-quarters">
        <span class="icon-text">
          <span class="title is-3 mr-2">Vaccine History</span>
          <button class="button is-small" @click="edit">
            <span class="icon is-small">
              <FontAwesomeIcon icon="edit" />
            </span>
          </button>
        </span>
        <div v-for="(vaccine, index) in vaccinee.vaccine_info" :key="index">
          <p class="is-size-5">Vaccine Name: {{ vaccine.name }}</p>
          <p class="is-size-6">
            Date of Vaccination: {{ vaccine.date_of_vaccination }}
          </p>
          <p class="is-size-6">Dosage: {{ vaccine.dosage }}</p>
          <p class="is-size-6">Batch No: {{ vaccine.batch_no }}</p>
          <p class="is-size-6">
            Health Facility Name: {{ vaccine.health_facility }}
          </p>
          <p class="is-size-5 mt-2">
            Vaccinator Name: {{ vaccine.vaccinator.first_name }}
            {{ vaccine.vaccinator.middle_name }}
            {{ vaccine.vaccinator.last_name }} {{ vaccine.vaccinator.suffix }}
          </p>
        </div>
      </div>
    </div>

    <div v-show="clicked">
      <hr />
      <div class="columns is-centered">
        <div class="column is-three-quarters">
          <p class="title is-1 has-text-centered">Vaccination Record Form</p>

          <div>
            <h1 class="title is-3 mb-5">Vaccine Details</h1>
          </div>

          <div class="columns field is-horizontal">
            <div class="column is-3 field-body">
              <p class="label mb-1">Dosage</p>
              <span class="select is-fullwidth">
                <select v-model="vaccine_info.dosage">
                  <option value="" disabled hidded>Dosage</option>
                  <option v-for="(item, index) in dosage" :key="index">
                    {{ item }}
                  </option>
                </select>
              </span>
            </div>

            <div class="column is-4 field-body">
              <p class="label mb-1">Date Administered</p>
              <input
                class="input"
                type="date"
                v-model="vaccine_info.date_of_vaccination"
              />
            </div>

            <div class="column is-5 field-body">
              <p class="label mb-1">Vaccine Manufacturer</p>
              <span class="select is-fullwidth">
                <select v-model="vaccine_info.name">
                  <option value="" disabled hidden>Vaccine Manufacturer</option>
                  <option
                    v-for="(item, index) in vaccineManufacturer"
                    :key="index"
                  >
                    {{ item }}
                  </option>
                </select>
              </span>
            </div>
          </div>

          <div class="columns field is-horizontal">
            <div class="column is-5 field-body">
              <input
                class="input"
                type="text"
                placeholder="Batch No."
                v-model="vaccine_info.batch_no"
              />
            </div>
            <div class="column is-7 field-body">
              <input
                class="input"
                type="text"
                placeholder="Health Facility"
                v-model="vaccine_info.health_facility"
              />
            </div>
          </div>

          <p class="label mb-1">Vaccinator Name</p>
          <div class="columns field is-horizontal">
            <div class="column is-3 field-body">
              <input
                type="text"
                class="input"
                placeholder="Last Name"
                v-model="vaccine_info.vaccinator.last_name"
              />
            </div>

            <div class="column is-4 field-body">
              <input
                type="text"
                class="input"
                placeholder="First Name"
                v-model="vaccine_info.vaccinator.first_name"
              />
            </div>

            <div class="column is-3 field-body">
              <input
                type="text"
                class="input"
                placeholder="Middle Name"
                v-model="vaccine_info.vaccinator.middle_name"
              />
            </div>

            <div class="column is-2 field-body">
              <input
                type="text"
                class="input"
                placeholder="Suffix"
                v-model="vaccine_info.vaccinator.suffix"
              />
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <div class="field is-pulled-right">
                <p class="control">
                  <button class="button is-success" @click="submit">
                    Submit
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'VaccinationRecord',
  props: {
    id: String
  },
  data() {
    return {
      clicked: false,
      vaccinee: {},
      vaccine_info: {
        name: '',
        dosage: '',
        date_of_vaccination: '',
        batch_no: '',
        health_facility: '',
        vaccinator: {
          last_name: '',
          first_name: '',
          middle_name: '',
          suffix: ''
        }
      },
      vaccineManufacturer: [
        'Pfizer-BioNTech Comirnaty',
        'Oxfor-AstraZeneca',
        'Sinovac CoronaVac',
        'Gamaleya Sputnik V',
        'Johnson & Johnson (Jannsen)',
        'Bharat BioTech',
        'Moderna',
        'Novavax'
      ],
      dosage: ['First Dose', 'Second Dose']
    };
  },
  created() {
    this.getVaccinee();
  },
  methods: {
    async submit() {
      let vaccines;
      try {
        vaccines = this.vaccinee.vaccine_info.push(this.vaccine_info);
        console.log(vaccines);
      } catch (error) {
        vaccines = [this.vaccine_info];
      }
      const vacc_info = { vaccine_info: vaccines };
      await axios.post('http://localhost:5000/updateEntry', {
        id: this.id,
        data: vacc_info
      });

      await this.getVaccinee();
    },
    edit() {
      this.clicked = !this.clicked;
    },
    async getVaccinee() {
      await axios
        .get('http://localhost:5000/getEntry?id=' + this.id)
        .then(response => {
          this.vaccinee = response.data;
        });
    }
  }
};
</script>

<style>
</style>