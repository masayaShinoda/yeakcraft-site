<script>
	import Nav from './components/Nav.svelte'
	import Hero from './components/Hero.svelte'
	import './styles/globals.css'

	export let name;
</script>

<Nav></Nav>
<main>
	<Hero />
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
