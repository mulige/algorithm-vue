<template>
  <div>
    <h3 class="questionName">136. 只出现一次的数字</h3>
    <p class="questionDesc">
      给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
      说明：
      你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
    </p>
    <div class="democode">
      <p>示例1：</p>
      <pre><strong>输入:</strong> [2,2,1]
<strong>输出:</strong> 1
</pre>
      <p>示例2：</p>
      <pre><strong>输入:</strong> [4,1,2,1,2]
<strong>输出:</strong> 4</pre>
    </div>
    <h4 class="answerTitle">
      题目解析：
      <span class="actionButton" v-text="textInfo" @click="$store.commit(`changeShowStatus`)"></span>
    </h4>
    <div class="codeContainer" v-highlight v-if="showResult">
      <pre>
            <code class="language-javascript">
                /**
                * @param {number[]} nums
                * @return {number}
                */
                var singleNumber = function(nums) {
                    let temp = 0
                    for(let i = 0, len = nums.length; i < len; i++) {
                        temp ^= nums[i]
                    }
                    return temp
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
