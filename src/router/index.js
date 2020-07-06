import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'
import Detaols from '@/components/details'
import Product from '../components/product/index.vue'
import Display from '../components/display/index.vue'
import About from '../components/about/index.vue'
import Business from '../components/business/index.vue'
import Contact from '../components/contact/index.vue'
import Project from '../components/project/index.vue'
import Login from '../components/login/index.vue'
import Register from '../components/register/index.vue'
import Map from '../components/assembly/map.vue'
import Forum from '../components/forum/index.vue'
import Fdetails from '../components/forum/Fdetails.vue'
import My from '../components/my/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/detaols',
      name: 'Detaols',
      component: Detaols
    }, {
  	path: '/product',
  	name: 'Product',
  	component: Product
  }, {
	 path: '/display',
	 name: 'Display',
	 component: Display 
  }, {
	 path: '/about',
	 name: 'About',
	 component: About 
  }, {
	 path: '/business',
	 name: 'Business',
	 component: Business 
  }, {
	 path: '/contact',
	 name: 'Contact',
	 component: Contact 
  }, {
	 path: '/project',
	 name: 'Project',
	 component: Project 
  }, {
	 path: '/login',
	 name: 'Login',
	 component: Login 
  }, {
	 path: '/register',
	 name: 'Register',
	 component: Register 
  }, {
	 path: '/map',
	 name: 'Map',
	 component: Map 
  }, {
	 path: '/forum',
	 name: 'Forum',
	 component: Forum 
  }, {
	 path: '/fdetails',
	 name: 'Fdetails',
	 component: Fdetails 
  }, {
	 path: '/my',
	 name: 'My',
	 component: My 
  }]
})
