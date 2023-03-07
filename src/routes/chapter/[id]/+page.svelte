<script>
    export let data;
    let chapter = data.chapter
</script>

<svelte:head>
    <title>{chapter.title}</title>
</svelte:head>

<section class="container-fluid">
    <header>
        <hgroup>
            <h2>{chapter.title}</h2>
            <h3><cite> <b>- {chapter.author}</b> </cite></h3>
          </hgroup>
    </header>
    <blockquote>
        {chapter.content}
    </blockquote>
</section>