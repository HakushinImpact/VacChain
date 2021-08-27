<template>
  <div class="container">
    <div class="columns">
      <div class="column is-10 is-offset-1 p-5">
        <form>
          <div class="field">
            <label class="checkbox">
              <input type="checkbox" v-model="philhealth_info.isMember" />
              PhilHealth Member
            </label>
          </div>

          <div v-show="philhealth_info.isMember" class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded">
                  <input
                    v-model="philhealth_info.philHealthNumber"
                    class="input"
                    type="input"
                    placeholder="PhilHealth No."
                  />
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <span class="select is-fullwidth">
                    <select v-model="philhealth_info.category">
                      <option value="" disabled hidden>
                        PhilHealth Category
                      </option>
                      <option
                        v-for="(
                          item, index
                        ) in philhealth_info.category_options"
                        :key="index"
                      >
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

          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded">
                  <label class="label">Last Name</label>
                  <input
                    v-model="personal.lastName"
                    class="input"
                    type="text"
                    placeholder="Dela Cruz"
                  />
                </p>
              </div>
              <div class="field">
                <p class="control is-expanded">
                  <label class="label">First Name</label>
                  <input
                    v-model="personal.firstName"
                    class="input"
                    type="text"
                    placeholder="Juan"
                  />
                </p>
              </div>
              <div class="field">
                <p class="control is-expanded">
                  <label class="label">Middle Name</label>
                  <input
                    v-model="personal.middleName"
                    class="input"
                    type="text"
                    placeholder="Protacio"
                  />
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <label class="label">Suffix</label>
                  <input
                    v-model="personal.suffix"
                    class="input"
                    type="text"
                    placeholder="PhD"
                  />
                </p>
              </div>
            </div>
          </div>
          <!-- <div class="field is-grouped"> -->

          <!-- </div> -->

          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <label class="label">Sex</label>
                  <span class="select is-fullwidth">
                    <select v-model="personal.sex">
                      <option value="" disabled hidden>Sex</option>
                      <option
                        v-for="(item, index) in personal.sex_options"
                        :key="index"
                      >
                        {{ item }}
                      </option>
                    </select>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control is-expanded">
                  <label class="label">Birthday</label>
                  <input
                    v-model="personal.birthdate"
                    class="input"
                    type="date"
                    placeholder="Birthday"
                  />
                </p>
              </div>
              <div class="field">
                <p class="control is-expanded">
                  <label class="label">Contact Number</label>
                  <input
                    v-model="personal.contactNumber"
                    class="input"
                    type="text"
                    placeholder="+63xxxxxxxxx"
                  />
                </p>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Address</label>
            <p class="control is-expanded">
              <input
                v-model="personal.fullAddress"
                class="input"
                type="text"
                placeholder="Full Address"
              />
            </p>
          </div>

          <div class="field is-grouped">
            <p class="control is-expanded">
              <span class="select is-fullwidth">
                <select v-model="personal.civil_status">
                  <option value="" disabled hidden>Civil Status</option>
                  <option
                    v-for="(item, index) in personal.civil_status_options"
                    :key="index"
                  >
                    {{ item }}
                  </option>
                </select>
              </span>
            </p>
            <p class="control is-expanded">
              <span class="select is-fullwidth">
                <select v-model="employment.status">
                  <option value="" disabled hidden>Employment Status</option>
                  <option
                    v-for="(item, index) in employment.status_options"
                    :key="index"
                  >
                    {{ item }}
                  </option>
                </select>
              </span>
            </p>
          </div>

          <div v-show="isEmployed">
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input
                      v-model="employment.work"
                      class="input"
                      type="text"
                      placeholder="Occupation/Work"
                    />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <input
                      v-model="employment.employer_name"
                      class="input"
                      type="text"
                      placeholder="Employer Name"
                    />
                  </p>
                </div>

                <div class="field">
                  <p class="control">
                    <input
                      v-model="employment.company_name"
                      class="input"
                      type="text"
                      placeholder="Company Name"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input
                      v-model="employment.company_address"
                      class="input"
                      type="text"
                      placeholder="Company Address"
                    />
                  </p>
                </div>
                <div class="field">
                  <p class="control is-expanded">
                    <span class="select is-fullwidth">
                      <select v-model="employment.category">
                        <option value="" disabled hidden>Work Category</option>
                        <option
                          v-for="(item, index) in employment.category_options"
                          :key="index"
                        >
                          {{ item }}
                        </option>
                      </select>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-grouped is-grouped-right my-5">
            <p class="control">
              <button class="button is-primary is-rounded" @click="next">
                Next
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import options from './form_options';

export default {
  name: 'PersonalInformationForm',
  data() {
    return {
      philhealth_info: {
        isMember: false,
        number: '',
        category: '',
        category_options: options.philhealth_category
      },
      personal: {
        lastName: '',
        firstName: '',
        middleName: '',
        suffix: '',
        sex: '',
        sex_options: options.sex,
        birthdate: '',
        contactNumber: '',
        fullAddress: '',
        civil_status: '',
        civil_status_options: options.civil_status
      },
      employment: {
        status: '',
        status_options: options.employment_status,
        work: '',
        employer_name: '',
        company_name: '',
        company_address: '',
        category: '',
        category_options: options.work_categories
      }
    };
  },
  computed: {
    isEmployed() {
      return this.employment.status && this.employment.status !== 'Unemployed';
    }
  },
  methods: {
    clearPhilHealthInfo() {
      this.philhealth_info.number = '';
      this.philhealth_info.category = '';
    },
    clearEmploymentInfo() {
      (this.employment.status = ''),
        (this.employment.work = ''),
        (this.employment.employerName = ''),
        (this.employment.companyName = ''),
        (this.employment.companyAddress = ''),
        (this.employment.selectedWorkCategory = '');
    },
    next() {
      if (!this.philhealth_info.isMember) {
        this.clearPhilHealthInfo();
      }
      if (!this.isEmployed) {
        this.clearEmploymentInfo();
      }
      this.$emit('next-page', );
    }
  }
};
</script>

<style scoped></style>
