<template>
  <div  class="cards">
  <b-card
    :title="prod.name"
    :img-src="prod.image_url"
    img-height="300"
    img-width="300"
    img-alt="product"
    img-top
    tag="article"
    style="max-width: 20rem; min-height: 31rem;"
    class="mb-2"
  >
    <b-card-text>
      Price: <b>{{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(prod.price)}}</b>
    </b-card-text>
    <b-card-text>
      In stock: <b>{{prod.stock}}</b>
    </b-card-text>
    <b-button href="#" variant="primary" @click.prevent="addToCartBtn(prod.id)">Add To Cart</b-button>
  </b-card>
</div>
</template>

<script>
export default {
  props: ['prod'],
  methods: {
    addToCartBtn (id) {
      // console.log(id)
      this.$store.dispatch('addToCart', id)
    }
  }
}
</script>

<style>

</style>
