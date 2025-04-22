import Vue from 'vue'
import VueRouter from 'vue-router'
import ActivityLists from '@/components/ActivityLists.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ActivityLists',
    component: ActivityLists
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
