<template>
  <div id="navigation">
    <div id="nav-bar-mobile">
      <div id="ham-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="home"><router-link class="links" to="/">BRIAN DEVASAGAYAM</router-link></div>
    </div>
    <div id="nav-side-mobile">     
      <nav>
          <li class="side-links" v-for="routes in links" v-bind:key="routes.id">
              <router-link class="links side" :to="`${routes.page}`">{{routes.text}}</router-link>
          </li>
      </nav>
    </div>
    <div id="nav-bar-desktop">
      <nav>
          <li v-for="routes in links" v-bind:key="routes.id">
              <router-link class="links" :to="`${routes.page}`">{{routes.text}}</router-link>
          </li>
      </nav>
    </div>  
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Home",
          path: "/"
        },
        {
          id: 1,
          text: "Experience",
          path: "/experience"
        },
        {
          id: 2,
          text: "Projects",
          path: "/projects"
        },
        {
          id: 3,
          text: "Resume",
          path: "/resume"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Stuff to think about/do */
/* So I want a website thats built mobile first
   It needs to be fire
   Need to figure out desgin and stuff (fonts colours feel)
   Need to figure out what kind of background I want and how to make it
   Need navigation bar 
   split into a mobile bar + side
   and a desktop bar no side
   the bar for mobile should be ham-icon and my name
   bar for desktop should have all the links with home being my name like this :
   --------------
   Brian small
   Devasgayam big
   ----------------
   for mobile side it should be the links and animate to take up entire screen
   background should be white? or some animated thing too
   the ham-icon should be three bars and animate into an X*/
/* For testing */
#nav-side-mobile,
#nav-bar-desktop {
  display: none;
}
/* Code */
/* Navigation bar for mobile */
#nav-bar-mobile {
  height: 60px;
  width: 100%;
  position: relative;
}
#ham-icon {
  height: 60px;
  width: 27px;
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: -10px;
}
#ham-icon span {
  height: 3px;
  width: 100%;
  background-color: #76323f;
  display: block;
  margin: 2px auto;
  border-radius: 5px;
}
.home .links {
  width: 180px;
  line-height: 55px;
  vertical-align: middle;
  position: absolute;
  color: #76323f;
  left: 12px;
  font-weight: 700;
}
.links {
  text-decoration: none;
  color: black;
  font-family: "Roboto";
}
li {
  list-style-type: none;
}
#navigation #nav-bar-mobile:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: visible;
  width: 100%;
  height: 250px;
  background: white;
  z-index: -1;
  -webkit-transform: skewY(2.5deg);
  -moz-transform: skewY(2.5deg);
  -ms-transform: skewY(2.5deg);
  -o-transform: skewY(2.5deg);
  transform: skewY(2.5deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: initial;
}
/* Desktop navigation bar */
#navigation #nav-bar-desktop:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: visible;
  width: 100%;
  height: 250px;
  background: white;
  z-index: -1;
  -webkit-transform: skewY(2.5deg);
  -moz-transform: skewY(2.5deg);
  -ms-transform: skewY(2.5deg);
  -o-transform: skewY(2.5deg);
  transform: skewY(2.5deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: initial;
}
</style>
