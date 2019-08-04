import Vue from 'vue'
import Router from 'vue-router'
import ListCv from '@/components/ListCv'
import myProfile from '@/components/my-profile/my-profile'
import infomation from '@/components/my-profile/infomation/infomation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListCv',
      component: ListCv
    },
    {
      path: '/my-profile',
      name: 'my-profile',
      component: myProfile,
      children: [
        {
          path: '/infomation',
          component: {
            tabs: infomation
          }
        }
      ]
    },
  ]
})
