<template>
  <div>
    <h3 class="questionName">101. 对称二叉树</h3>
    <p class="questionDesc">给定一个二叉树，检查它是否是镜像对称的。</p>
    <div class="democode">
      <p>例如，二叉树 [1,2,2,3,4,4,3] 是对称的。</p>
      <pre>    1
   / \
  2   2
 / \ / \
3  4 4  3
</pre>
      <p>但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:</p>
      <pre>    1
   / \
  2   2
   \   \
   3    3
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
              * @return {boolean}
              */
              var isSymmetric = function(root) {
                if (!root)
                  return true;
                // left[n] 代表二叉树左子树从左到右的 value 数组
                var left = [];
                // right[n] 代表二叉树右子树从左到右的 value 数组
                var right = [];
                dfs(root.left, 1, left);
                dfs(root.right, 1, right);
                if (left.length !== right.length)
                  return false;
                // 遍历左右两边，右边反向一下对比
                for (var i = 1, len = left.length; i < len; i++) {
                  var a = left[i];
                  var b = right[i];
                  b.reverse();
                  if (a.length !== b.length)
                    return false;
                  if (a.join('|') !== b.join('|'))
                    return false;
                }
                return true;
              };

              function dfs(node, step, arr) {
                if (!arr[step])
                  arr[step] = [];
                if (!node) {
                  arr[step].push(null);
                  return;
                }
                arr[step].push(node.val);
                dfs(node.left, step + 1, arr);
                dfs(node.right, step + 1, arr);
              }

              // 测试
              var tree_node_1_1 = new TreeNode(2);
              tree_node_1_1.left = new TreeNode(3);
              tree_node_1_1.right = new TreeNode(4);
              var tree_node_1_2 = new TreeNode(2);
              tree_node_1_2.left = new TreeNode(4);
              tree_node_1_2.right = new TreeNode(3);
              var tree_node_1 = new TreeNode(1);
              tree_node_1.left = tree_node_1_1;
              tree_node_1.right = tree_node_1_2;
              console.log(isSymmetric(tree_node_1)); //true

              var tree_node_2_1 = new TreeNode(2);
              tree_node_2_1.right = new TreeNode(3);
              var tree_node_2_2 = new TreeNode(2);
              tree_node_2_2.right = new TreeNode(3);
              var tree_node_2 = new TreeNode(1);
              tree_node_2.left = tree_node_2_1;
              tree_node_2.right = tree_node_2_2;
              console.log(isSymmetric(tree_node_2)); //false
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
