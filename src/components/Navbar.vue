<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
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
        <router-link to="dashboard" class="navbar-item">
          Dashboard
        </router-link>
        <router-link to="manage" class="navbar-item"> Manage </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link
              to="new"
              class="button is-primary is-rounded has-icon-left"
            >
              <span class="icon is-small">
                <FontAwesomeIcon icon="plus" />
              </span>
              <strong>New record</strong>
            </router-link>
            <router-link
              to="/"
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