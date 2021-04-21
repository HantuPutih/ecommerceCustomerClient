<template>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
  <b-carousel-slide>
    <template #img>
      <img
        class="d-block img-fluid w-100"
        width="720"
        height="480"
        :src="banner.image_url"
        alt="image slot"
      >
    </template>
  </b-carousel-slide>
</template>

<script>
export default {
  props: ['banner'],
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>

</style>
