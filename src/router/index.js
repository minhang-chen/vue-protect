import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/login.vue'
import sfPrivate from '../views/sfPrivate/sfPrivate.vue'
import myPotient from '../views/myPotient/myPotient.vue'
import myInformation from '../views/myInformation/myInformation.vue'
import sfTable from '../views/sfTable/sfTable.vue'
import sfTable2 from '../views/sfTable/sfTable2.vue'
import sfTable3 from '../views/sfTable/sfTable3.vue'

Vue.use(Router)
const routes = [
	{
		path: '/login',
		component: Login
	},
  {
    path: '/',
    component: myPotient
  },
	{
		path: '/sfPrivate',
		component: sfPrivate
	},

	{
		path: '/myInformation',
		component: myInformation
	},
	{
		path: '/sfTable',
		component: sfTable
	},
	{
		path: '/sfTable2',
		component: sfTable2
	},
  {
    path: '/sfTable3',
    component: sfTable3
  }
]

const router = new Router({
	mode: 'history',
	routes
})

export default router
