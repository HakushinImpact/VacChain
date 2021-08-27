<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-three-quarters">
        <p class="title is-1 has-text-centered">Vaccination Record Form</p>


        <div class="columns field is-horizontal">
            <div class="column is-5 field-body">
              <p class="control is-expanded">
                <p class="label"> Vaccine Administered </p>
                <span class="select is-fullwidth">
                <select v-model="selectedVaccineManufacturer">
                    <option value="" diabled hidded> Vaccine Manufacturer </option>
                    <option v-for="(item, index) in vaccineManufacturer" :key="index">
                      {{ item }}
                    </option>
                </select>
            </span>
            </div>
        </div>

        <div v-show="this.selectedVaccineManufacturer">
            <h1 class="title mb-2"> 1st Dose </h1>
            <div class="columns field is-horizontal">
                <div class="column is-3 field-body">
                    Date Administered
                    <input class="input" type="date" v-model="firstDose.dateReceived">
                </div>

                <div class="column is-2 field-body">
                    Batch No.
                    <input class="input" type="text" v-model="firstDose.batchNumber">
                </div>

                <div class="column is-2 field-body">
                    Lot No.
                    <input class="input" type="text" v-model="firstDose.lotNumber">
                </div>

                <div class="column is-5 field-body">
                    Vaccinator
                    <input class="input" type="text" v-model="firstDose.vaccinatorName">
                </div>
            </div>
        </div>

        <div v-show="selectedVaccineManufacturer != 'JANNSEN' && this.selectedVaccineManufacturer">
            <h1 class="title mt-5 mb-2"> 2nd Dose </h1>
            <div class="columns field is-horizontal">
                <div class="column is-3 field-body">
                    Date Administered
                    <input class="input" type="date" v-model="secondDose.dateReceived">
                </div>

                <div class="column is-2 field-body">
                    Batch No.
                    <input class="input" type="text" v-model="secondDose.batchNumber">
                </div>

                <div class="column is-2 field-body">
                    Lot No.
                    <input class="input" type="text" v-model="secondDose.lotNumber">
                </div>

                <div class="column is-5 field-body">
                    Vaccinator
                    <input class="input" type="text" v-model="secondDose.vaccinatorName">
                </div>
            </div>
        </div>

        <div v-show="this.selectedVaccineManufacturer" class="columns">
            <div class="column">
              <div class="field is-pulled-right">
                <p class="control">
                  <button class="button is-success">
                    Submit
                  </button>
                </p>
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
    data() {
        return {
            selectedVaccineManufacturer: '',
            vaccineManufacturer: [
                "SINOVAC",
                "MODERNA",
                "PFIZER-BIONTECH",
                "JANNSEN"
            ],
            firstDose: {
                dateReceived: '',
                batchNumber: '',
                lotNumber: '',
                vaccinatorName: ''
            },
            secondDose: {
                dateReceived: '',
                batchNumber: '',
                lotNumber: '',
                vaccinatorName: ''                
            },
            healthFacilityName: ''
        }
    }
};
</script>

<style>
</style>