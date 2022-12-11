<script lang="ts">
	import { Playground } from '../components/playground';
	import { onMount } from 'svelte';

	export let name: string;

	onMount(() => {
		const playground = new Playground('#playground')
		const { draw, outer } = playground
	})
</script>

<main>
	<header>龙棋</header>
	<section id="container">
		<div class="user-panel">id1</div>
		<div id="playground"></div>
		<div class="user-panel">id2</div>
	</section>
	<footer></footer>
	<!-- <h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->
</main>

<style>
	#container {
		display: flex;
	}

	.user-panel {
		width: 200px;
	}

	#playground {
		display: flex;
		width: calc(100% - 400px);
    justify-content: center;
	}
</style>