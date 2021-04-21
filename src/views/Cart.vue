<template>
  <div class="container container-my-cart">
    <br>
    <h1 class="title-prod">Item In Cart</h1>
    <b-container fluid class="container">
      <!-- <b-container fluid="xl">  </b-container> -->
      <!-- v-if="carts.length == 0"  -->
      <h2 v-if="carts.cartList.length === 0"> Cart is empty</h2>
      <div class="flex-container" v-else>
        <card-cart v-for="cart in carts.cartList" :key="cart.id" :cart="cart"></card-cart>
      </div>
    </b-container>
  </div>
</template>

<script>
import CardCart from '../components/CardCart.vue'
export default {
  components: { CardCart },
  computed: {
    carts () {
      return this.$store.state.myCart
    }
  },
  created () {
    this.$store.dispatch('getMyCart')
  }
}
</script>

<style scoped>
.container{
  text-align: center;
}
</style>
