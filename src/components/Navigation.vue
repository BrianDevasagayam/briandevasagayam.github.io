<template>
  <div id="navigation">
    <div id="nav-bar-mobile beGone">
      <div id="ham-icon" class="X">
        <div class="bar one"></div>
        <div class="bar two"></div>
        <div class="bar three"></div>
      </div>
      <div class="home"><router-link class="links beGone" to="/">Brian Devasagayam</router-link></div>
    </div>
    <div id="nav-side-mobile">     
      <nav class="nav-side">
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
li {
  list-style-type: none;
}
.links {
  text-decoration: none;
  color: black;
}
#nav-bar-mobile {
  background-color: #7c8d8a;
  height: 50px;
  line-height: 50px;
  width: 100%;
  display: inline-flex;
  position: relative;
}
.bar {
  height: 3px;
  width: 22px;
  background-color: white;
  margin: 3px auto;
  border-radius: 3px;
}
#ham-icon {
  margin: auto 0;
  padding-left: 10px;
}
.home {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
#nav-side-mobile {
  height: 100vh;
  width: 100vw;
  z-index: 20;
  background-color: white;
}
.beGone {
  display: none;
}
.X {
  float: left;
  padding-top: 10px;
}
.X div {
  background-color: black;
}
.nav-side {
  padding-top: 50px;
  padding-left: 10px;
}
.side {
  font-size: 20px;
  padding-bottom: 10px;
}
.side-links {
  padding-bottom: 10px;
}
#nav-bar-desktop {
  display: none;
}
</style>
