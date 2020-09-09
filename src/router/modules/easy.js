
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
        component: () => import(/* webpackChunkName: "1-twoSum" */ '@/views/easy/7-reverNum.vue'),
        meta: {
          title: '7-反转数字',
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
      }
    ]
  }

]
