import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import JsonLoader from '@/components/data/JsonLoader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:statType',
      name: 'Content',
      component: Content
    },
    {
      path: '/jsonloader/:targetData',
      name: "JsonLoader",
      component: JsonLoader

    }
  ]
})
