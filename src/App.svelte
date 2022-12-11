<script lang="ts">
  import Router from 'svelte-spa-router';
  import routes from './routes/index';

	const routeLoading = (event) => {
		debugger
	}
</script>

<main>
  <Router {routes} on:routeLoading={routeLoading}/>
</main>