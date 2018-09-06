<template>
  <div id="resume">
    <img class="wip" src="data:image/png;base64,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">
    <a class="icons8" href="https://icons8.com">Icon pack by Icons8</a>  
    <p id="body" class="ft_body">{{ WIP }}</p>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      WIP:
        "Sorry but this page isn't done yet. Check back later and maybe they'll be something here."
    };
  }
};
</script>

<style>
#resume {
  background-color: #d7cec7;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: -1;
}
.wip {
  position: absolute;
  top: 30%;
  z-index: 20;
  left: 50%;
  margin: 0 0 0 -5vw;
}
.icons8 {
  position: absolute;
  bottom: 0;
  text-decoration: none;
  color: white;
  font-size: 0.75em;
  right: 0;
}
#body {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 0 0 -25vw;
}
.ft_body {
  font-family: "Roboto";
  font-weight: 400;
}
</style>
