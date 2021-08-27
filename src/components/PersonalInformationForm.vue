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
                    v-model="philhealth_info.number"
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
                        ) in category_options"
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
                    v-model="personal_info.last_name"
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
                    v-model="personal_info.first_name"
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
                    v-model="personal_info.middle_name"
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
                    v-model="personal_info.suffix"
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
                    <select v-model="personal_info.sex">
                      <option value="" disabled hidden>Sex</option>
                      <option
                        v-for="(item, index) in sex_options"
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
                    v-model="personal_info.birth"
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
                    v-model="personal_info.contact.number"
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
                v-model="personal_info.contact.address"
                class="input"
                type="text"
                placeholder="Full Address"
              />
            </p>
          </div>

          <div class="field is-grouped">
            <p class="control is-expanded">
              <span class="select is-fullwidth">
                <select v-model="personal_info.civil_status">
                  <option value="" disabled hidden>Civil Status</option>
                  <option
                    v-for="(item, index) in civil_status_options"
                    :key="index"
                  >
                    {{ item }}
                  </option>
                </select>
              </span>
            </p>
            <p class="control is-expanded">
              <span class="select is-fullwidth">
                <select v-model="personal_info.employment.status">
                  <option value="" disabled hidden>Employment Status</option>
                  <option
                    v-for="(item, index) in status_options"
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
                      v-model="personal_info.employment.work"
                      class="input"
                      type="text"
                      placeholder="Occupation/Work"
                    />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <input
                      v-model="personal_info.employment.employer_name"
                      class="input"
                      type="text"
                      placeholder="Employer Name"
                    />
                  </p>
                </div>

                <div class="field">
                  <p class="control">
                    <input
                      v-model="personal_info.employment.company_name"
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
                      v-model="personal_info.employment.company_address"
                      class="input"
                      type="text"
                      placeholder="Company Address"
                    />
                  </p>
                </div>
                <div class="field">
                  <p class="control is-expanded">
                    <span class="select is-fullwidth">
                      <select v-model="personal_info.employment.category">
                        <option value="" disabled hidden>Work Category</option>
                        <option
                          v-for="(item, index) in work_options"
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
      },
      personal_info: {
        last_name: '',
        first_name: '',
        middle_name: '',
        suffix: '',
        sex: '',
        birth: '',
        contact: {
          number: '',
          address: '',
        },
        civil_status: '',
        employment: {
            status: '',
            work: '',
            employer_name: '',
            company_name: '',
            company_address: '',
            category: '',
          }
      },
      category_options: options.philhealth_category,
      sex_options: options.sex,
      civil_status_options: options.civil_status,
      status_options: options.employment_status,
      work_options: options.work_categories
    };
  },
  computed: {
    isEmployed() {
      return this.personal_info.employment.status && this.personal_info.employment.status !== 'Unemployed';
    }
  },
  methods: {
    clearPhilHealthInfo() {
      this.philhealth_info.number = '';
      this.philhealth_info.category = '';
    },
    clearEmploymentInfo() {
      (this.personal_info.employment.status),
      (this.personal_info.employment.work = ''),
      (this.personal_info.employment.employerName = ''),
      (this.personal_info.employment.companyName = ''),
      (this.personal_info.employment.companyAddress = ''),
      (this.personal_info.employment.selectedWorkCategory = '');
    },
    next() {
      if (!this.philhealth_info.isMember) {
        this.clearPhilHealthInfo();
      }
      if (!this.isEmployed) {
        this.clearEmploymentInfo();
      }
      const personal_data = {philhealth_info: this.philhealth_info, personal_info: this.personal_info}
      console.log(personal_data)
      this.$emit('next-page', personal_data);
    }
  }
};
</script>

<style scoped></style>
