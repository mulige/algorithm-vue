<template>
  <div>
    <h3 class="questionName">21. 合并连个有序链表</h3>
    <p class="questionDesc">将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。</p>
    <div class="democode">
      <p>示例：</p>
      <pre><strong>输入：</strong>1-&gt;2-&gt;4, 1-&gt;3-&gt;4
<strong>输出：</strong>1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4
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
                * function ListNode(val, next) {
                *     this.val = (val===undefined ? 0 : val)
                *     this.next = (next===undefined ? null : next)
                * }
                */
                /**
                * @param {ListNode} l1
                * @param {ListNode} l2
                * @return {ListNode}
                */
                var mergeTwoLists = function (l1, l2) {
                    let temp = []
                    while (l1) {
                        temp.push(new ListNode(l1.val))
                        l1 = l1.next
                    }
                    while (l2) {
                        temp.push(new ListNode(l2.val))
                        l2 = l2.next
                    }
                    temp.sort((fir, sec) => {
                        return fir.val - sec.val
                    })
                    if (!temp.length) return null
                    for (let i = 0, len = temp.length; i < len; i++) {
                        temp[i].next = temp[i + 1]
                    }
                    return temp[0]
                };

                function ListNode(val, next) {
                    this.val = (val === undefined ? 0 : val)
                    this.next = (next === undefined ? null : next)
                }
                let N3 = new ListNode(3);
                let N2 = new ListNode(2);
                N2.next = N3;
                let N1 = new ListNode(1);
                N1.next = N2;

                let N6 = new ListNode(4);
                let N5 = new ListNode(3);
                N5.next = N6;
                let N4 = new ListNode(1);
                N4.next = N5;

                console.log(mergeTwoLists(N1, N4))
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
