<template>
  <div>
    <h3 class="questionName">38.外观数列</h3>
    <p class="questionDesc">
      给定一个正整数 n（1 ≤ n ≤ 30），输出外观数列的第 n 项。
      <br />注意：整数序列中的每一项将表示为一个字符串。
      <br />「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：
      <br />1. 1
      <br />2. 11
      <br />3. 21
      <br />4. 1211
      <br />5. 111221
      <br />第一项是数字 1
      <br />描述前一项，这个数是 1 即 “一个 1 ”，记作 11
      <br />描述前一项，这个数是 11 即 “两个 1 ” ，记作 21
      <br />描述前一项，这个数是 21 即 “一个 2 一个 1 ” ，记作 1211
      <br />描述前一项，这个数是 1211 即 “一个 1 一个 2 两个 1 ” ，记作 111221
      <br />
    </p>
    <div class="democode">
      <p>示例1：</p>
      <pre><strong>输入:</strong> 1
<strong>输出:</strong> "1"
<strong>解释：</strong>这是一个基本样例。</pre>
      <p>示例2：</p>
      <pre><strong>输入:</strong> 4
<strong>输出:</strong> "1211"
<strong>解释：</strong>当 n = 3 时，序列是 "21"，其中我们有 "2" 和 "1" 两组，"2" 可以读作 "12"，也就是出现频次 = 1 而 值 = 2；类似 "1" 可以读作 "11"。所以答案是 "12" 和 "11" 组合在一起，也就是 "1211"。</pre>
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
                * @return {string}
                */
                var countAndSay = function (n) {
                    let pre = '1'
                    for (let i = 1; i < n; i++) {
                        pre = pre.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
                    }
                    return pre
                };
                console.log(countAndSay(5))
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
