<template>
  <div class="Page2">
    <h1>{{ message }}</h1>
      <form @submit="onSubmit">
          <input placeholder="Enter your ID" v-model="uid">
          <input placeholder="Enter your password" v-model="password">
          <button type="submit">로그인?</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Page2',
  data () {
    return {
      message: '2페이지',
      requestData: '',
      uid: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      this.requestData = this.uid + ' ' + this.password
      this.goToPages()
    },
    goToPages () {
      this.$router.push({
        name: 'LoginSuccess',
        params: {
          'uid': this.uid,
          'password': this.password
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
