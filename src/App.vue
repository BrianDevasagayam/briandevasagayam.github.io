<template>
  <div id="app">
    <header>
      <Navigation></Navigation>
    </header>
    <main>
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
    Navigation: Navigation
  }
};
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  padding: 0;
  overflow-x: hidden;
}
</style>
