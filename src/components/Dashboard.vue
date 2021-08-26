<template>
  <div>
    <div class="column is-4 is-offset-4 my-auto">
      <div class="has-text-centered">
        <p class="title"> VacChain Tracker </p>
      </div>
    </div>
    <nav class="level">
      <div class="level-item has-text-centered">
        <div class="card">
          <div class="card-content">
            <p class="heading">Total Vaccinated</p>
            <p class="title">3,800</p>
            <p class="heading">1st Dose</p>
          </div>
          <div class="card-content">
            <p class="heading">Total Vaccinated</p>            
            <p class="title">3,456</p>
            <p class="heading">2nd Dose</p>
          </div>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div class="card">
          <div class="card-content">
            <p class="heading">Daily Target</p>
            <p class="title">150/300</p>
            <progress class="progress is-success is-small mt-2" value="50" max="100"></progress>
          </div>
          <div class="card-content">
            <p class="heading">Weekly Target</p>
            <p class="title">1500/3000</p>
            <progress class="progress is-success is-small mt-2" value="50" max="100"></progress>
          </div>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div class="card">
          <div class="card-content">
            <p class="heading">AVAILABLE DOSE</p>
            <p class="title">3500</p>
            <p class="heading">SINOVAC</p>
          </div>
          <div class="card-content">
            <p class="heading">AVAILABLE DOSE</p>
            <p class="title">600</p>
            <p class="heading">MODERNA</p>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>