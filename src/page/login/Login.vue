<template>
  <div class="Page2">
    <form @submit.prevent="onSubmit">
      <h1>로그인</h1>
      <input placeholder="Enter your ID" v-model="uid">
      <input placeholder="Enter your password" v-model="password">
      <button type="submit" :disabled='isDisabled'>로그인</button>
    </form>
  </div>
</template>

<script>
import LoginApi from '../service/LoginAPI'

export default {
  name: 'Login',
  data () {
    return {
      uid: '',
      password: '',
      duringLogin: false
    }
  },
  methods: {
    onSubmit () {
      const uid = this.uid
      const password = this.password

      if (!uid || !password) {
        return false
      }

      LoginApi.login(uid, password)
        .then(res => this.goToPages(res.data))
        .catch(err => {
          alert('Login fail!', err)
          this.duringLogin = false
        })
      this.duringLogin = true
      console.log('waiting')
    },
    goToPages (data) {
      this.$store.commit('setId', data.id)
      this.$store.commit('setAuth', true)
      this.$store.commit('setKey', 'temp_key')
      this.$router.push({
        name: 'LoginSuccess'
      })
    }
  },
  computed: {
    isDisabled () {
      return this.duringLogin
    }
  }
}
</script>

<style scoped>

</style>
