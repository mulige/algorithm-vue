<template>
  <div>
    <h3 class="questionName"></h3>
    <p class="questionDesc">给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转</p>
    <div class="democode">
      <h4>示例 1:</h4>
      <pre>
          <strong>输入:</strong> 123
          <strong>输出:</strong> 321
      </pre>
      <h4>示例 2:</h4>
      <pre>
          <strong>输入:</strong> -123
          <strong>输出:</strong> -321
      </pre>
      <h4>示例 3:</h4>
      <pre>
          <strong>输入:</strong> 120
          <strong>输出:</strong> 21
      </pre>
    </div>
    <div class="attention">
      <h4>注意:</h4>
      <p>假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31, 2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。</p>
    </div>
    <h4 class="answerTitle">题目解析：<span class="actionButton" v-text="textInfo" @click="$store.commit('changeShowStatus')"></span></h4>
    <div class="codeContainer" v-highlight v-if="showResult">
      <pre>
            <code class="javascript">
                function reverse(n) {
                    const minn = -(1 << 30) * 2
                    const maxn = (1 << 30) * 2 - 1
                    let ans;
                    let arr = n.toString().split("");
                    if (n < 0) {
                        arr.shift()
                    }
                    ans = Number(arr.reverse().join(''))
                    if (n < 0) {
                        ans *= -1
                    }
                    if (ans < minn || n > maxn) {
                        return 0
                    } else {
                        return ans
                    }
                }
                console.log(reverse(123))
                console.log(reverse(-123))
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
  computed: { ...mapState(['showResult', 'textInfo']) },
  watch: {},
  methods: {}
}
</script>

<style scoped lang='scss'>
</style>
