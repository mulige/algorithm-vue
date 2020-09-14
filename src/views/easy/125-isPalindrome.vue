<template>
<div>
    <h3 class='questionName'>
        125-验证回文串
    </h3>
    <p class='questionDesc'>
        给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。
    </p>
    <div class='democode'>
        <p>示例1： </p>
        <pre><strong>输入:</strong> "A man, a plan, a canal: Panama"
<strong>输出:</strong> true
</pre>
<p>示例2：</p>
    <pre><strong>输入:</strong> "race a car"
<strong>输出:</strong> false
</pre>
    </div>
    <h4 class='answerTitle'>题目解析：
     <span class='actionButton' v-text='textInfo' @click='$store.commit(`changeShowStatus`)'></span>
   </h4>
    <div class='codeContainer' v-highlight v-if='showResult'>
        <pre>
            <code class='language-javascript'>
                /**
                * @param {string} s
                * @return {boolean}
                */
                // 方法1： 数组API，使用额外的空间
                var isPalindrome = function(s) {
                    s = s.replace(/\W|_/g, '')
                    s = s.toLowerCase()
                    const _s = s.split('').reverse().join('')
                    return s === _s
                };
                // 方法2： 双指针，空间复杂度O(1)
                var isPalindrome1 = function(s) {
                    s = s.replace(/\W|_/g, '').toLowerCase()
                    let right = s.length - 1
                    let left = 0
                    while(left < right) {
                        if(s[left] !== s[right]) {
                            return false
                        }
                        left++
                        right--
                    }
                    return true
                }
                // 拼接
                var s1 =  "A man, a plan, a canal: Panama";
                console.log(isPalindrome1(s1));
                console.log(isPalindrome(s1));
                var s2 =  "race a car";
                console.log(isPalindrome1(s2));
                console.log(isPalindrome(s2));
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
