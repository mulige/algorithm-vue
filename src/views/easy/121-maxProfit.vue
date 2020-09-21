<template>
<div>
    <h3 class='questionName'>
        121-买卖股票的最佳时机
    </h3>
    <p class='questionDesc'>
        给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

注意：你不能在买入股票前卖出股票。

    </p>
    <div class='democode'>
        <p>示例1：</p>
        <pre><strong>输入:</strong> [7,1,5,3,6,4]
<strong>输出:</strong> 5
<strong>解释: </strong>在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
</pre>
        <p>示例2：</p>
        <pre><strong>输入:</strong> [7,6,4,3,1]
<strong>输出:</strong> 0
<strong>解释: </strong>在这种情况下, 没有交易完成, 所以最大利润为 0。
</pre>
    </div>
    <h4 class='answerTitle'>题目解析：
     <span class='actionButton' v-text='textInfo' @click='$store.commit(`changeShowStatus`)'></span>
   </h4>
    <div class='codeContainer' v-highlight v-if='showResult'>
        <pre>
            <code class='language-javascript'>
                /**
                * @param {number[]} prices
                * @return {number}
                */
                /**
                * 时间复杂度： O(N^2)
                */
                var maxProfit = function(prices) {
                    let tempNum = 0;
                    if(prices.length < 2) return 0
                    for(let i = 0, len = prices.length; i < len; i++) {
                        for(let j = i + 1; j < len; j++) {
                        tempNum =  Math.max((prices[j] - prices[i]), tempNum)
                        }
                    }
                    return tempNum
                };
                /**
                * 时间复杂度： O(n)
                */ 
                 var maxProfit = function(prices) {
                     var ans = 0;
                     var minn = Number.MAX_VALUE
                     for(var i = 0, len = prices.length; i < len; i++) {
                         // 这里实际上取得是这个数组中的数据的最小的值
                         minn = Math.min(minn, prices[i])
                         // 取数组中最大值与最小值的差，因为ans和minn都是存在默认的值，所以在这里不需要二次循环，这样是这个方法的时间复杂度变为O(n)
                         ans = Math.max(ans, prices[i] - minn)
                     }
                     return ans
                 }
            </code>
        </pre>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: '',
  data() {
    return {
    };
  },
  computed: { 
    ...mapState(['showResult', 'textInfo'])
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped lang='scss'>

</style>
