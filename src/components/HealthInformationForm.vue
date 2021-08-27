<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-three-quarters">
        <p class="title">Health Information</p>
        <form>

          <div class="mb-2">
            <label class="checkbox">
              <input type="checkbox" />
              Had interaction with COVID-19 patient?
            </label>
          </div>

          <div class="columns field is-horizontal">
            <div class="column is-4">
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox" />
                  Diagnosed with COVID-19?
                </label>
              </div>
            </div>
            <div class="column is-4">
              <div class="field">
                <div class="control">
                  <input class="input" type="date" />
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
                  <input type="checkbox" />
                  With Comorbidity?
                </label>
              </div>
            </div>
            <div class="column is-9">
               <div class="field is-fullwidth">
                  <p class="control is-expanded">
                    <input type="text" class="input" placeholder="Name of Comorbidity" />
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
                <label class="checkbox">
                  <input type="checkbox" />
                  Diabetes Mellitus
                </label>
              </div>
              <div>
                <label class="checkbox">
                  <input type="checkbox" />
                  Bronchial Asthma
                </label>
              </div>
              <div>
                <label class="checkbox">
                  <input type="checkbox" />
                  Hypertension
                </label>
              </div>
              <div>
                <label class="checkbox">
                  <input type="checkbox" />
                  Cancer
                </label>
              </div>
              <div>
                <label class="checkbox">
                  <input type="checkbox" />
                  Others:
                  <input type="text" class="input" placeholder="Please Specify...">
                </label>
              </div>
            </div>

            <div class="column">
              <div class="label is-5">History of Allergies:</div>
              <div class="columns">
                <div class="column">
                  <div>
                    <label class="checkbox">
                      <input type="checkbox" />
                      Drug Allergy
                    </label>
                  </div>
                  <div>
                    <label class="checkbox">
                      <input type="checkbox" />
                      Food Allergy
                    </label>
                  </div>
                  <div>
                    <label class="checkbox">
                      <input type="checkbox" />
                      Insect
                    </label>
                  </div>
                  <div>
                    <label class="checkbox">
                      <input type="checkbox" />
                      Latex Allergy
                    </label>
                  </div>
                </div>

                <div class="column">
                  <div>
                    <label class="checkbox">
                      <input type="checkbox" />
                      Mold Allergy
                    </label>
                  </div>
                  <div>
                    <label class="checkbox">
                      <input type="checkbox" />
                      Pet Allergy
                    </label>
                  </div>
                  <div>
                    <label class="checkbox">
                      <input type="checkbox" />
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
      isPregnant: false,
      selectedCovidClassification: 'COVID-19 Classification',
      covidClassification: [
        'Asymptomatic',
        'Mild',
        'Moderate',
        'Severe',
        'Critical'
      ]
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
