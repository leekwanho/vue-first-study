<template>
  <div>
    <sidebar-menu
      :menu="menu"
      :collapsed="collapsed"
      :theme="selectedTheme"
      :width="width"
      @item-click="onItemClick">
    </sidebar-menu>
  </div>
</template>

<script>
const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
}

export default {
  name: 'sidebar',
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
      selectedTheme: 'white-theme',
      width: '200px'
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
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
@import "../../../node_modules/vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";
@import "../../../node_modules/vue-sidebar-menu/src/scss/var.scss";
@import "../../../node_modules/vue-sidebar-menu/src/scss/themes/default-theme.scss";
@import "../../../node_modules/vue-sidebar-menu/src/scss/themes/white-theme.scss";

.fa-icon-innter-text {
    font-family: 'sans-serif';
    font-size: 1rem;
    margin: 0;
    text-align: center;
}
</style>
