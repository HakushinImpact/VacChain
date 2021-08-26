<template>
    <div class="column is-half is-offset-one-quarter">
        <h1 class="title"> Vaccine Registration Form </h1>

        <form>
            <div class="field-group">
                <div class="field is-inline-block-desktop">
                    <input v-model="lastName" class="input" type="text" placeholder="Last Name">
                </div>
                <div class="field is-inline-block-desktop">
                    <input v-model="firstName" class="input" type="text" placeholder="First Name">
                </div>
                <div class="field is-inline-block-desktop">
                    <input v-model="middleName" class="input" type="text" placeholder="Middle Name">
                </div>
                <div class="field is-inline-block-desktop">
                    <input v-model="suffix" class="input" type="text" placeholder="Suffix">
                </div>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: 'VaccRegForm',
    data () {
        return {
            lastName: '',
            firstName: '',
            middleName: '',
            suffix: '',
            Sex: [
                "Male",
                "Female"
            ]
        }
    },
    computed: {

    }
}
</script>

<style scoped>
</style>