<script>
  export let entry;
</script>


<article>
  <a href="/story/{entry.$id}">
    <picture><img src="{entry.thumbnail}" alt="{entry.title}"></picture>
  </a>
  <footer>
    <hgroup>
      <h2>{entry.title}</h2>
      <h3><cite> <b>- {entry.author}</b> </cite></h3>
    </hgroup>
    <br>
  </footer>
</article>

<style>
  article{
    width: fit-content;
  }
  img{
    height: 300px;
    width: 300px;
  }
</style>