<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <form>

          <div>
            <label class="checkbox">
              <input type="checkbox" />
                PhilHealth Member?
            </label>
          </div>

          <div class="columns field is-horizontal mt-1">
            <div class="column is-half field-body">
              <div class="field">
                <label class="label">PhilHealth Number</label>
                <p class="control is-expanded">
                  <input
                    v-model="philHealthNumber"
                    class="input"
                    type="input"
                    placeholder="PhilHealth No."
                  />
                </p>
              </div>
            </div>
            <div class="column is-half field-body">
              <div class="field">
                <label class="label">PhilHealth Category</label>
                <p class="control is-expanded">
                  <span class="select is-fullwidth">
                    <select v-model="selectedPhilHealthCategory">
                      <option selected> PhilHealth Category </option>
                      <option v-for="(item, index) in category" :key="index">
                        {{ item }}
                      </option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div class="mt-3 mb-2">
            <h1 class="title mt-3">Personal Details</h1>
          </div>

          <label class="label">Patient Name</label>
          <div class="columns field is-horizontal">
            <div class="column is-3 field-body">
              <div class="field">
                <p class="control is-expanded">
                  <input
                    v-model="lastName"
                    class="input"
                    type="text"
                    placeholder="Last Name"
                  />
                </p>
              </div>
            </div>
            <div class="column is-4 field-body">
              <div class="field">
                <p class="control is-expanded">
                  <input
                    v-model="firstName"
                    class="input"
                    type="text"
                    placeholder="First Name"
                  />
                </p>
              </div>
            </div>
            <div class="column is-3 field-body">
              <div class="field">
                <p class="control is-expanded">
                  <input
                    v-model="middleName"
                    class="input"
                    type="text"
                    placeholder="Middle Name"
                  />
                </p>
              </div>
            </div>
            <div class="column is-2 field-body">
              <div class="field">
                <p class="control">
                  <input
                    v-model="suffix"
                    class="input"
                    type="text"
                    placeholder="Suffix"
                  />
                </p>
              </div>
            </div>
          </div>

          <div class="columns field is-horizontal">
            <div class="column is-2 field-body">
              <p class="control is-expanded">
                <label class="label">Sex</label>
                <span class="select">
                  <select v-model="selectedSex">
                    <option selected> Sex </option>
                    <option v-for="(item, index) in sex" :key="index">
                      {{ item }}
                    </option>
                  </select>
                </span>
              </p>
            </div>
            <div class="column is-5 field-body">
              <div class="field">
                <label class="label">Birthday</label>
                <div class="control">
                  <input
                    v-model="birthdate"
                    class="input"
                    type="date"
                    placeholder="Birthdate"
                  />
                </div>
              </div>
            </div>
            <div class="class column is-5 field-body">
              <div class="field">
                <label class="label">Contact Number</label>
                <p class="control is-expanded">
                  <input
                    v-model="contactNumber"
                    class="input"
                    type="text"
                    placeholder="+639xx-xxx-xxxx"
                  />
                </p>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <div class="field">
                <p class="control is-expanded">
                  <input
                    v-model="fullAddress"
                    class="input"
                    type="text"
                    placeholder="Full Address"
                  />
                </p>
              </div>
            </div>
          </div>

          <div class="columns field is-horizontal">
            <div class="column is-half field-body">
              <div class="field">
                <p class="control is-expanded">
                  <span class="select is-fullwidth">
                    <select v-model="selectedCivilStatus">
                      <option selected> Civil Status </option>
                      <option v-for="(item, index) in civilStatus" :key="index">
                        {{ item }}
                      </option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
            <div class="column is-half field-body">
              <div class="field">
                <p class="control is-expanded">
                  <span class="select is-fullwidth">
                    <select v-model="selectedEmploymentStatus">
                      <option selected> Employment Status </option>
                      <option v-for="(item, index) in employmentStatus" :key="index">
                        {{ item }}
                      </option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div v-show="isEmployed">
            <div class="columns field is-horizontal">
              <div class="column is-4 field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <input
                      v-model="work"
                      class="input"
                      type="text"
                      placeholder="Occupation/Work"
                    />
                  </p>
                </div>
              </div>
              <div class="column is-4 field-body">
                <div class="field">
                  <p class="control">
                    <input
                      v-model="employerName"
                      class="input"
                      type="text"
                      placeholder="Employer Name"
                    />
                  </p>
                </div>
              </div>
              <div class="column is-4 field-body">
                <div class="field">
                  <p class="control">
                    <input
                      v-model="companyName"
                      class="input"
                      type="text"
                      placeholder="Company Name"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div class="columns field is-horizontal">
              <div class="column is-8 field-body">
              <div class="field">
                <p class="control">
                  <input
                    v-model="companyAddress"
                    class="input"
                    type="text"
                    placeholder="Company Address"
                  />
                </p>
              </div>
            </div>
            <div class="column is-4 field-body">
              <div class="field">
                <p class="control is-expanded">
                  <span class="select is-fullwidth">
                    <select v-model="selectedWorkCategory">
                      <option selected> Work Category </option>
                      <option v-for="(item, index) in workCategory" :key="index">
                        {{ item }}
                      </option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
          </div>
          </div>
        
          <div class="columns">
            <div class="column">
              <div class="field is-pulled-right">
                <p class="control">
                  <button class="button is-success is-outlined" @click="next">
                    Next
                  </button>
                </p>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalInformationForm',
  data() {
    return {
      isPhilHealthMemeber: true,
      philHealthNumber: '',
      selectedPhilHealthCategory: 'PhilHealth Category',
      category: ['A0', 'A1', 'A2', 'A3'],
      lastName: '',
      firstName: '',
      middleName: '',
      suffix: '',
      selectedSex: 'Sex',
      sex: ['Male', 'Female'],
      birthdate: '',
      contactNumber: '',
      fullAddress: '',
      selectedCivilStatus: 'Civil Status',
      civilStatus: ['Single', 'Married', 'Divorced', 'Separated', 'Widowed'],
      selectedEmploymentStatus: 'Employment Status',
      employmentStatus: [
        'Unemployed',
        'Full Time Employed',
        'Part Time Employed',
        'Self Employed'
      ],
      isEmployed: true,
      work: '',
      employerName: '',
      companyName: '',
      companyAddress: '',
      selectedWorkCategory: 'Work Category',
      workCategory: ['Cat 1', 'Cat 2', 'Cat 3']
    };
  },
  computed: {},
  methods: {
    next() {
      this.$emit('next-page')
    }
  }
};
</script>

<style scoped></style>
