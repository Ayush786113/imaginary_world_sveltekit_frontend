<script>
	import Wrapper from "../components/WrapperStory.svelte"
	import CardConnection from "../components/CardConnection.svelte";
	const title = "Imaginary World"
	export let data;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="container-fluid">
	<Wrapper heading="Stories" route="story" entries={data.stories.reverse()}/>
	<hr>
	<CardConnection connections={data.connections.reverse()}/>
</main>