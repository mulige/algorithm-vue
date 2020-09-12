<template>
  <div>
    <h3 class="questionName">100. 相同的树</h3>
    <p class="questionDesc">
      给定两个二叉树，编写一个函数来检验它们是否相同。
      如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
    </p>
    <div class="democode">
      <h4>示例 1：</h4>

      <pre><strong>输入: </strong>      1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

<strong>输出:</strong> true</pre>
      <h4>示例 2：</h4>

      <pre><strong>输入:  </strong>    1          1
          /           \
         2             2

        [1,2],     [1,null,2]

<strong>输出:</strong> false
</pre>
      <h4>示例 3：</h4>

      <pre><strong>输入:</strong>       1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

<strong>输出:</strong> false
</pre>
    </div>
    <h4 class="answerTitle">
      题目解析：
      <span class="actionButton" v-text="textInfo" @click="$store.commit('changeShowStatus')"></span>
    </h4>
    <div class="codeContainer" v-highlight v-if="showResult">
      <pre>
            <code class="language-javascript">
               // Definition for a binary tree node.
              function TreeNode(val) {
                this.val = val;
                this.left = this.right = null;
              }

              /**
              * 解法一： 使用递归
              * 思路，对树的每一层进行递归比较
              */
              function isSameTree(p, q) {
                if(p == null && q == null) return true;
                if(p == null || q == null) return false;
                return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
              }
              /**
              * 解法二： dfs迭代
              */
              function isSameTree2(p, q) {
                var  tempArr = [{
                  p,
                  q
                }]
                while(tempArr.length) {
                  var cur = tempArr.shift()
                  if(cur.p == null && cur.q == null) continue;
                  if(cur.p == null || cur.q == null) return false;
                  if(cur.p.val !== cur.q.val) return false;
                  tempArr.push({
                    p: cur.p.left,
                    q: cur.q.left
                  },
                  {
                    p: cur.p.right,
                    q: cur.q.right
                  })
                }
              }

               // 测试
              var tree_node_1 = new TreeNode(1);
              tree_node_1.left = 2;
              var tree_node_2 = new TreeNode(1);
              tree_node_2.right = 2;
              console.log(isSameTree1(tree_node_1, tree_node_2));
              console.log(isSameTree2(tree_node_1, tree_node_2));
              console.log(isSameTree3(tree_node_1, tree_node_2));

              var tree_node_3 = new TreeNode(1);
              tree_node_3.left = 2;
              tree_node_3.rigtht = 1;
              var tree_node_4 = new TreeNode(1);
              tree_node_4.left = 1;
              tree_node_4.right = 2;
              console.log(isSameTree1(tree_node_3, tree_node_4));
              console.log(isSameTree2(tree_node_3, tree_node_4));
              console.log(isSameTree3(tree_node_3, tree_node_4));

              var tree_node_5 = new TreeNode(1);
              tree_node_5.left = 1;
              tree_node_5.right = 2;
              console.log(isSameTree1(tree_node_5, tree_node_5));
              console.log(isSameTree2(tree_node_5, tree_node_5));
              console.log(isSameTree3(tree_node_5, tree_node_5));
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
  computed: { ...mapState(['showResult', 'textInfo']) },
  watch: {},
  methods: {}
}
</script>

<style scoped lang='scss'>
</style>
