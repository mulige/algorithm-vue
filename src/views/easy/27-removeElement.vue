<template>
  <div>
    <h3 class="questionName">27. 移除元素</h3>
    <p class="questionDesc">
      给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
      <br />不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
      <br />元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
      <br />
    </p>
    <div class="democode">
      <p>示例1：</p>
      <pre>给定 <em>nums</em> = <strong>[3,2,2,3]</strong>, <em>val</em> = <strong>3</strong>,

函数应该返回新的长度 <strong>2</strong>, 并且 <em>nums </em>中的前两个元素均为 <strong>2</strong>。

你不需要考虑数组中超出新长度后面的元素。
</pre>
      <p>示例2：</p>
      <pre>给定 <em>nums</em> = <strong>[0,1,2,2,3,0,4,2]</strong>, <em>val</em> = <strong>2</strong>,

函数应该返回新的长度 <strong><code>5</code></strong>, 并且 <em>nums </em>中的前五个元素为 <strong><code>0</code></strong>, <strong><code>1</code></strong>, <strong><code>3</code></strong>, <strong><code>0</code></strong>, <strong>4</strong>。

注意这五个元素可为任意顺序。

你不需要考虑数组中超出新长度后面的元素。
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
                * @param {number} val
                * @return {number}
                */
                var removeElement = function (nums, val) {
                    if (!nums.length) return 0
                    for (var i = 0, len = nums.length; i < len; i++) {
                        if (nums[i] === val) {
                            nums.splice(i, 1)
                            i--
                        }
                    }
                    return nums.length
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
