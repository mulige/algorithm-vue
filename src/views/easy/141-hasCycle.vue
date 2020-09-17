<template>
  <div>
    <h3 class="questionName">141-环形链表</h3>
    <p class="questionDesc">
      给定一个链表，判断链表中是否有环。
      如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
      如果链表中存在环，则返回 true 。 否则，返回 false 。
    </p>
    <div class="democode">
      <p>示例1：</p>
      <img
        style="height: 97px; width: 300px;"
        src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png"
        alt
      />
      <pre><strong>输入：</strong>head = [3,2,0,-4], pos = 1
<strong>输出：</strong>true
<strong>解释：</strong>链表中有一个环，其尾部连接到第二个节点。
</pre>
      <p>示例2：</p>
      <img
        style="height: 74px; width: 141px;"
        src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png"
        alt
      />
      <pre><strong>输入：</strong>head = [1,2], pos = 0
<strong>输出：</strong>true
<strong>解释：</strong>链表中有一个环，其尾部连接到第一个节点。
</pre>
      <p>示例3：</p>
      <img
        style="height: 45px; width: 45px;"
        src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png"
        alt
      />
      <pre><strong>输入：</strong>head = [1], pos = -1
<strong>输出：</strong>false
<strong>解释：</strong>链表中没有环。
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
                * Definition for singly-linked list.
                * function ListNode(val) {
                *     this.val = val;
                *     this.next = null;
                * }
                */

                /**
                * @param {ListNode} head
                * @return {boolean}
                */
                var hasCycle = function(head) {
                while(head) {
                    // 添加标识作为是否重复循环的条件
                    if(head.flag) return true
                    head.flag = true
                    head = head.next
                }
                return false
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
