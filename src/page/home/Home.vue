<template>
  <div class="Home">
    <h1>{{ message }}</h1>
    <span v-bind:title="message">
      마우스 hover
    </span>
    <ol v-for="(todo, index) in todos" :key="index">
      {{ index + " " + todo.text}}e
    </ol>
    <button v-on:click="reverseMessage">메시지 뒤집기</button> <br>
    <input v-model="message">
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'Home',
  components: {
    Footer
  },
  data () {
    return {
      welcome: 'Welcome to Your Vue.js App',
      message: 'hello world',
      todos: [
        {text: 'JavaScript 배우기'},
        {text: 'Vue 배우기'},
        {text: '무언가 멋진 것을 만들기'}
      ]
    }
  },
  methods: {
    reverseMessage () {
      this.welcome = this.welcome.split('').reverse().join('')
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
