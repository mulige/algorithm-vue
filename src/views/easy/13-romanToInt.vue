<template>
  <div>
    <h3 class="questionName">13. 罗马数字转换数字</h3>
    <p class="questionDesc">
      罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
      <br />字符 数值
      <br />I 1
      <br />V 5
      <br />X 10
      <br />L 50
      <br />C 100
      <br />D 500
      <br />M 1000
      <br />例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做 XXVII, 即为 XX + V + II 。
      <br />通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9
      表示为 IX。这个特殊的规则只适用于以下六种情况：
      <br />I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
      <br />X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
      <br />C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
      <br />给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
    </p>
    <div class="democode">
      <p>示例1：</p>
      <pre><strong>输入:</strong>&nbsp;"III"
        <strong>输出:</strong> 3</pre>
      <p>示例2：</p>
      <pre><strong>输入:</strong>&nbsp;"IV"
        <strong>输出:</strong> 4</pre>
      <p>示例3：</p>
      <pre><strong>输入:</strong>&nbsp;"IX"
<strong>输出:</strong> 9</pre>
      <p>示例4：</p>
      <pre><strong>输入:</strong>&nbsp;"LVIII"
<strong>输出:</strong> 58
<strong>解释:</strong> L = 50, V= 5, III = 3.
</pre>
      <p>示例5：</p>
      <pre><strong>输入:</strong>&nbsp;"MCMXCIV"
<strong>输出:</strong> 1994
<strong>解释:</strong> M = 1000, CM = 900, XC = 90, IV = 4.</pre>
    </div>
    <h4 class="answerTitle">
      题目解析：
      <span class="actionButton" v-text="textInfo" @click="$store.commit(`changeShowStatus`)"></span>
    </h4>
    <div class="codeContainer" v-highlight v-if="showResult">
      <pre>
            <code class="language-javascript">
                  function romanToInt(romanStr) {
                    // 定义hash表
                    const hash = {};
                    hash['I'] = 1;
                    hash['X'] = 10;
                    hash['C'] = 100;
                    hash['M'] = 1000;
                    hash['V'] = 5;
                    hash['L'] = 50;
                    hash['D'] = 500;

                    let sum = 0;
                    for (let i = 0, len = romanStr.length; i < len; i++) {
                        let item = hash[romanStr[i]];
                        let itemNext = i + 1 === len ? 0 : hash[romanStr[i + 1]]
                        if (item < itemNext) {
                            sum += itemNext - item
                            i++
                        } else {
                            sum += item
                        }
                    }
                    return sum
                }
                console.log(romanToInt('VIII'))
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
