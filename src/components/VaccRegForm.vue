<template>
  <div class="column is-half is-offset-one-quarter">
    <h1 class="title">Vaccine Registration Form</h1>

    <form>
      <div class="field-group">
        <div class="field is-inline-block-desktop">
          <input class="checkbox" type="checkbox" value="isMember" />
        </div>
        <div class="field is-inline-block-desktop">
          <label for="isMember"> PhilHealth Member? </label>
        </div>
      </div>

      <div class="field-group">
        <div class="field is-inline-block-desktop">
          <input
            v-model="philHealthNumber"
            class="input"
            type="input"
            placeholder="PhilHealth No."
          />
        </div>
        <div class="field is-inline-block-desktop">
          <span class="select">
            <select v-model="selectedPhilHealthCategory">
              <option selected> PhilHealth Category </option>
              <option v-for="(item, index) in category" :key="index">
                {{ item }}
              </option>
            </select>
          </span>
        </div>
      </div>

      <div>
        <label class="label"> Personal Details </label>
      </div>

      <div class="field-group">
        <div class="field is-inline-block-desktop">
          <input
            v-model="lastName"
            class="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div class="field is-inline-block-desktop">
          <input
            v-model="firstName"
            class="input"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div class="field is-inline-block-desktop">
          <input
            v-model="middleName"
            class="input"
            type="text"
            placeholder="Middle Name"
          />
        </div>
        <div class="field is-inline-block-desktop">
          <input
            v-model="suffix"
            class="input"
            type="text"
            placeholder="Suffix"
          />
        </div>
      </div>

      <div class="field-group">
        <div class="field is-inline-block-desktop">
          <span class="select">
            <select v-model="selectedSex">
              <option selected> Sex </option>
              <option v-for="(item, index) in sex" :key="index">
                {{ item }}
              </option>
            </select>
          </span>
        </div>
        <div class="field is-inline-block-desktop">
          <input
            v-model="birthdate"
            class="input"
            type="date"
            placeholder="Birthdate"
          />
        </div>
        <div class="field is-inline-block-desktop">
          <input
            v-model="contactNumber"
            class="input"
            type="text"
            placeholder="Contact Number"
          />
        </div>
      </div>

      <div class="field">
        <input
          v-model="fullAddress"
          class="input"
          type="text"
          placeholder="Full Address"
        />
      </div>

      <div class="field-group">
        <div class="field is-inline-block-desktop">
          <span class="select">
            <select v-model="selectedCivilStatus">
              <option selected> Civil Status </option>
              <option v-for="(item, index) in civilStatus" :key="index">
                {{ item }}
              </option>
            </select>
          </span>
        </div>
        <div class="field is-inline-block-desktop">
          <span class="select">
            <select v-model="selectedEmploymentStatus">
              <option selected> Employment Status </option>
              <option v-for="(item, index) in employmentStatus" :key="index">
                {{ item }}
              </option>
            </select>
          </span>
        </div>
      </div>

      <div v-show="isEmployed">
        <div class="field-group">
          <div class="field is-inline-block-desktop">
            <input
              v-model="work"
              class="input"
              type="text"
              placeholder="Occupation/Work"
            />
          </div>
          <div class="field is-inline-block-desktop">
            <input
              v-model="employerName"
              class="input"
              type="text"
              placeholder="Employer Name"
            />
          </div>
          <div class="field is-inline-block-desktop">
            <input
              v-model="companyName"
              class="input"
              type="text"
              placeholder="Company Name"
            />
          </div>
        </div>
      </div>

      <div class="field-group">
        <div class="field is-inline-block-desktop">
          <input
            v-model="companyAddress"
            class="input"
            type="text"
            placeholder="Company Address"
          />
        </div>
        <div class="field is-inline-block-desktop">
          <span class="select">
            <select v-model="selectedWorkCategory">
              <option selected> Work Category </option>
              <option v-for="(item, index) in workCategory" :key="index">
                {{ item }}
              </option>
            </select>
          </span>
        </div>
      </div>

      <div>
        <label class="label"> Health Information </label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'VaccRegForm',
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
  computed: {}
};
</script>

<style scoped></style>
