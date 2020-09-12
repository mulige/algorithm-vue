<template>
<div>
    <h3 class='questionName'>26.删除排序数组中的重复项</h3>
    <p class='questionDesc'>
        给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。<br>

    不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。<br>
    </p>
    <div class='democode'>
        <p>示例1：</p>
        <pre>给定数组 <em>nums</em> = <strong>[1,1,2]</strong>,

函数应该返回新的长度 <strong>2</strong>, 并且原数组 <em>nums </em>的前两个元素被修改为 <strong><code>1</code></strong>, <strong><code>2</code></strong>。

你不需要考虑数组中超出新长度后面的元素。</pre>
        <p>示例2：</p>
        <pre>给定<em> nums </em>= <strong>[0,0,1,1,1,2,2,3,3,4]</strong>,

函数应该返回新的长度 <strong>5</strong>, 并且原数组 <em>nums </em>的前五个元素被修改为 <strong><code>0</code></strong>, <strong><code>1</code></strong>, <strong><code>2</code></strong>, <strong><code>3</code></strong>, <strong><code>4</code></strong>。

你不需要考虑数组中超出新长度后面的元素。
</pre>
    </div>
    <h4 class='answerTitle'>题目解析：
     <span class='actionButton' v-text='textInfo' @click='$store.commit(`changeShowStatus`)'></span>
   </h4>
    <div class='codeContainer' v-highlight v-if='showResult'>
        <pre>
            <code class='language-javascript'>
                 function removeDuplicates(nums) {
                    let num = 0;
                    for (let i = 0, len = nums.length; i < len; i++) {
                        if (i === nums.length - 1)
                            num++
                        if (nums[i] === nums[i + 1]) {
                            nums.splice(i, 1);
                        } else {
                            num++
                        }
                    }
                    return num
                }
                console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
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
    return {
    }
  },
  computed: {
    ...mapState(['showResult', 'textInfo'])
  },
  watch: {
  },
  methods: {}
}
</script>

<style scoped lang='scss'>

</style>
