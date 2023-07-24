import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

const routes = [
  { name: 'HomePage', path: '/', component: Home },
  { name: 'AboutPage', path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
  sensitive: true,
})

export default {
  name: 'App',
  router,
}
