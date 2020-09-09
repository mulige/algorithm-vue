<template>
  <div>
    <h3 class="questionName">53.最大子序和</h3>
    <p class="questionDesc">给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。</p>
    <div class="democode">
      <p>示例：</p>
      <pre><strong>输入:</strong> [-2,1,-3,4,-1,2,1,-5,4]
<strong>输出:</strong> 6
<strong>解释:</strong>&nbsp;连续子数组&nbsp;[4,-1,2,1] 的和最大，为&nbsp;6。
</pre>
    </div>
    <h4 class="answerTitle">
      题目解析：
      <span class="actionButton" v-text="textInfo" @click="$store.commit(`changeShowStatus`)"></span>
    </h4>
    <div class="codeContainer" v-highlight v-if="showResult">
      <pre>
            <code class="language-javascript">
                // 贪心算法
                function maxSubArr1 (nums) {
                    let maxn = - Number.MAX_VALUE;
                    let sum = 0
                    nums.forEach(num => {
                        // 连续的值相加
                        sum += num
                        // 更新最大值
                        if(sum > maxn) maxn = sum
                        // 只要连续的和小于零，就置零从头加 ，这里的原因是因为这里的连续的几个值的和小于零
                        // 所以此时的这个几个数的值一定不是当前的和的最大值，因为加上这几个数一定会在之前的基础上进行
                        // 减少，所以在进行添加的时候不会进行这几个数的运算
                        if(sum < 0) sum = 0
                    });
                    return maxn
                }
                // 动态规划
                function maxSubArr(nums) {
                    let pre = 0
                    maxAns = nums[0]
                    nums.forEach(num => {
                        pre = Math.max(pre + x, x);
                        maxAns = Math.max(maxAns, pre)
                    })
                    return maxAns
                }
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
