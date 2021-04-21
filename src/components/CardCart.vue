<template>
  <div class="cards">
  <b-card
    no-body
    style="width: 20rem; height: 40rem; padding: 8px"
    img-height="300"
    img-width="300"
    :img-src="cart.Product.image_url"
    img-alt="cart Product"
    img-top
  >
    <b-card-body>
      <!-- <p>{{cart}}</p> -->
      <b-card-title>{{cart.Product.name}}</b-card-title>
      <b-card-sub-title class="mb-2">{{cart.Product.category}}</b-card-sub-title>
    </b-card-body>

    <b-list-group flush>
      <b-list-group-item>price: <b>{{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(cart.Product.price)}}</b></b-list-group-item>
      <b-list-group-item>quantity to buy: <b>{{cart.quantity}}</b></b-list-group-item>
      <div>
      <b-form inline>
          <!-- id="inline-form-input-name" -->
        <!-- <label class="sr-only" for="inline-form-input-name">Name</label> -->
        <b-form-input
          class="mb-1 mr-sm-2 mb-sm-0"
          type="number"
          v-model="qty"
          min="0"
          size="sm"
        ></b-form-input>
        <b-button variant="primary" @click.prevent="updateBtn(cart.id)" size="sm">update qty</b-button>
      </b-form>
    </div>
    </b-list-group>

    <b-card-body>
      <button class="card-link btn btn-danger" @click.prevent="deleteBtn(cart.id)">Remove From Cart</button>
    </b-card-body>
  </b-card>
</div>
</template>

<script>
export default {
  data () {
    return {
      qty: this.cart.quantity
    }
  },
  props: ['cart'],
  methods: {
    deleteBtn (id) {
      this.$store.dispatch('deleteProdInCart', id)
    },
    updateBtn (id) {
      this.$store.dispatch('updateQty', { id: id, quantity: this.qty })
    }
  }
}
</script>

<style scoped>

</style>
