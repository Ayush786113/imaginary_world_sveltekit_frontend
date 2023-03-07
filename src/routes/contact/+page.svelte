<form class="container">
    <h1>Connect with Polestar</h1>
    <label for="firstname">
      Full Name
      <input bind:this={name} type="text" id="firstname" name="firstname" placeholder="Ayush Ghosal" required>
    </label>
    <label for="email">Email Address</label>
    <input bind:this={email} type="email" id="email" name="email" placeholder="ayush786113@gmail.com" required>
    <small>We'll never share your email with anyone else. By the way, that's mine.</small>
    <label for="message">Message</label>
    <input bind:this={message} maxlength="500" id="message" name="message" placeholder="Reviews, Suggestions, Criticism, etc." required>
    <small>Max: 500 characters. This will appear at the 'Home' page.</small>
    <label for="public">Check to mark it as a private note to Polestar.</label>
    <input bind:checked={_public} type="checkbox" id="public" name="public"/>
    <input on:click={submitbtn} type="button" class="contrast outline" value="Submit">
</form>

<script>
  let name, email, message, _public;
  async function submitbtn(){
    let accepted = (name.value.length != 0 && email.value.length != 0 && message.value.length != 0)
    if(accepted){
      let connection = {
        name: name.value,
        email: email.value,
        message: [message.value],
        public: !_public
      }
      let data = await fetch('https://api.insiderserver.tk/connection', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(connection)
      })
      name.value = email.value = message.value = ""
      _public = false
      alert('Message recorded. Thank you!')
      return
    }
    alert("Please fill all the fields before submitting!")
  }
</script>