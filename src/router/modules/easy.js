
import Layout from '@/views/Layout'
export default [
  {
    path: '/easy',
    component: Layout,
    redirect: '/easy/twoSum',
    meta: {
      title: '简单算法',
      parentPath: '/'
    },
    children: [
      {
        path: 'twoSum',
        component: () => import(/* webpackChunkName: "1-twoSum" */ '@/views/easy/1-twoSum.vue'),
        meta: {
          title: '1-两数之和',
          parentPath: '/easy'
        }
      },
      {
        path: 'reverseNum',
        component: () => import(/* webpackChunkName: "7-reverNum" */ '@/views/easy/7-reverNum.vue'),
        meta: {
          title: '7-反转数字',
          parentPath: '/easy'
        }
      },
      {
        path: 'isPalindrome',
        component: () => import(/* webpackChunkName: "9-isPalindrome" */ '@/views/easy/9-isPalindrome.vue'),
        meta: {
          title: '9-回文数',
          parentPath: '/easy'
        }
      },
      {
        path: 'romanToInt',
        component: () => import(/* webpackChunkName: "13-romanToInt" */ '@/views/easy/13-romanToInt.vue'),
        meta: {
          title: '13-罗马转数字',
          parentPath: '/easy'
        }
      },
      {
        path: 'longestCommonPrefix',
        component: () => import(/* webpackChunkName: "14-longestCommonPrefix" */ '@/views/easy/14-longestCommonPrefix.vue'),
        meta: {
          title: '14-最长公共前缀',
          parentPath: '/easy'
        }
      },
      {
        path: 'isValid',
        component: () => import(/* webpackChunkName: "20-isValid" */ '@/views/easy/20-isValid.vue'),
        meta: {
          title: '20-有效括号',
          parentPath: '/easy'
        }
      },
      {
        path: 'mergeTwoLists',
        component: () => import(/* webpackChunkName: "21-mergeTwoLists" */ '@/views/easy/21-mergeTwoLists.vue'),
        meta: {
          title: '21-合并两个有序链表',
          parentPath: '/easy'
        }
      },
      {
        path: 'removeDuplicates',
        component: () => import(/* webpackChunkName: "26-removeDuplicates" */ '@/views/easy/26-removeDuplicates.vue'),
        meta: {
          title: '26-删除排序数组中的重复项',
          parentPath: '/easy'
        }
      },
      {
        path: 'removeElement',
        component: () => import(/* webpackChunkName: "27-removeElement" */ '@/views/easy/27-removeElement.vue'),
        meta: {
          title: '27-移除元素',
          parentPath: '/easy'
        }
      },
      {
        path: 'strStr',
        component: () => import(/* webpackChunkName: "28-strStr" */ '@/views/easy/28-strStr.vue'),
        meta: {
          title: '28-strStr',
          parentPath: '/easy'
        }
      },
      {
        path: 'searchInsert',
        component: () => import(/* webpackChunkName: "35-searchInsert" */ '@/views/easy/35-searchInsert.vue'),
        meta: {
          title: '35-搜寻插入位置',
          parentPath: '/easy'
        }
      },
      {
        path: 'countAndSay',
        component: () => import(/* webpackChunkName: "38-countAndSay" */ '@/views/easy/38-countAndSay.vue'),
        meta: {
          title: '38-外观数列',
          parentPath: '/easy'
        }
      },
      {
        path: 'maxSubArr',
        component: () => import(/* webpackChunkName: "53-maxSubArr" */ '@/views/easy/53-maxSubArr.vue'),
        meta: {
          title: '53-最大子序和',
          parentPath: '/easy'
        }
      },
      {
        path: 'lengthOfLastWord',
        component: () => import(/* webpackChunkName: "58-lengthOfLastWord" */ '@/views/easy/58-lengthOfLastWord.vue'),
        meta: {
          title: '58-最后一个单词长度',
          parentPath: '/easy'
        }
      },
      {
        path: 'plusOne',
        component: () => import(/* webpackChunkName: "66-plusOne" */ '@/views/easy/66-plusOne.vue'),
        meta: {
          title: '66-加一',
          parentPath: '/easy'
        }
      },
      {
        path: 'mySqrt',
        component: () => import(/* webpackChunkName: "69-mySqrt" */ '@/views/easy/69-mySqrt.vue'),
        meta: {
          title: '69-x的平方根',
          parentPath: '/easy'
        }
      },
      {
        path: 'climbStairs',
        component: () => import(/* webpackChunkName: "70-climbStairs" */ '@/views/easy/70-climbStairs.vue'),
        meta: {
          title: '70-爬楼梯',
          parentPath: '/easy'
        }
      },
      {
        path: 'deleteDuplicates',
        component: () => import(/* webpackChunkName: "80-deleteDuplicates" */ '@/views/easy/80-deleteDuplicates.vue'),
        meta: {
          title: '80-删除排序链表的重复元素',
          parentPath: '/easy'
        }
      },
      {
        path: 'sameTree',
        component: () => import(/* webpackChunkName: "1-twoSum" */ '@/views/easy/100-sameTree.vue'),
        meta: {
          title: '100-相同的树',
          parentPath: '/easy'
        }
      },
      {
        path: 'isSymmetric',
        component: () => import(/* webpackChunkName: "1-twoSum" */ '@/views/easy/101-isSymmetric.vue'),
        meta: {
          title: '101-对称二叉树',
          parentPath: '/easy'
        }
      },
      {
        path: 'maxDepth',
        component: () => import(/* webpackChunkName: "1-twoSum" */ '@/views/easy/104-maxDepth.vue'),
        meta: {
          title: '104-二叉树最大深度',
          parentPath: '/easy'
        }
      },
      {
        path: 'levelOrderBottom',
        component: () => import(/* webpackChunkName: "1-twoSum" */ '@/views/easy/107-levelOrderBottom.vue'),
        meta: {
          title: '107-二叉树的层次遍历',
          parentPath: '/easy'
        }
      },
      {
        path: 'singleNumber',
        component: () => import(/* webpackChunkName: "136-singleNumber" */ '@/views/easy/136-singleNumber.vue'),
        meta: {
          title: '136-只出现一次的数字',
          parentPath: '/easy'
        }
      },
    ]
  }

]
