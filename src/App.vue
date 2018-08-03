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
  background-color: #c09f80;
}
</style>
