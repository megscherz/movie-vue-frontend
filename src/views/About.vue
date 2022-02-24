<template>
  <div class="about">
    <h1>About the Movie App</h1>
    <h2>Want to stay up to date on all the movie news?!</h2>
    <h3>Subscribe to our Newsletter</h3>
    <form method="GET" action="/movies">
      <form>
        <label for="choice">Choose your frequency:</label>
        <br />
        <input type="radio" id="choice" name="choice" value="monthly" />
        <label for="choice">Monthly</label>
        <br />
        <input type="radio" id="choice" name="choice" value="weekly" />
        <label for="weekly">Weekly</label>
        <br />
        <input type="radio" id="choice" name="choice" value="daily" />
        <label for="daily">Daily</label>
        <br />
        <br />
        <label for="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" />
        <br />
        <label for="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" />
        <br />
        <input type="submit" />
      </form>
    </form>
  </div>
</template>
