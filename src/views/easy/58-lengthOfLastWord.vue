<template>
  <div>
    <h3 class="questionName">58.最后一个单词的长度</h3>
    <p class="questionDesc">
      给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。
      <br />如果不存在最后一个单词，请返回 0 。
      <br />说明：一个单词是指仅由字母组成、不包含任何空格字符的 最大子字符串。
      <br />
    </p>
    <div class="democode">
      <p>示例：</p>
      <pre><strong>输入:</strong> "Hello World"
<strong>输出:</strong> 5
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
                * @param {string} s
                * @return {number}
                */
                var lengthOfLastWord = function (s) {
                    const arr = s.split(' ');
                    let length = arr.length;
                    if (length === 0) return 0
                    while (1) {

                        if (!arr[length - 1].length) {
                            if (length === 1) {
                                return 0
                            } else {
                                length--
                            }
                        } else
                            return arr[length - 1].length
                    }
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
