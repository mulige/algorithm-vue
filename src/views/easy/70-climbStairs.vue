<template>
  <div>
    <h3 class="questionName">70.爬楼梯</h3>
    <p class="questionDesc">
      假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
      每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
      注意：给定 n 是一个正整数。
    </p>
    <div class="democode">
      <p>示例1：</p>
      <pre><strong>输入：</strong> 2
<strong>输出：</strong> 2
<strong>解释：</strong> 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶</pre>
      <p>示例2：</p>
      <pre><strong>输入：</strong> 3
<strong>输出：</strong> 3
<strong>解释：</strong> 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
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
                * @param {number} n
                * @return {number}
                */
                var climbStairs = function (n) {
                    var a = [];
                    // 这里赋值的过程是为了满足下面的循环的执行
                    a[1] = 1;
                    a[2] = 2;
                    for (var i = 3; i <= n; i++) {
                        a[i] = a[i - 1] + a[i - 2]
                    }
                    return a[n]
                };
            </code>
        </pre>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  computed: {
    ...mapState(["showResult", "textInfo"]),
  },
  watch: {},
  methods: {},
};
</script>

<style scoped lang='scss'>
</style>
