<template>
<div>
    <h3 class='questionName'>28.实现strStr函数</h3>
    <p class='questionDesc'>
        实现 strStr() 函数。<br>

    给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回 -1。
    </p>
    <div class='democode'>
        <p>示例1：</p>
        <pre><strong>输入:</strong> haystack = "hello", needle = "ll"
<strong>输出:</strong> 2
</pre>
        <p>示例2：</p>
        <pre><strong>输入:</strong> haystack = "aaaaa", needle = "bba"
<strong>输出:</strong> -1
</pre>
    </div>
    <h4 class='answerTitle'>题目解析：
     <span class='actionButton' v-text='textInfo' @click='$store.commit(`changeShowStatus`)'></span>
   </h4>
    <div class='codeContainer' v-highlight v-if='showResult'>
        <pre>
            <code class='language-javascript'>
                 /**
                * @param {string} haystack
                * @param {string} needle
                * @return {number}
                */
                var strStr = function (haystack, needle) {
                    return haystack.indexOf(needle)
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
