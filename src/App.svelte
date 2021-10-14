<script>
  import { Router } from 'svelte-router-spa'
  import { routes } from './routes'
  import './styles/globals.css'	

  // // animate on scroll
  // import AOS from 'aos';
  // import 'aos/dist/aos.css'; // You can also use <link> for styles
  // AOS.init();
</script>

<Router {routes} />