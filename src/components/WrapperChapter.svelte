<script>
    import Card from "./CardChapter.svelte"
    export let entries
    export let heading
</script>

<section class="container-fluid">
    <strong><b>{heading}</b></strong>
    <hr>
    <div>
    {#each entries as entry}
        <section>
            <Card entry={entry}/>
        </section>
        <!-- <hr> -->
    {/each}
    </div>
</section>

<style>
    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        gap: 1rem;
    }
</style>