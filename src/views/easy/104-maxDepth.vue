<template>
  <div>
    <h3 class="questionName">104.二叉树的最大深度</h3>
    <p class="questionDesc">
      给定一个二叉树，找出其最大深度。
      二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
      说明: 叶子节点是指没有子节点的节点。
    </p>
    <div class="democode">
      <p>给定二叉树 [3,9,20,null,null,15,7]，</p>
      <pre>
    3
   / \
  9  20
    /  \
   15   7</pre>
      <p>返回它的最大深度 3 。</p>
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
                * 方法1. 广度优先遍历
                * 时间复杂度O(n)，空间复杂度O(n)
                */

                /**
                * @param {TreeNode} root
                * @return {number}
                */
                var maxDepth = function(root) {
                    if(root === null) return 0;
                    var level = 0;
                    let tempArr = [root];
                    while(tempArr.length > 0) {
                        var len = tempArr.length;
                        while(len--) {
                            // 取出当前的数据为一层，可以理解为数组每次添加进去的都是一层的数据
                            let first = tempArr.shift()
                            if(first.left) tempArr.push(first.left)
                            if(first.right) tempArr.push(first.right)
                        }
                        level++
                    }
                    return level;
                };

                /**
                * 方法2. dfs深度优先遍历
                * 时间复杂度O(n),空间复杂度O(height),height为二叉树的深度
                */

                var maxn;
                function dfs(root, depth) {
                  if(!root) {
                    maxn = Math.max(maxn, depth)
                    return
                  }
                  dfs(root.left, depth + 1)
                  dfs(root.right, depth + 1)
                }

                function maxDepth2(root) {
                  maxn = -1
                  dfs(root, 0)
                  return maxn
                }
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
