<script>
    export let entry;
  </script>
  
  
  <article>
    <img src="{entry.thumbnail}" alt={entry.title}>
    <footer>
      <hgroup>
        <a href="/chapter/{entry.$id}"><h2>{entry.title}</h2></a>
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
      padding: 0;
    }
  </style>