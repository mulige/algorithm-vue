<template>
  <div>
    <h3 class="questionName">107-二叉树的层次遍历</h3>
    <p class="questionDesc">给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）</p>
    <div class="democode">
      <p>例如：</p>
      <p>给定二叉树 [3,9,20,null,null,15,7],</p>
      <pre>
                 3
                / \
               9  20
              /     \
             15      7
        </pre>
      <p>返回其自底向上的层次遍历为：</p>
      <pre>
        [
            [15,7],
            [9,20],
            [3]
        ]
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
                * @param {TreeNode} root
                * @return {number[][]}
                */

                // BFS 广度优先搜索
                // 时间复杂度 O(n) 空间复杂度 O(n)
                var levelOrderBottom = function(root) {
                    if(root === null) return [];
                    let ans = [], temp = [root];
                    while(temp.length) {
                        let res = [], _temp = []
                        temp.forEach(item => {
                            res.push(item.val);
                            if(item.left) _temp.push(item.left);
                            if(item.right) _temp.push(item.right);
                        })
                        ans.push(res);
                        temp = _temp;
                    }
                    return ans.reverse();
                }
                // 测试
                var tree_node_1_1 = new TreeNode(9);
                var tree_node_1_2 = new TreeNode(20);
                tree_node_1_2.left = new TreeNode(15);
                tree_node_1_2.right = new TreeNode(7);
                var tree_node_1 = new TreeNode(3);
                tree_node_1.left = tree_node_1_1;
                tree_node_1.right = tree_node_1_2;
                console.log(levelOrderBottom(tree_node_1));
                // [
                //   [15,7],
                //   [9,20],
                //   [3]
                // ]
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
  computed: { ...mapState(["showResult", "textInfo"]) },
  watch: {},
  methods: {},
};
</script>

<style scoped lang='scss'>
</style>
