<script>
    export let connections;
</script>

<section class="container">
    {#each connections as connection}
    <article>
        <header>
            <hgroup>
                <h3>{connection.name}</h3>
                <!-- <h3><cite>- <b>{connection.email}</b></cite></h3> -->
            </hgroup>
        </header>
        {connection.message}
    </article>
{/each}
</section>

<style>
    section{
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
</style>