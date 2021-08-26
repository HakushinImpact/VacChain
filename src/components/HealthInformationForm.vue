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
          <input type="checkbox" />
          Pregnant?
        </label>
      </div>

      <div>
        <h1 class="subtitle">
          Patient Medical History
        </h1>
      </div>

      <div></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HealthInformationForm',
  data() {
    return {
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
