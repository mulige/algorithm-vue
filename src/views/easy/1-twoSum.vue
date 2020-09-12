<template>
  <div>
    <h3 class="questionName">1. 两数之和</h3>
    <p class="questionDesc">
      给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
      你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
    </p>
    <div class="democode">
      <pre>
        给定 nums = [2, 7, 11, 15], target = 9

        因为 nums[<strong>0</strong>] + nums[<strong>1</strong>] = 2 + 7 = 9

        所以返回 [<strong>0, 1</strong>]
      </pre>
    </div>

    <h4>
      题目解析：
      <span class="actionButton" v-text="textInfo" @click="$store.commit('changeShowStatus')"></span>
    </h4>
    <div class="codeContainer" v-highlight v-if="showResult">
      <pre>
        <code class="language-javascript">
        // 首先我们使用常规的解决的方案，通过数组两次遍历的方式进行数据的比对

        /**
         * 通过两次数组遍历的方式，取和然后获取对应的下标
         * 时间复杂度： O(n^2), 空间复杂度O(1)
         */
        const nums = [2, 7, 11, 15],
            target = 9;

        function twoSum(nums, target) {
            for (let i = 0, len = nums.length; i < len; i++) {
                if (nums[i] > target) continue
                for (let j = i + 1; j < len; j++) {
                    if (nums[j] > target) continue
                    if (nums[i] + nums[j] === target) return [i, j]
                }
            }
        }
        console.log(twoSum(nums, target))

        // 更优解

        function twoSums(arr, target) {
            const a = [];
            for (let i = 0, len = arr.length; i < len; i++) {
                let temp = target - arr[i]
                if (a[temp] !== undefined) return [a[temp], i]
                a[arr[i]] = i
            }
        }
        console.log(twoSums(nums, target))
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

<style scoped>
</style>
