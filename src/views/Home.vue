<template>
  <div class="home container container-home"  >
    <div class="title-prod">
      <br>
      <h1>Home Products</h1>
    <h4>suited for your daily home needs</h4>
    </div>
    <b-container fluid class="container">
      <div class="flex-container">
          <card-prod v-for="homeProd in homeProds" :key="homeProd.id" :prod="homeProd"></card-prod>
      </div>
    </b-container>
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
    homeProds () {
      return this.$store.state.homeProd
    }
  },
  created () {
    this.$store.dispatch('getAllHome')
  }
}
</script>
