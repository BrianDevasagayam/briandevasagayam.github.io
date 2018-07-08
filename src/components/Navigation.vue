<template>
  <div id="navigation">
    <div id="nav-side-mobile">     
      <nav>
          <li v-for="routes in links" v-bind:key="routes.id">
              <router-link class="links" :to="`${routes.page}`">{{routes.text}}</router-link>
          </li>
      </nav>
    </div>
    <div id="nav-bar-mobile">

    </div>
    <div id="nav-bar-desktop">

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
  display: block;
  list-style-type: none;
}
.links {
  text-decoration: none;
}
@media screen and (min-width: 768px) {
  li {
    display: inline;
  }
}
</style>
