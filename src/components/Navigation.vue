<template>
  <div id="navigation">
    <div id="ham-icon" @click="isActive = !isActive" :class="{ 'open' : isActive}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    <div class="container">
      <div id="nav-bar-mobile">
        <div @click="isActive = false" class="home"><router-link class="links" to="/">BRIAN DEVASAGAYAM</router-link></div>
      </div>
    </div>
    <div id="nav-side-mobile" :class="{ 'nav-active' : isActive }">       
        <nav>
          <div @click="isActive = !isActive" class="side-links" v-for="routes in links" v-bind:key="routes.id">
            <router-link class="links" :to="`${routes.path}`">{{routes.text}}</router-link>
          </div>
        </nav>
    </div>
    <div class="container">
      <div id="nav-bar-desktop">
        <div class="home"><router-link class="links" to="/">BRIAN DEVASAGAYAM</router-link></div>
        <nav id="bar-links">
          <div class="bar-items" v-for="routes in links" v-bind:key="routes.id">
            <router-link class="links" :to="`${routes.path}`">{{routes.text}}</router-link>
          </div>
        </nav>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      isActive: false,
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
/* Hide desktop navigation and not apply any css to prevent longer load times on mobile */
#nav-bar-desktop {
  display: none;
}
/* Navigation bar for mobile */
#navigation {
  width: 100vw;
}
#ham-icon {
  height: 20px;
  width: 27px;
  position: absolute;
  right: 20px;
  top: 23px;
  z-index: 10;
}
#ham-icon span {
  height: 3px;
  width: 100%;
  background-color: #76323f;
  display: block;
  margin: 2px auto;
  border-radius: 5px;
  position: absolute;
  -webkit-transition: 0.7s ease-in-out;
  -moz-transition: 0.7s ease-in-out;
  -o-transition: 0.7s ease-in-out;
  transition: 0.7s ease-in-out;
}
#ham-icon span:nth-child(1) {
  top: 0px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}
#ham-icon span:nth-child(2) {
  top: 6px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#ham-icon span:nth-child(3) {
  top: 12px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}
#ham-icon.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: -3px;
}
#ham-icon.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}
#ham-icon.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 16px;
}
.home .links {
  width: 185px;
  line-height: 65px;
  vertical-align: middle;
  position: absolute;
  color: #76323f;
  left: 15px;
  font-size: 1.1em;
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
#nav-bar-mobile {
  content: "";
  position: relative;
  left: 0;
  top: 0;
  overflow: hidden;
  width: 100vw;
  height: 60px;
  background: white;
  z-index: -1;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 55px);
  -moz-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 55px);
  -ms-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 55px);
  -o-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 55px);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 55px);
}
/* Navigation Side Menu */
#nav-side-mobile {
  width: 100vw;
  height: calc(100vh - 51px);
  left: -100vw;
  top: 50px;
  background-color: #76323f;
  position: fixed;
  text-transform: uppercase;
  text-align: center;
  -webkit-clip-path: polygon(0 0, 100vw 5px, 100vw 100%, 0 100%);
  -moz-clip-path: polygon(0 0, 100vw 5px, 100vw 100%, 0 100%);
  -ms-clip-path: polygon(0 0, 100vw 5px, 100vw 100%, 0 100%);
  -o-clip-path: polygon(0 0, 100vw 5px, 100vw 100%, 0 100%);
  clip-path: polygon(0 0, 100vw 5px, 100vw 100%, 0 100%);

  /* Transitions */
  transition: left 0.7s ease-in-out, top 0.7s ease-in-out;
}
.nav-active {
  top: 55px !important;
  left: 0vw !important;
}
#nav-side-mobile nav {
  margin-top: 20px;
}
.side-links {
  font-size: 1.4em;
  visibility: visible;
  height: 50px;
  line-height: 50px;
  vertical-align: middle;
}
#nav-side-mobile .links {
  color: #d7cec7;
}
#nav-side-back {
  width: 100%;
}
.container {
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.1));
  z-index: -1;
}
/* Desktop navigation bar */
@media screen and (min-width: 768px) {
  /* Hide all mobile stuff */
  #ham-icon {
    display: none;
  }
  #nav-bar-mobile {
    display: none;
  }
  #nav-side-mobile {
    display: none;
  }
  #nav-bar-desktop {
    height: 70px;
    display: block;
    width: 100vw;
    background-color: white;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 65px, 0 60px);
    -moz-clip-path: polygon(0 0, 100% 0, 100% 65px, 0 55px);
    -ms-clip-path: polygon(0 0, 100% 0, 100% 65px, 0 55px);
    -o-clip-path: polygon(0 0, 100% 0, 100% 65px, 0 55px);
    clip-path: polygon(0 0, 100% 0, 100% 70px, 0 60px);
  }
  #bar-links {
    position: absolute;
    right: 45px;
    line-height: 70px;
    vertical-align: middle;
  }
  .bar-items {
    display: inline-block;
    position: relative;
    margin: auto 10px;
    color: #76323f;
    height: 70px;
  }
  .bar-items .links {
    position: relative;
    height: 55px;
    text-align: center;
    line-height: 70px;
    display: inline-block;
    padding: 0 7px;
  }
  .bar-items .links::before {
    content: "";
    position: absolute;
    top: -2px;
    right: -2px;
    width: 100%;
    height: 100%;
    background: transparent;
    border-bottom: 2px solid rgba(118, 50, 63, 0.95);
    transform: scale3d(0, 1, 1);
  }
  .bar-items .links:hover::before {
    transform: scale3d(1, 1, 1);
    transition: transform 1s;
  }
  .links {
    color: #76323f;
    font-weight: 500;
    opacity: 0.95;
  }
}
</style>
