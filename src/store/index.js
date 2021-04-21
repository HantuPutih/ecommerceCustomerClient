import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from '../api/axios.js'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginState: localStorage.getItem('access_token') || false,
    homeProd: [],
    workProd: [],
    otherProd: [],
    myCart: [],
    banners: [],
    showBanners: false
  },
  mutations: {
    SET_LOGIN_STATE (state, payload) {
      state.loginState = payload
    },
    SET_HOME_PROD (state, payload) {
      state.homeProd = payload
    },
    SET_WORK_PROD (state, payload) {
      state.workProd = payload
    },
    SET_OTHER_PROD (state, payload) {
      state.otherProd = payload
    },
    SET_MY_CART (state, payload) {
      state.myCart = payload
    },
    SET_BANNER (state, payload) {
      state.banners = payload
    },
    SET_SHOW_BANNERS (state, payload) {
      state.showBanners = payload
    }
  },
  actions: {
    /* users */
    login ({ commit }, payload) {
      const { email, password } = payload
      axios({
        url: '/user/loginCustomer',
        method: 'POST',
        data: {
          email, password
        }
      }).then(({ data }) => {
        localStorage.setItem('access_token', data.access_token)
        commit('SET_LOGIN_STATE', true)
        router.push('/')
      }).catch(err => {
        console.log({ err })
      })
    },
    register ({ commit }, payload) {
      const { email, password } = payload
      axios({
        url: '/user/register',
        method: 'POST',
        data: { email, password }
      }).then(response => {
        console.log('sukses regsiter')
        router.push('/login')
      }).catch(err => {
        console.log({ err })
      })
    },
    logout (context) {
      localStorage.clear()
      context.commit('SET_LOGIN_STATE', false)
      router.push('/')
    },
    /* banners */
    getAllBanners ({ commit }) {
      axios({
        url: '/banner/cust',
        method: 'GET'
      }).then(response => {
        commit('SET_BANNER', response.data)
        // console.log(response.data)
      }).catch(error => {
        console.log({ error })
      })
    },
    /* products */
    getAllHome ({ commit }) {
      commit('SET_SHOW_BANNERS', true)
      axios({
        url: '/product/customer/home',
        method: 'GET'
      }).then(response => {
        commit('SET_HOME_PROD', response.data)
      }).catch(err => {
        console.log({ err })
      })
    },
    getAllWork ({ commit }) {
      commit('SET_SHOW_BANNERS', true)
      axios({
        url: '/product/customer/work',
        method: 'GET'
      }).then(response => {
        commit('SET_WORK_PROD', response.data)
      }).catch(err => {
        console.log({ err })
      })
    },
    getAllOther ({ commit }) {
      commit('SET_SHOW_BANNERS', true)
      axios({
        url: '/product/customer/other',
        method: 'GET'
      }).then(response => {
        commit('SET_OTHER_PROD', response.data)
      }).catch(err => {
        console.log({ err })
      })
    },
    getMyCart ({ commit }) {
      commit('SET_SHOW_BANNERS', false)
      axios({
        url: '/product/customer/mycart',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        commit('SET_MY_CART', response.data)
      }).catch(err => {
        console.log({ err })
      })
    },
    addToCart ({ commit }, payload) {
      axios({
        url: '/product/customer/' + payload,
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          quantity: 1
        }
      }).then(response => {
        Swal.fire(
          response.data.msg,
          'Continue Shopping',
          'success'
        )
        // this.dispatch()
        console.log(response.data.msg)
      }).catch(err => {
        console.log({ err })
        if (err.response.status === 401) {
          router.push('/login')
        } else {
          Swal.fire({
            icon: 'error',
            title: err.response.data.error || err.response.data.err.msg + '!',
            text: 'quantity in cart maxed'
          })
        }
      })
    },
    updateQty ({ commit }, payload) {
      axios({
        url: '/product/customer/' + payload.id,
        method: 'PATCH',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          quantity: payload.quantity
        }
      }).then(response => {
        console.log(response.data.msg)
        this.dispatch('getMyCart')
      }).catch(err => {
        Swal.fire({
          icon: 'error',
          title: err.response.data.error || err.response.data.err.msg + '!',
          text: 'enter a valid quantity'
        })
        console.log({ err })
      })
    },
    deleteProdInCart ({ commit }, payload) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            url: '/product/customer/' + payload,
            method: 'DELETE',
            headers: {
              access_token: localStorage.access_token
            }
          }).then(() => {
            this.dispatch('getMyCart')
            console.log('sukses delete product in cart')
          }).catch(err => {
            console.log({ err })
          })
          Swal.fire(
            'Deleted!',
            'Product has been deleted.',
            'success'
          )
        }
      })
    },
    showBanner ({ commit }, payload) {
      commit('SET_SHOW_BANNERS', payload)
    }
  },
  modules: {
  }
})
