import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }
  ]
})
