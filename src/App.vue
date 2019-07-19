<template>
  <div>
    <div id="app">
      <img src="./assets/nexters.png" width="300" height="300">
      <router-view/>
    </div>
    <div>
      <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :theme="selectedTheme"
        @item-click="onItemClick">
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
      gisuData: {},
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
          href: '/login',
          title: 'login',
          icon: 'fas fa-sign-in-alt'
        }
      ],
      collapsed: true,
      themes: ['', 'white-theme'],
      selectedTheme: 'white-theme'
    }
  },
  methods: {
    gisuSet () {
      this.gisuData = {
        title: '기수 선택',
        icon: {
          element: 'span',
          attributes: {},
          class: 'fab fa-weixin'
        },
        child: []
      }
    },
    gisuChildSet () {
      this.gisuData.child.push({
        href: '/loginSuccess',
        title: '15기',
        kind: 'gisu-child',
        text: '15',
        icon: {
          element: 'span',
          attributes: {},
          text: '15'
        }
      })
      this.gisuData.child.push({
        href: '/loginSuccess2',
        title: '16기',
        kind: 'gisu-child',
        text: '16',
        icon: {
          element: 'span',
          attributes: {},
          text: '16'
        }
      })
    },
    onItemClick (event, item) {
      if (item.kind === 'gisu-child') {
        this.gisuData.icon.class = null
        this.gisuData.icon.text = item.text
      } else {
        this.gisuData.icon.class = 'fab fa-weixin'
        this.gisuData.icon.text = null
      }
    }
  },
  beforeMount () {
    this.gisuSet()
    this.gisuChildSet()
    this.menu.push(this.gisuData)
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
