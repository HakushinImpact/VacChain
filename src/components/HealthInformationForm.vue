<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-three-quarters">
        <p class="title">Health Information</p>
        <form>

          <div class="mb-2">
            <label class="checkbox">
              <input type="checkbox" v-model="hadContact">
              Had interaction with COVID-19 patient?
            </label>
          </div>

          <div class="columns field is-horizontal">
            <div class="column is-4">
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox" v-model="isDiagnosed">
                  Diagnosed with COVID-19?
                </label>
              </div>
            </div>
            <div class="column is-4">
              <div class="field">
                <div class="control">
                  <input class="input" type="date" v-model="dateOfPositiveResult">
                </div>
                <p class="help">Date of first positive result/specimen collection.</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="field">
                <p class="control is-expanded">
                  <span class="select is-fullwidth">
                    <select v-model="selectedCovidClassification">
                      <option selected>Classification </option>
                      <option v-for="(item, index) in covidClassification" :key="index">
                        {{ item }}
                      </option>
                    </select>
                  </span>
                </p>
              </div>
              <p class="help">COVID-19 Classification.</p>
            </div>
          </div>

          <div class="columns field is-vcentered">
            <div class="column is-3">
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox" v-model="withComorbidity">
                  With Comorbidity?
                </label>
              </div>
            </div>
            <div class="column is-9">
               <div class="field is-fullwidth">
                  <p class="control is-expanded">
                    <input type="text" class="input" placeholder="Name of Comorbidity" v-model="comorbidityName">
                  </p>
                </div>
            </div>
          </div>

          <div class="mb-3">
            <label class="checkbox">
              <input v-model="isPregnant" type="checkbox" />
              Pregnant?
            </label>
          </div>

          <div class="mt-2">
            <p class="title is-4 my-2">
              Patient Medical History
            </p>
          </div>

          <div class="columns">
            <div class="column">
              <div class="label is-5">History of:</div>
              <div>
                <label for="diabetesMellitus" class="checkbox">
                  <input type="checkbox" id="diabetesMellitus" value="Diabetes Mellitus" v-model="checkedHistoryOf">
                  Diabetes Mellitus
                </label>
              </div>
              <div>
                <label for="bronchialAsthma" class="checkbox">
                  <input type="checkbox" id="bronchialAsthma" value="Bronchial Asthma" v-model="checkedHistoryOf">
                  Bronchial Asthma
                </label>
              </div>
              <div>
                <label for="hypertension" class="checkbox">
                  <input type="checkbox" id="hypertension" value="Hypertension" v-model="checkedHistoryOf">
                  Hypertension
                </label>
              </div>
              <div>
                <label for="cancer" class="checkbox">
                  <input type="checkbox" id="cancer" value="Cancer" v-model="checkedHistoryOf">
                  Cancer
                </label>
              </div>
              <div>
                <label for="others" class="checkbox">
                  <input type="checkbox" hidden id="others" :value="othersHistoryOf" v-model="checkedHistoryOf">
                  Others:
                  <input type="text" class="input" placeholder="Please Specify..."  v-model="othersHistoryOf">
                </label>
              </div>
            </div>

            <div class="column">
              <div class="label is-5">History of Allergies:</div>
              <div class="columns">
                <div class="column">
                  <div>
                    <label for="drugAllergy" class="checkbox">
                      <input type="checkbox" id="drugAllergy" value="Drug Allergy" v-model="checkedHistoryOfAllergies">
                      Drug Allergy
                    </label>
                  </div>
                  <div>
                    <label for="foodAllergy" class="checkbox">
                      <input type="checkbox" id="foodAllergy" value="Food Allergy" v-model="checkedHistoryOfAllergies">
                      Food Allergy
                    </label>
                  </div>
                  <div>
                    <label for="insect" class="checkbox">
                      <input type="checkbox" id="insect" value="Insect" v-model="checkedHistoryOfAllergies">
                      Insect
                    </label>
                  </div>
                  <div>
                    <label for="latexAllergy" class="checkbox">
                      <input type="checkbox" id="latexAllergy" value="Latex Allergy" v-model="checkedHistoryOfAllergies">
                      Latex Allergy
                    </label>
                  </div>
                </div>

                <div class="column">
                  <div>
                    <label for="moldAllergy" class="checkbox">
                      <input type="checkbox" id="moldAllergy" value="Mold Allergy" v-model="checkedHistoryOfAllergies">
                      Mold Allergy
                    </label>
                  </div>
                  <div>
                    <label for="petAllergy" class="checkbox">
                      <input type="checkbox" id="petAllergy" value="Pet Allergy" v-model="checkedHistoryOfAllergies">
                      Pet Allergy
                    </label>
                  </div>
                  <div>
                    <label for="pollenAllergy" class="checkbox">
                      <input type="checkbox" id="pollenAllergy" value="Pollen Alergy" v-model="checkedHistoryOfAllergies">
                      Pollen Allergy
                    </label>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="buttons has-addons is-right">
            <button class="button is-primary is-outlined mr-3" @click="back">Back</button>
            <button class="button is-success">Submit</button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HealthInformationForm',
  data() {
    return {
      hadContact: false,
      isDiagnosed: false,
      dateOfPositiveResult: '',
      selectedCovidClassification: 'COVID-19 Classification',
      covidClassification: [
        'Asymptomatic',
        'Mild',
        'Moderate',
        'Severe',
        'Critical'
      ],
      withComorbidity: false,
      comorbidityName: '',
      isPregnant: false,
      othersHistoryOf: '',
      checkedHistoryOf: [],
      checkedHistoryOfAllergies: []
    };
  },
  computed: {},
  methods: {
    back() {
      this.$emit('back-page')
    }
  }
};
</script>

<style scoped></style>
