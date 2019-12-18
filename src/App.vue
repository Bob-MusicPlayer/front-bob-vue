<template>
  <div id="app">
    <Player />
  </div>
</template>

<script>
import Player from "@/components/Player";

export default {
  name: 'app',
  components: {
    Player
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:100,300,400,500,700,900&display=swap');

body, html {
  margin: 0;
  height: 100%;
  font-family: 'Raleway', sans-serif;
}

#app {
  width: 100%;
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
