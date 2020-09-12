<template>
  <div>
    <h3 class="questionName">14. 最长公共前缀</h3>
    <p class="questionDesc">
      编写一个函数来查找字符串数组中的最长公共前缀。
      <br />如果不存在公共前缀，返回空字符串 ""。
      <br />
    </p>
    <div class="democode">
      <p>示例1：</p>
      <pre><strong>输入: </strong>["flower","flow","flight"]
<strong>输出:</strong> "fl"
</pre>
      <p>示例2：</p>
      <pre><strong>输入: </strong>["dog","racecar","car"]
<strong>输出:</strong> ""
<strong>解释:</strong> 输入不存在公共前缀。
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
                * @param {string[]} strs
                * @return {string}
                */
                var longestCommonPrefix = function (strs) {
                    const strsLenthArr = strs.sort((str1, str2) => str1.length - str2.length)
                    // console.log(strsLenthArr)
                    let newStr = '';
                    let firstCode = '';
                    for (let i = 0, len = strsLenthArr[0].length; i < len; i++) {
                        firstCode = strsLenthArr[0][i];
                        // console.log(firstCode)
                        let flag = true
                        for (let j = 1, len1 = strsLenthArr.length; j < len1; j++) {
                            // console.log(j, i, strsLenthArr)
                            if (strsLenthArr[j][i] !== firstCode) {
                                flag = false
                                break
                            }
                        }
                        newStr += flag ? firstCode : ''
                    }
                    console.log(newStr)
                    return newStr
                };
                longestCommonPrefix(["flower", "flow", "flight"]);
                longestCommonPrefix(["dog", "racecar", "car"]);

                // 使用reduce和every方法实现

                function longestCommonPrefixNew(strs) {
                    if (!strs.length) return;
                    let len = strs.reduce((pre, item) => {
                        return Math.min(pre, item.length)
                    }, Number.MAX_VALUE)
                    let str = ''
                    for (let i = 0; i < len; i++) {
                        let tem = strs[0][i]
                        let f = strs.every(item => {
                            return item[i] === tem
                        })
                        if (!f) break;
                        str += tem

                    }
                    console.log(str)
                    return str;
                }
                longestCommonPrefixNew(["flower", "flow", "flight"]);
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
