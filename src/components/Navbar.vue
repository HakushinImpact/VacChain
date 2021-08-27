<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="../assets/logo.png" height="100%" />
        <p class="ml-3 title is-6">VacChain</p>
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarContents"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarContents" class="navbar-menu">
      <div class="navbar-start">
        <router-link :to="{ name: 'Dashboard' }" class="navbar-item">
          Dashboard
        </router-link>
        <router-link :to="{ name: 'Manage' }" class="navbar-item">
          Manage
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link
              :to="{ name: 'New Record' }"
              class="button is-primary is-rounded has-icon-left"
            >
              <span class="icon is-small">
                <FontAwesomeIcon icon="plus" />
              </span>
              <strong>New record</strong>
            </router-link>
            <router-link
              to="/login"
              class="button is-danger is-inverted is-rounded has-icon-left"
            >
              <span class="icon is-small">
                <FontAwesomeIcon icon="sign-out-alt" />
              </span>
              <span>Logout</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {}
};
</script>

<style>
</style>