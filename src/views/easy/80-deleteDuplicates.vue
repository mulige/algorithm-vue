<template>
  <div>
    <h3 class="questionName">80.删除排序链表中的重复元素</h3>
    <p class="questionDesc">
      给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
      <br />
    </p>
    <div class="democode">
      <p>示例1：</p>
      <pre>给定 <em>nums</em> = <strong>[1,1,1,2,2,3]</strong>,

函数应返回新长度 length = <strong><code>5</code></strong>, 并且原数组的前五个元素被修改为 <strong><code>1, 1, 2, 2,</code></strong> <strong>3 </strong>。

你不需要考虑数组中超出新长度后面的元素。</pre>
      <p>示例2：</p>
      <pre>给定 <em>nums</em> = <strong>[0,0,1,1,1,1,2,3,3]</strong>,

函数应返回新长度 length = <strong><code>7</code></strong>, 并且原数组的前五个元素被修改为&nbsp;<strong><code>0</code></strong>, <strong>0</strong>, <strong>1</strong>, <strong>1</strong>, <strong>2</strong>, <strong>3</strong>, <strong>3 。</strong>

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
                * @param {ListNode} head
                * @return {ListNode}
                */
                var deleteDuplicates = function (head) {
                    var ans = [];
                    while (head) {
                        ans.push(new ListNode(head.val));
                        head = head.next;
                    }

                    if (!ans.length)
                        return [];
                    // 和前一个的值相等就删除本个节点，实现每个元素只出现一次
                    for (var i = ans.length; i--;) {
                        if (i && ans[i].val === ans[i - 1].val)
                            ans.splice(i, 1);
                    }

                    for (var i = 0, len = ans.length; i < len - 1; i++)
                        ans[i].next = ans[i + 1];

                    return ans[0];
                };

                // 定义一个链表结构
                function ListNode(val) {
                    this.val = val;
                    this.next = null;
                }
                // 1->2->3->3->4->4->5
                var N7 = new ListNode(5);
                var N6 = new ListNode(4);
                N6.next = N7;
                var N5 = new ListNode(4);
                N5.next = N6;
                var N4 = new ListNode(3);
                N4.next = N5;
                var N3 = new ListNode(3);
                N3.next = N4;
                var N2 = new ListNode(2);
                N2.next = N3;
                var N1 = new ListNode(1);
                N1.next = N2;

                // 测试 输出 1->2->3->4->5
                console.log(deleteDuplicates(N1));
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
