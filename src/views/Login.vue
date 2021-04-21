<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <br>
    <h1>Welcome to Alpha Centauri</h1>
    <h5>enter your email and password to start shopping</h5>
      <!-- Tabs Titles -->
      <!-- Icon -->
      <div class="fadeIn first">
        <img src="../assets/harold_2.jpg" id="icon" alt="User Icon" />
      </div>
      <!-- Username Form -->
      <form>
        <input type="email" class="fadeIn second" name="login" placeholder="Enter E-mail" v-model="email" required>
        <input type="password" class="fadeIn second" name="loginPass" placeholder="Enter password" v-model="password" required>
        <input type="submit" class="fadeIn fourth" value="Login" @click.prevent="loginBtn()">
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable eol-last */

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginBtn () {
      this.$store.dispatch('login', {
        email: this.email, password: this.password
      }).then(_ => { this.$router.push('/') })
    }
  },
  computed: {},
  created () {
    this.$store.dispatch('showBanner', false)
  }
}
</script>

<style scoped>

</style>
