<template>
  <div class="homePage">
    <div class="algorithm-position">
      <h4 class="title" v-text="algorithm.name"></h4>
      <img :src="algorithm.imgUrl" alt />
      <ul @click="toDetail">
        <li
          v-for="(item, index) in algorithm.dataList"
          :key="index"
          :data-index="index"
        >{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      algorithm: {
        name: '算法',
        imgUrl: require('../../assets/imgs/algorithm.jpg'),
        dataList: [
          {
            title: 'easy',
            path: '/easy'
          },
          {
            title: 'middle',
            path: '/'
          },
          {
            title: 'difficult',
            path: '/'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    toDetail (e) {
      const index = e.target.getAttribute('data-index')
      this.$router.push(this.algorithm.dataList[index].path)
    }
  }
}
</script>

<style scoped lang="scss">
.homePage {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 40px 0 0 40px;
  .algorithm-position {
    width: 320px;
    height: 200px;
    border-radius: 15px;
    box-shadow: 0 0 10px #333;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #ff00ff;
    > img {
      position: absolute;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      left: 0;
      top: 0;
      border-radius: 15px;
      z-index: -1;
    }
    > ul {
      text-align: center;
      font-size: 18px;
      > li {
        line-height: 40px;
        cursor: pointer;
      }
    }
  }
}
</style>
