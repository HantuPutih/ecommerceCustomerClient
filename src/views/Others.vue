<template>
  <div class="container container-other" >
    <div class="title-prod">
      <br>
      <h1>Other Products</h1>
      <h4>perhaps your items is in this category?</h4>
    </div>
    <b-container fluid class="container">
      <div class="flex-container">
        <card-prod v-for="otherProd in otherProds" :key="otherProd.id" :prod="otherProd"></card-prod>
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
    otherProds () {
      return this.$store.state.otherProd
    }
  },
  created () {
    this.$store.dispatch('getAllOther')
  }
}
</script>
