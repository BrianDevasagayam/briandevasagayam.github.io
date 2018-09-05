<template>
  <div id="home">
    <p>{{ welcome }}</p>
    <p id="p1">{{ p1 }}</p>
    <p id="p2">{{ p2 }}</p>
    <p id="p3">{{ p3 }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      welcome: "Welcome to the Home page",
      p1:
        "Welcome to my website! I am a current computer engineering undergraduate at the university of waterloo entering my 2A semester. I made this website using Vue.js, HTML and CSS to showcase all of the experience I have gained over my career. I am currently looking for new employment opportunities for the Winter 2019 co-op term.",
      p2:
        "I currently have an affinity for full stack development but am open and looking for new opportunities in traditional software development and network security.",
      p3:
        "My other non computer related interest includes film, pool, finance and the marvel cinematic universe."
    };
  }
};
</script>

<style>
#home {
  background-color: #c09f80;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: -1;
}
</style>
