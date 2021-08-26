<template>
    <div class="column is-half is-offset-one-quarter">
        <h1 class="title"> VacChain </h1>

        <form>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input v-model="username" class="input" type="text" placeholder="Username">
                    <span class="icon is-small is-left">
                        <FontAwesomeIcon icon="user" />
                    </span>
                </p>
            </div>

            <div class="field">
                <p class="control has-icons-left">
                    <input  v-model="password" class="input" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                        <FontAwesomeIcon icon="lock" />
                    </span>
                </p>
            </div>
            
            <div class="field">
                <p class="control">
                    <button class="button is-success" :disabled="!isComplete">
                    Login
                    </button>
                </p>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            username: '',
            password: '',
            isComplete: false,
            valid: false
        }
    },
    computed: {

    }
}
</script>

<style scoped>
</style>