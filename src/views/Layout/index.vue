<template>
  <div class="layoutContainer">
    <div class="tabBarContainer">
      <div class="tabBarTitle">ALGORITHM</div>
      <sidebar-item :routesdata="routesData" :parentRoute="{}"></sidebar-item>
    </div>
    <div class="appMain">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { addRoutes } from '@/router/index'
import SidebarItem from './components/SidebarItem'
export default {
  name: '',
  data () {
    return {
      routesData: addRoutes
    }
  },
  components: { SidebarItem },
  created () {},
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style scoped lang="scss">
.layoutContainer {
  width: 100%;
  height: 100%;
  display: flex;
  .tabBarContainer {
    width: 200px;
    flex-shrink: 0;
    background-color: rgba(255, 250, 250, 0.5);
    height: 100%;
    overflow: scroll;
    &::-webkit-scrollbar{/*滚动条整体样式*/
    width: 0px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
    }
    &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
      border-radius: 6px;
      -webkit-box-shadow: inset 0 0 5px rgba(122, 122, 122, 0.2);
      background: #7a7a7a;
    }
    &::-webkit-scrollbar-track {/*滚动条里面轨道*/
      -webkit-box-shadow: inset 0 0 5px rgba(122, 122, 122, 0.2);
      border-radius: 5px;
      background: #EDEDED;
    }
    .tabBarTitle {
      width: 100%;
      text-align: center;
      line-height: 60px;
      font-size: 22px;
      font-weight: 600;
      text-shadow: 0 0 3px red;
    }
  }
  .appMain {
    flex: 1;
    padding: 30px;
    background-color: rgba(245, 245, 245, 0.5);
    height: 100%;
    overflow: scroll;
    box-sizing: border-box;
    &::-webkit-scrollbar{/*滚动条整体样式*/
    width: 0px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
    }
    &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
      border-radius: 6px;
      -webkit-box-shadow: inset 0 0 5px rgba(122, 122, 122, 0.2);
      background: #7a7a7a;
    }
    &::-webkit-scrollbar-track {/*滚动条里面轨道*/
      -webkit-box-shadow: inset 0 0 5px rgba(122, 122, 122, 0.2);
      border-radius: 5px;
      background: #EDEDED;
    }
  }
}
</style>
