<template>
  <div class="container container-work" >
    <div class="title-prod">
      <br>
      <h1>Work Products</h1>
      <h4>for those looking to improve their work performance</h4>
    </div>
    <!-- <b-container fluid class="container"> -->
      <div class="flex-container">
        <card-prod v-for="workProd in workProds" :key="workProd.id" :prod="workProd"></card-prod>
      </div>
    <!-- </b-container> -->
  </div>
</template>

<script>
import CardProd from '../components/CardProd.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    CardProd
  },
  computed: {
    workProds () {
      return this.$store.state.workProd
    }
  },
  created () {
    this.$store.dispatch('getAllWork')
  }
}
</script>
