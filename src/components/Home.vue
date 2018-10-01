<template>
  <div id="home">
    <div id="nav-back"></div>
    <div id="innerHome">
      <div id="profile-pic"></div>
      <p id="fname" class="ft_heading">{{ fname }}</p>
      <p id="lname" class="ft_heading">{{ lname }}</p>
      <p id="p1" class="ft_body fade-in">{{ p1 }}</p>
      <p id="p2" class="ft_body fade-in">{{ p2 }}</p>
      <p id="p3" class="ft_body fade-in">{{ p3 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      fname: "Brian A.",
      lname: "Devasagayam",
      p1:
        "Welcome to my website! I am a current computer engineering undergraduate at the University of Waterloo entering my 2A semester. I made this website using Vue.js, HTML and CSS to showcase all of the experience I have gained over my career. I am currently looking for new employment opportunities for the Winter 2019 co-op term.",
      p2:
        "I currently have an affinity for full stack development but am open and looking for new opportunities in traditional software development and network security.",
      p3:
        "My other non computer related interest includes film, pool, finance and the Marvel Cinematic universe."
    };
  }
};
</script>

<style>
#nav-back {
  height: 70px;
  width: 100vw;
  background-color: #c09f80;
  z-index: -1;
  position: absolute;
  top: 0px;
}
#innerHome {
  background-color: #c09f80;
  position: absolute;
  text-align: center;
  z-index: -1;
  min-height: calc(100% - 70px);
  width: 100vw;
  top: 70px;
}
.ft_body {
  font-family: "Roboto";
  font-weight: 400;
  font-size: 1em;
}
.ft_heading {
  font-family: "Raleway";
  font-weight: 700;
  font-size: 2.5em;
  color: #76323f;
}
#profile-pic {
  background-image: url("../assets/profile-pic.jpg");
  background-size: cover;
  display: inline-block;
  height: 12em;
  width: 12em;
  border-radius: 50%;
  margin-top: 10px;
}
#fname {
  margin-top: 20px;
}
#p1,
#p2,
#p3 {
  margin: 20px 15%;
}
#lname {
  margin: 0 auto 30px auto;
}
/* On page load text animation */
.fade-in {
  opacity: 0;
  animation: fadeIn ease-in 1;
  animation-fill-mode: forwards;
  animation-duration: 1s;
}
/* Keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
/* Animation End */

@media screen and (min-width: 768px) {
  .ft_heading {
    font-size: 3em;
  }
}
</style>
