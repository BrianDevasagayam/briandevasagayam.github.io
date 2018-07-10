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
export default {
  name: "app",
  components: {
    Navigation: Navigation
  }
};
</script>

<style>
body {
  margin: 0;
  background-image: url("assets/background.jpg");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
</style>
