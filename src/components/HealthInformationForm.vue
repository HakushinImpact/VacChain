<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-three-quarters">
        <p class="title">Health Information</p>
        <form>

          <div class="mb-2">
            <label class="checkbox">
              <input type="checkbox" v-model="covid.has_interaction">
              Had interaction with COVID-19 patient?
            </label>
          </div>

          <div class="columns field is-horizontal">
            <div class="column is-4">
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox" v-model="covid.is_diagnosed">
                  Diagnosed with COVID-19?
                </label>
              </div>
            </div>
            <div v-show="covid.is_diagnosed" class="column is-4">
              <div class="field">
                <div class="control">
                  <input class="input" type="date" v-model="covid.diagnosis_date">
                </div>
                <p class="help">Date of first positive result/specimen collection.</p>
              </div>
            </div>
            <div v-show="covid.is_diagnosed" class="column is-4">
              <div class="field">
                <p class="control is-expanded">
                  <span class="select is-fullwidth">
                    <select v-model="covid.classification">
                      <option value="" disabled hidden>Classification</option>
                      <option v-for="(item, index) in covidClassification" :key="index">
                        {{ item }}
                      </option>
                    </select>
                  </span>
                </p>
                <p class="help">COVID-19 Classification.</p>
              </div>
            </div>
          </div>

          <div class="columns field">
            <div class="column is-3">
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox" v-model="has_comorbidity">
                  With Comorbidity?
                </label>
              </div>
            </div>
            <div v-show="has_comorbidity" class="column is-9">
               <div class="field is-fullwidth">
                  <p class="control is-expanded">
                    <input type="text" class="input" placeholder="Name of Comorbidity" v-model="comorbidity">
                  </p>
                </div>
            </div>
          </div>

          <div class="mb-3">
            <label class="checkbox">
              <input v-model="is_pregnant" type="checkbox" />
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
                  <input type="checkbox" id="diabetesMellitus" value="Diabetes Mellitus" v-model="medical_history.disease">
                  Diabetes Mellitus
                </label>
              </div>
              <div>
                <label for="bronchialAsthma" class="checkbox">
                  <input type="checkbox" id="bronchialAsthma" value="Bronchial Asthma" v-model="medical_history.disease">
                  Bronchial Asthma
                </label>
              </div>
              <div>
                <label for="hypertension" class="checkbox">
                  <input type="checkbox" id="hypertension" value="Hypertension" v-model="medical_history.disease">
                  Hypertension
                </label>
              </div>
              <div>
                <label for="cancer" class="checkbox">
                  <input type="checkbox" id="cancer" value="Cancer" v-model="medical_history.disease">
                  Cancer
                </label>
              </div>
              <div>
                <label for="others" class="checkbox">
                  Others:
                  <input type="text" class="input" placeholder="Please Specify..."  v-model="other_diseases">
                </label>
              </div>
            </div>

            <div class="column">
              <div class="label is-5">History of Allergies:</div>
              <div class="columns">
                <div class="column">
                  <div>
                    <label for="drugAllergy" class="checkbox">
                      <input type="checkbox" id="drugAllergy" value="Drug Allergy" v-model="medical_history.allergies">
                      Drug Allergy
                    </label>
                  </div>
                  <div>
                    <label for="foodAllergy" class="checkbox">
                      <input type="checkbox" id="foodAllergy" value="Food Allergy" v-model="medical_history.allergies">
                      Food Allergy
                    </label>
                  </div>
                  <div>
                    <label for="insect" class="checkbox">
                      <input type="checkbox" id="insect" value="Insect" v-model="medical_history.allergies">
                      Insect
                    </label>
                  </div>
                  <div>
                    <label for="latexAllergy" class="checkbox">
                      <input type="checkbox" id="latexAllergy" value="Latex Allergy" v-model="medical_history.allergies">
                      Latex Allergy
                    </label>
                  </div>
                </div>

                <div class="column">
                  <div>
                    <label for="moldAllergy" class="checkbox">
                      <input type="checkbox" id="moldAllergy" value="Mold Allergy" v-model="medical_history.allergies">
                      Mold Allergy
                    </label>
                  </div>
                  <div>
                    <label for="petAllergy" class="checkbox">
                      <input type="checkbox" id="petAllergy" value="Pet Allergy" v-model="medical_history.allergies">
                      Pet Allergy
                    </label>
                  </div>
                  <div>
                    <label for="pollenAllergy" class="checkbox">
                      <input type="checkbox" id="pollenAllergy" value="Pollen Alergy" v-model="medical_history.allergies">
                      Pollen Allergy
                    </label>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="buttons has-addons is-right">
            <button class="button is-primary is-outlined mr-3" @click="back">Back</button>
            <button class="button is-success" @click="submit">Submit</button>
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
      covid: {
        has_interaction: false,
        is_diagnosed: false,
        diagnosis_date: '',
        classification: '',
      },
      has_comorbidity: false,
      comorbidity: '',
      is_pregnant: false,
      medical_history: {
        disease: [],
        allergies: []
      },
      other_diseases: '',
      covidClassification: [
        'Asymptomatic',
        'Mild',
        'Moderate',
        'Severe',
        'Critical'
      ],
    };
  },
  methods: {
    back() {
      this.$emit('back-page')
    },
    submit() {
      if(!this.covid.is_diagnosed){
        this.covid.diagnosis_date = ''
        this.covid.classification = ''
      }
      if(!this.has_comorbidity){
        this.comorbidity = ''
      }
      const others = this.other_diseases.split(',')
      this.medical_history.disease = this.medical_history.disease.concat(others)
      const health_info = { health_information: 
        {
          covid: this.covid,
          has_comorbidity: this.has_comorbidity,
          comorbidity: this.comorbidity,
          is_pregnant: this.is_pregnant, 
          medical_history: this.medical_history
        }
      }
      this.$emit('submit', health_info)
    }
  }
};
</script>

<style scoped></style>
