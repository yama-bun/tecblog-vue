import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FormA from '@/components/FormA'
import FormB from '@/components/FormB'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/FormA',
      name: 'FormA',
      component: FormA
    },
    {
      path: '/FormB/msg',
      name: 'FormB',
      component: FormB,
      props: true
    }
  ]
})