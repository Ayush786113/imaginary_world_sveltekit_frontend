<header class="container-fluid">
    <nav>
        <ul>
          <li><a data-tooltip="Home" data-placement="bottom" href="/"><strong>Polestar</strong></a></li>
        </ul>
        <ul>
          <p class="marquee"><span>This application is running on a limited period free server. I have to either shut it down or start paying after the trial period is over. If you love my stories, consider buying me a coffee (link aside) so I can continue running this site.</span></p>
          <!-- <marquee>This application is running on a limited period free server. I have to either shut it down or start paying after the trial period is over. If you love my stories, considering buying me a coffee (link aside) so I can continue running this site.</marquee> -->
        </ul>
        <ul>
          <li><a data-tooltip="Contact" data-placement="bottom" href="/contact" ><strong>Contact</strong></a></li>
          <li><a data-tooltip="Support" data-placement="bottom" href="https://www.buymeacoffee.com/polestar"><strong>Coffee</strong></a></li>
        </ul>
      </nav>
</header>
<slot/>
<footer class="container-fluid">
    <div>
      <h4>Subscribe to my newsletter</h4>
      <form>
        <div class="grid">
          <input bind:this={name} type="text" name="name" id="name" placeholder="Name" required>
          <input bind:this={email} type="email" name="email" id="email" placeholder="Email" required>
        </div>
        <input on:click={subscribe} type="button" value="Subscribe" class="contrast outline">
      </form>
    </div>
    <nav>
        <ul>
          <li><strong>&#169 Polestar 2023</strong></li>
        </ul>
        <ul>
          <li><a href="https://instagram.com/__star___verse__"><strong>Instagram</strong></a></li>
          <li><a href="https://facebook.com/ayush.ghosal.3"><strong>Facebook</strong></a></li>
        </ul>
        <!-- <ul>
          <li><a href="https://www.buymeacoffee.com/polestar"><strong>Buy Me A Coffee</strong></a></li>
        </ul> -->
      </nav>
</footer>

<style>
  header nav ul:nth-child(2){
    width: 50%;
  }
  header strong{
    color: rgb(187, 198, 206);
  }
  footer a{
    color: rgb(187, 198, 206);
  }
  .marquee {
    width: 450px;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
}

.marquee span {
    display: inline-block;
    padding-left: 100%;
    text-indent: 0;
    animation: marquee 15s linear infinite;
}

.marquee span:hover {
    animation-play-state: paused
}

/* Make it move */
@keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}
  /* footer nav ul:nth-child(3) a{
    
  } */
</style>

<script>
  let name, email;
  async function subscribe(){
    let accept = (name.value.length != 0 && email.value.length != 0)
    if(accept){
      let subscriber = {
        "name": name.value,
        "email": email.value
      }
      let data = await fetch('https://api.insiderserver.tk/subscribe', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(subscriber)
      })
      name.value = email.value = ""
      alert('Subsription Added')
      return
    }
    alert("Please fill your name and email to continue")
  }
</script>