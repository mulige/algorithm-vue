<template>
  <div>
    <h3 class="questionName">20. 有效的括号</h3>
    <p class="questionDesc">
      给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
      <br />有效字符串需满足：
      <br />左括号必须用相同类型的右括号闭合。
      <br />左括号必须以正确的顺序闭合。
      <br />注意空字符串可被认为是有效字符串。
      <br />
    </p>
    <div class="democode">
      <p>示例1：</p>
      <pre><strong>输入:</strong> "()"
<strong>输出:</strong> true
</pre>
      <p>示例2：</p>
      <pre><strong>输入:</strong> "()[]{}"
<strong>输出:</strong> true
</pre>
      <p>示例3：</p>
      <pre><strong>输入:</strong> "(]"
<strong>输出:</strong> false
</pre>
      <p>示例4：</p>
      <pre><strong>输入:</strong> "([)]"
<strong>输出:</strong> false
</pre>
      <p>示例5：</p>
      <pre><strong>输入:</strong> "{[]}"
<strong>输出:</strong> true</pre>
    </div>
    <h4 class="answerTitle">
      题目解析：
      <span class="actionButton" v-text="textInfo" @click="$store.commit(`changeShowStatus`)"></span>
    </h4>
    <div class="codeContainer" v-highlight v-if="showResult">
      <pre>
            <code class="language-javascript">
                 /**
                * @param {string} s
                * @return {boolean}
                */

                // 使用堆栈
                // 时间复杂度：O(n)
                // 空间复杂度：O(n + ∣Σ∣) ;其中 ∣Σ∣ 表示字符集，本题中字符串只包含 6 种括号 ∣Σ∣=6。栈中的字符数量为 O(n)，而哈希映射使用的空间为 O(∣Σ∣)，相加即可得到总空间复杂度。
                var isValid = function (s) {
                    var sta = [],
                        target = {};
                    //匹配表
                    target['('] = ')';
                    target['['] = ']';
                    target['{'] = '}';

                    for (var i = 0, len = s.length; i < len; i++) {
                        //第一次进来或者匹配成功sta空了
                        if (!sta.length) sta.push(s[i]);
                        else {
                            //下一个字符是否和 栈顶字符的匹配字符 相同
                            // 把字符串的第一个字符，放进我们的缓存的数组（栈），然后判断下一个括号，与我们之前保存的是不是能够闭合
                            // 因为这个问题总会有两个闭合的括号是相邻的，当出现这种情况的时候，
                            // 就可以将之前缓存数组（栈）中对应的那个字符删除，然后再次进行之前的操作
                            // 相当于我们正常的字符串从左向右匹配，而我们缓存的数组（栈），从右到左匹配是否闭合
                            // 最后如果我们的缓存数组（栈）的长度不为零则说明给定字符串不是有效括号
                            if (s[i] === target[sta[sta.length - 1]])
                                //匹配的话，让字符出栈；否则压栈
                                sta.pop();
                            else
                                sta.push(s[i]);
                        }
                    }
                    //如果栈空了说明全都匹配了，返回true哦
                    return !sta.length;
                };

                //测试
                console.log(isValid("([])({})"));
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
