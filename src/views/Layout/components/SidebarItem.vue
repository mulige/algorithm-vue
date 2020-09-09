<template>
  <div class="menu-wrapper">
    <div v-for="(item, index) in routesdata" :key="index">
      <p
        @click="toRoute"
        :data-path="item.meta.parentPath"
        :data-ownpath="item.path"
        :data-redirect="item.redirect"
      >{{item.meta.title}}</p>
      <sidebar-item :routesdata="item.children?item.children: [] " />
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    routesdata: {
      default: () => [],
    },
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  watch: {},
  methods: {
    toRoute(e) {
      this.$store.commit("hideResult");
      const parentPath = e.target.getAttribute("data-path");
      const ownPath = e.target.getAttribute("data-ownpath");
      const redirect = e.target.getAttribute("data-redirect");
      if (parentPath === "/") {
        redirect ? this.$router.push(redirect) : "";
      } else {
        this.$router.push(`${parentPath}/${ownPath}`);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.menu-wrapper {
  div {
    padding-left: 10px;
    p {
      cursor: pointer;
      line-height: 30px;
      font-size: 14px;
      font-weight: 600;
      color: #e3e3e3;
      text-shadow: 0 0 1px #000;
    }
  }
}
</style>
