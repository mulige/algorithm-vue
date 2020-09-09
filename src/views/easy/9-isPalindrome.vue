<template>
<div>
    <h3 class='questionName'>
        9.回文数
    </h3>
    <p class='questionDesc'>
          判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数
    </p>
    <div class='democode'>
        <p>示例1：</p>
        <pre>
            <strong>输入:</strong> 121
            <strong>输出:</strong> true
        </pre>
        <p>示例2：</p>
        <pre>
            <strong>输入:</strong> -121
            <strong>输出:</strong> false
            <strong>解释:</strong> 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
        </pre>
        <p>示例3：</p>
        <pre>
            <strong>输入:</strong> 10
            <strong>输出:</strong> false
            <strong>解释:</strong> 从右向左读, 为 01 。因此它不是一个回文数。
        </pre>
    </div>
    <h4 class='answerTitle'>题目解析：
     <span class='actionButton' v-text='textInfo' @click='$store.commit(`changeShowStatus`)'></span>
   </h4>
    <div class='codeContainer' v-highlight v-if='showResult'>
        <pre>
            <code class='language-javascript'>
                function isPalindrome(num) {
                    return num.toString() === num.toString().split('').reverse().join('')
                }
                console.log(isPalindrome(121))
                console.log(isPalindrome(-121))
                console.log(isPalindrome(123))
            </code>
        </pre>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: '',
  data() {
    return {
    };
  },
  computed: { 
    ...mapState(['showResult', 'textInfo'])
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped lang='scss'>

</style>
