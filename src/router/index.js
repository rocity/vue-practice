import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/landing/Landing'
import Header from '@/components/common/header/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      components: {
        main: Landing,
        header: Header
      }
    }
  ]
})
