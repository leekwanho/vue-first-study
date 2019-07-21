<template>
  <div id="app">
    <img src="./assets/nexters.png" width="300" height="300">
    <router-view/>
    <sidebar/>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar/sidebar'
export default {
  name: 'App',
  components: {Sidebar}
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body,
html {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #f2f4f7;
}
#demo {
  padding-left: 350px;
}
#demo.collapsed {
  padding-left: 50px;
}
.demo {
  padding: 50px;
}
.container {
  max-width: 600px;
}
pre {
  color: #2a2a2e;
  background: #fff;
  border-radius: 2px;
  padding: 10px;
  overflow: auto;
}

.fa-icon-innter-text {
    font-family: 'sans-serif';
    font-size: 1rem;
    margin: 0;
    text-align: center;
}
</style>
