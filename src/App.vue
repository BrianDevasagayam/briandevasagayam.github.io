<template>
  <div id="app">
    <header>
      <Navigation></Navigation>
    </header>
    <main>
      <Home></Home>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Home from "@/components/Home.vue";
export default {
  name: "app",
  components: {
    Navigation: Navigation,
    Home: Home
  }
};
</script>

<style>
body {
  margin: 0;
  /* background-color: #c09f80; */
}
</style>
