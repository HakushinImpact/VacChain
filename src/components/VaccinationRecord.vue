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
              <!-- <p class="title is-4">{{vaccinee.personal_info.first_name}} {{vaccinee.personal_info.middle_name}} {{vaccinee.personal_info.last_name}} {{vaccinee.personal_info.suffix}}</p> -->
              <!-- <p class="subtitle is-6">Vaccination Status: Vaccinated ({{vaccinee.vaccine_info.dosage}} Dose)</p> -->
              <p class="title is-4">John Smith</p>
              <p class="subtitle is-6">Vaccination Status: Vaccinated (1st Dose)</p>
            </div>
            <!-- <div class="mt-2">
              <p class="is-size-6">Address: {{vaccinee.personal_info.contact.address}}</p>
              <p class="is-size-6">Contact Number: {{vaccinee.personal_info.contact.number}}</p>
            </div> -->
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
              <FontAwesomeIcon icon="edit"/>
            </span>
          </button>
        </span>
        <p class="is-size-5">Vaccine Name: Pfizer</p>
        <p class="is-size-6">Date of Vaccination: August 28, 2021</p>
        <p class="is-size-6">Dosage: 1st</p>
        <p class="is-size-6">Batch No: 123456</p>
        <p class="is-size-6">Health Facility Name: DILG Kalibo</p>
        <p class="is-size-5 mt-2">Vaccinator Name: Juan Dela Cruz</p>
        <!-- <p class="is-size-5">Vaccine Name: {{vaccinee.vaccine_info.name}}</p>
        <p class="is-size-6">Date of Vaccination: {{vaccinee.vaccine_info.date_of_vaccination}}</p>
        <p class="is-size-6">Dosage: {{vaccinee.vaccine_info.dosage}}</p>
        <p class="is-size-6">Batch No: {{vaccinee.vaccine_info.batchNumber}}</p>
        <p class="is-size-6">Health Facility Name: {{vaccinee.vaccine_info.health_facility}}</p>
        <p class="is-size-5 mt-2">Vaccinator Name: {{vaccinee.vaccine_info.vaccinator.first_name}} {{vaccinee.vaccine_info.vaccinator.middle_name}} {{vaccinee.vaccine_info.vaccinator.last_name}} {{vaccinee.vaccine_info.vaccinator.suffix}}</p> -->
      </div>
    </div>

    <div v-show="clicked">
      <hr>
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
                  <button class="button is-success" @click="submit">Submit</button>
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
export default {
  name: 'VaccinationRecord',
  props: {
    vaccinee: {},
  },
  data() {
    return {
      clicked: false,
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
          suffix: '',
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
  methods: {
    submit(){
      console.log(this.vaccine_info)
    },
    edit(){
      console.log(this.vaccinee)
    },
    get(){
      
    }
  }
};
</script>

<style>
</style>