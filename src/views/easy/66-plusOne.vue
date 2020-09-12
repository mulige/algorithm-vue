<template>
  <div>
    <h3 class="questionName">66.加一</h3>
    <p class="questionDesc">
      给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
      <br />最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
      <br />你可以假设除了整数 0 之外，这个整数不会以零开头。
      <br />
    </p>
    <div class="democode">
      <p>示例1：</p>
      <pre><strong>输入:</strong> [1,2,3]
<strong>输出:</strong> [1,2,4]
<strong>解释:</strong> 输入数组表示数字 123。
</pre>
      <p>示例2：</p>
      <pre><strong>输入:</strong> [4,3,2,1]
<strong>输出:</strong> [4,3,2,2]
<strong>解释:</strong> 输入数组表示数字 4321。
</pre>
    </div>
    <h4 class="answerTitle">
      题目解析：
      <span class="actionButton" v-text="textInfo" @click="$store.commit(`changeShowStatus`)"></span>
    </h4>
    <div class="codeContainer" v-highlight v-if="showResult">
      <pre>
            <code class="language-javascript">
                var plusOne = function (digits) {
                    let {
                        length
                    } = digits;
                    let num = length - 1;
                    while (digits[num] === 9) {
                        num--;
                    }
                    if (num < 0) {
                        digits.fill(0, 0)
                        digits.unshift(1)
                    } else {
                        digits.splice(num, 1, digits[num] + 1)
                        if (num !== length - 1) digits.fill(0, num + 1)
                    }

                    return digits
                };
                console.log(plusOne([9, 9]));
                function plusOne1(digits) {
                    var ans = [],// 临时存储数组
                        add = 0, // 进位数，如果为0则不进位
                        len = digits.length;
                    // 数组的最后一位加一
                    digits[len -1]++;
                    for(var i = len - 1; i >= 0; i--) {
                        // 取当前的数组的值与进位进行相加
                        var sum = digits[i] + add
                        // 取当前值与10的余数作为新数组当前位数的值
                        ans[i] = sum % 10
                        // 计算进位取整
                        add = ~~(sum/10)
                    }
                    // 如果循环结束仍然存在进位数则在数组前面添加一个1
                    if(add)
                        ans.unshift(1)
                    return ans
                }
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
