<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-three-quarters">
        <p class="title is-1 has-text-centered">Vaccination Record Form</p>

        <div>
            <h1 class="title is-3 mb-5"> Vaccine Details </h1>
        </div>

        <div class="columns field is-horizontal">
            <div class="column is-3 field-body">
                <p class="label mb-1">Dosage</p>
                <span class="select is-fullwidth">
                        <select v-model="administeredVaccine.selectedDosage">
                            <option value="" disabled hidded> Dosage </option>
                            <option v-for="(item, index) in dosage" :key="index">
                            {{ item }}
                            </option>
                        </select>
                </span>
            </div>

            <div class="column is-4 field-body">
                <p class="label mb-1">Date Administered</p>
                <input class="input" type="date" v-model="administeredVaccine.dateReceived">
            </div>

            <div class="column is-5 field-body">
                <p class="label mb-1">Vaccine Manufacturer</p>                
                <span class="select is-fullwidth">
                        <select v-model="administeredVaccine.selectedVaccineManufacturer">
                            <option value="" disabled hidded> Vaccine Manufacturer </option>
                            <option v-for="(item, index) in vaccineManufacturer" :key="index">
                            {{ item }}
                            </option>
                        </select>
                </span>
            </div>
        </div>

        <div class="columns field is-horizontal">
            <div class="column is-5 field-body">
                <input class="input" type="text" placeholder="Batch No." v-model="administeredVaccine.batchNumber">
            </div>
            <div class="column is-7 field-body">
                <input class="input" type="text" placeholder="Health Facility" v-model="administeredVaccine.healthFacilityName">
            </div>
        </div>

        <p class="label mb-1">Vaccinator Name</p>
        <div class="columns field is-horizontal">
            <div class="column is-3 field-body">
                <input type="text" class="input" placeholder="Last Name" v-model="administeredVaccine.vaccinatorLastName">
            </div>

            <div class="column is-4 field-body">
                <input type="text" class="input" placeholder="First Name" v-model="administeredVaccine.vaccinatorFirstName">
            </div>

            <div class="column is-3 field-body">
                <input type="text" class="input" placeholder="Middle Name" v-model="administeredVaccine.vaccinatorMiddleName">
            </div>

            <div class="column is-2 field-body">
                <input type="text" class="input" placeholder="Suffix" v-model="administeredVaccine.vaccinatorSuffix">
            </div>
        </div>

        <div class="columns">
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
            administeredVaccine: {
                selectedDosage: '',
                dateReceived: '',
                selectedVaccineManufacturer: '',
                batchNumber: '',
                healthFacilityName: '',
                vaccinatorLastName: '',
                vaccinatorFirstName: '',
                vaccinatorMiddleName: '',
                vaccinatorSuffix: ''
            },
            vaccineManufacturer: [
                "SINOVAC",
                "MODERNA",
                "PFIZER-BIONTECH",
                "JANNSEN"
            ],
            dosage:[
                "First Dose",
                "Second Dose"
            ]     
        }
    }
};
</script>

<style>
</style>