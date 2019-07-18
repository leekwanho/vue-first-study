<template>
  <div>
    <div id="app">
      <img src="./assets/logo.png">
      <router-view/>
    </div>
    <div>
      <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :theme="selectedTheme">`
      </sidebar-menu>
    </div>
  </div>
</template>

<script>
const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
}

export default {
  name: 'App',
  data () {
    return {
      menu: [
        {
          header: true,
          title: 'Main Navigation'
        },
        {
          href: '/home',
          title: 'dashboard',
          icon: 'fas fa-home'
        },
        {
          header: true,
          component: separator,
          visibleOnCollapse: true
        },
        {
          header: true,
          title: 'Option'
        },
        {
          href: '/page2',
          title: 'login',
          icon: 'fas fa-sign-in-alt'
        },
        {
          title: 'main',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '/loginSuccess',
              title: '15기',
              icon: {
                class: 'fa fa-home',
                element: 'span',
                attributes: {},
                text: '15'
              }
            }
          ]
        }
      ],
      collapsed: true,
      themes: ['', 'white-theme'],
      selectedTheme: 'white-theme'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
@import "../node_modules/vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";
@import "../node_modules/vue-sidebar-menu/src/scss/var.scss";
@import "../node_modules/vue-sidebar-menu/src/scss/themes/default-theme.scss";
@import "../node_modules/vue-sidebar-menu/src/scss/themes/white-theme.scss";

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
