<template>
  <div class="column is-half is-offset-one-quarter">
    <form>
      <div>
        <h1 class="title">Health Information</h1>
      </div>

      <div>
        <label class="checkbox">
          <input type="checkbox" />
          Had interaction with COVID-19 patient?
        </label>
      </div>

      <div class="field-group">
        <div class="field is-inline-block-desktop">
          <label class="checkbox">
            <input type="checkbox" />
            Diagnosed with COVID-19?
          </label>
        </div>
        <div class="field is-inline-block-desktop">
          <label type="label">
            <input class="input" type="date" />
            Date of first positive result/specimen collection.
          </label>
        </div>
        <div class="field is-inline-block-desktop">
          <span class="select">
            <select v-model="selectedCovidClassification">
              <option selected> COVID-19 Classification </option>
              <option v-for="(item, index) in covidClassification" :key="index">
                {{ item }}
              </option>
            </select>
          </span>
        </div>
      </div>

      <div class="field-group">
        <div class="field is-inline-block-desktop">
          <label class="checkbox">
            <input type="checkbox" />
            With Comorbidity?
          </label>
        </div>
        <div class="field is-inline-block-desktop">
          <input type="text" class="input" placeholder="Name of Comorbidity" />
        </div>
      </div>

      <div>
        <label class="checkbox">
          <input v-model="isPregnant" type="checkbox" />
          Pregnant?
        </label>
      </div>

      <div>
        <h1 class="subtitle">
          Patient Medical History
        </h1>
      </div>

      <div class="columns">
        <div class="column">
          <div>
            <label> History of: </label>
          </div>
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
          <label> History of Allergies: </label>
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

      <div class="field">
        <div class="field is-inline-block-desktop">
          <p class="control">
            <button class="button is-primary is-outlined">
              Back
            </button>
          </p>
        </div>

        <div class="field is-inline-block-desktop">
          <p class="control">
            <button class="button is-success">
              Submit
            </button>
          </p>
        </div>
      </div>

    </form>
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
  computed: {}
};
</script>

<style scoped></style>
