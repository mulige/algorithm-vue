<template>
  <div class="menu-wrapper">
    <div v-for="(item, index) in routesdata" :key="index">
      <a
        @click="toRoute"
        :data-path="item.meta.parentPath"
        :data-ownpath="item.path"
        :data-redirect="item.redirect"
      >{{item.meta.title}}</a>
      <sidebar-item :routesdata="item.children?item.children: [] " />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routesdata: {
      default: () => []
    }
  },
  data () {
    return {}
  },
  created () {},
  computed: {},
  watch: {},
  methods: {
    toRoute (e) {
      e.preventDefault()
      this.$store.commit('hideResult')
      const parentPath = e.target.getAttribute('data-path')
      const ownPath = e.target.getAttribute('data-ownpath')
      const redirect = e.target.getAttribute('data-redirect')
      if (parentPath === '/') {
        redirect ? this.$router.push(redirect) : ''
      } else {
        this.$router.push(`${parentPath}/${ownPath}`)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.menu-wrapper {
  div {
    padding-left: 10px;
    a {
      cursor: pointer;
      line-height: 30px;
      font-size: 14px;
      font-weight: 600;
      color: #e3e3e3;
      text-shadow: 0 0 1px #000;
      &:hover {
        text-decoration: underline;
        text-decoration-color: #40e0d0;
        color: #40e0d0;
      }
    }
  }
}
</style>
