<script>
    import Card from "../../../components/CardStory.svelte";
    import Wrapper from "../../../components/WrapperChapter.svelte";
    export let data
    const story = data.story
    const chapters = data.chapters
</script>

<svelte:head>
    <title>{data.story.title}</title>
</svelte:head>

<Card entry={story}/>

<Wrapper heading="Chapters" entries={chapters}/>

