<template>
  <div>
    <h3 class="questionName">69.x的平方根</h3>
    <p class="questionDesc">
      实现 int sqrt(int x) 函数。
      <br />计算并返回 x 的平方根，其中 x 是非负整数。
      <br />由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
      <br />
    </p>
    <div class="democode">
      <p>示例1：</p>
      <pre><strong>输入:</strong> 4
<strong>输出:</strong> 2
</pre>
      <p>示例2：</p>
      <pre><strong>输入:</strong> 8
<strong>输出:</strong> 2
<strong>说明:</strong> 8 的平方根是 2.82842...,
&nbsp;    由于返回类型是整数，小数部分将被舍去。
</pre>
    </div>
    <h4 class="answerTitle">
      题目解析：
      <span class="actionButton" v-text="textInfo" @click="$store.commit(`changeShowStatus`)"></span>
    </h4>
    <div class="codeContainer" v-highlight v-if="showResult">
      <pre>
            <code class="language-javascript">
                 /**
                * @param {number} x
                * @return {number}
                */
                var mySqrt = function (x) {
                    return ~~Math.sqrt(x)
                };
                /**
                * @param {number} x
                * @return {number}
                */
                var mySqrt1 = function (x) {
                    //相比上面的方式可能会更快
                    return Math.floor(Math.sqrt(x))
                };
            </code>
        </pre>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: '',
  data () {
    return {}
  },
  computed: {
    ...mapState(['showResult', 'textInfo'])
  },
  watch: {},
  methods: {}
}
</script>

<style scoped lang='scss'>
</style>
