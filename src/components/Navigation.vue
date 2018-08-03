<template>
  <div id="navigation">
    <div id="nav-bar-mobile">
      <div id="ham-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="home"><router-link class="links" to="/">Brian Devasagayam</router-link></div>
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

<style>
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
#nav-bar-mobile {
  height: 45px;
  width: 100%;
  background-color: white;
  position: relative;
}
#ham-icon {
  height: 100%;
  width: 10%;
  position: absolute;
  left: 3%;
  top: 25%;
}
#ham-icon span {
  height: 5px;
  width: 100%;
  background-color: black;
  display: block;
  margin: 2px auto;
  border-radius: 5px;
}
.home {
  width: 180px;
  line-height: 45px;
  vertical-align: middle;
  position: absolute;
  left: 50%;
  margin: 0 0 0 -90px;
}
.links {
  text-decoration: none;
  color: black;
  font-family: "Roboto";
}
</style>
