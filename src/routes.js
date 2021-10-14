import Home from './views/Home.svelte'
import Rules from './views/Rules.svelte'
import Guide from './views/Guide.svelte'
import NotFound from './views/404.svelte'

const routes = [
    {
      name: '/',
      component: Home,
    },
    {
      name: '/guide',
      component: Guide,
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