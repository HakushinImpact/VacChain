<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-three-quarters">
        <form>

          <div>
            <label class="checkbox">
              <input type="checkbox" v-model="philHealthInfo.isPhilHealthMemeber"/>
                PhilHealth Member?
            </label>
          </div>

          <div v-show="philHealthInfo.isPhilHealthMemeber"  class="columns field is-horizontal mt-1">
            <div class="column is-half field-body">
              <div class="field">
                <label class="label">PhilHealth Number</label>
                <p class="control is-expanded">
                  <input
                    v-model="philHealthInfo.philHealthNumber"
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
                    <select v-model="philHealthInfo.selectedPhilHealthCategory">
                      <option value="" disabled hidden> PhilHealth Category </option>
                      <option v-for="(item, index) in philHealthInfo.category" :key="index">
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
                    v-model="personal.lastName"
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
                    v-model="personal.firstName"
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
                    v-model="personal.middleName"
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
                    v-model="personal.suffix"
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
                <span class="select is-fullwidth">
                  <select v-model="personal.selectedSex">
                    <option value="" disabled hidden>Sex</option>
                    <option v-for="(item, index) in personal.sex" :key="index">
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
                    v-model="personal.birthdate"
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
                    v-model="personal.contactNumber"
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
                    v-model="personal.fullAddress"
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
                      <option value="" disabled hidden> Civil Status </option>
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
                    <select v-model="employment.selectedEmploymentStatus">
                      <option value="" disabled hidden> Employment Status </option>
                      <option v-for="(item, index) in employment.employmentStatus" :key="index">
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
                      v-model="employment.work"
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
                      v-model="employment.employerName"
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
                      v-model="employment.companyName"
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
                    v-model="employment.companyAddress"
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
                    <select v-model="employment.selectedWorkCategory">
                      <option value="" disabled hidden> Work Category </option>
                      <option v-for="(item, index) in employment.workCategory" :key="index">
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
      philHealthInfo: {
        isPhilHealthMemeber: false,
        philHealthNumber: '',
        selectedPhilHealthCategory: '',
        category: ['A0', 'A1', 'A2', 'A3'],
      },
      personal: {
        lastName: '',
        firstName: '',
        middleName: '',
        suffix: '',
        selectedSex: '',
        sex: ['Male', 'Female'],
        birthdate: '',
        contactNumber: '',
        fullAddress: '',
      },
      selectedCivilStatus: '',
      civilStatus: ['Single', 'Married', 'Divorced', 'Separated', 'Widowed'],
      employment: {
        selectedEmploymentStatus: '',
        employmentStatus: [
          'Unemployed',
          'Full Time Employed',
          'Part Time Employed',
          'Self Employed'
        ],
        work: '',
        employerName: '',
        companyName: '',
        companyAddress: '',
        selectedWorkCategory: '',
        workCategory: ['Accountant',
        'Airline', 
        'Call Center', 
        'Construction',
        'Customer Service',
        'Education',
        'Entry Level',
        'Government',
        'Management',
        'Medicine',
        'Nursing',
        'Sales',
        'Security',
        'Tech',
        'Others'
        ]
      }
    };
  },
  computed: {
    isEmployed(){
      return this.employment.selectedEmploymentStatus !== "Unemployed" && this.employment.selectedEmploymentStatus
    }
  },
  methods: {
    clearPhilHealthInfo() {
      this.philHealthInfo.philHealthNumber = '',
      this.philHealthInfo.selectedPhilHealthCategory = ''
    },
    clearEmploymentInfo() {
      this.employment.selectedEmploymentStatus = '',
      this.employment.work = '',
      this.employment.employerName = '',
      this.employment.companyName = '',
      this.employment.companyAddress = '',
      this.employment.selectedWorkCategory = ''
    },
    next() {
      if(this.philHealthInfo.isPhilHealthMemeber) {
        this.clearPhilHealthInfo
      }
      if(this.isEmployed){
        this.clearEmploymentInfo
      }
      this.$emit('next-page')
    }
  }
};
</script>

<style scoped></style>
