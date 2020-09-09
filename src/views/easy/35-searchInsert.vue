<template>
  <div>
    <h3 class="questionName">35.搜索插入位置</h3>
    <p class="questionDesc">
      给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
      <br />你可以假设数组中无重复元素。
      <br />
    </p>
    <div class="democode">
      <p>示例1：</p>
      <pre><strong>输入:</strong> [1,3,5,6], 5
<strong>输出:</strong> 2
</pre>
      <p>示例2：</p>
      <pre><strong>输入:</strong> [1,3,5,6], 2
<strong>输出:</strong> 1
</pre>
      <p>示例3：</p>
      <pre><strong>输入:</strong> [1,3,5,6], 7
<strong>输出:</strong> 4
</pre>
      <p>示例4：</p>
      <pre><strong>输入:</strong> [1,3,5,6], 0
<strong>输出:</strong> 0
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
                * @param {number[]} nums
                * @param {number} target
                * @return {number}
                */
                var searchInsert = function (nums, target) {
                    if (!nums.length) return 0;
                    let result = nums.findIndex(item => item === target);
                    if (result !== -1) return result
                    for (var i = 0, len = nums.length; i < len; i++) {
                        if (nums[i] >= target) {
                            nums.splice(i, 0, target)
                            return i
                        }
                    }
                    nums.push(target)
                    return len;
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
