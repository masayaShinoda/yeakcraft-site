import Home from './views/Home.svelte'
import Rules from './views/Rules.svelte'
import NotFound from './views/404.svelte'

const routes = [
    {
      name: '/',
      component: Home,
    },
    {
      name: 'rules',
      component: Rules,
    },
    {
      name: '404',
      component: NotFound,
    }
    
  ]
  
  export { routes }