
import Layout from './node_modules/@/views/Layout/index'
export default [
  {
    path: '/easy',
    component: Layout,
    children: [
      {
        path: 'twoSum',
        component: () => import(/* webpackChunkName: "1-twoSum" */ './node_modules/@/views/easy/1-twoSum.vue')
      }
    ]
  }

]
