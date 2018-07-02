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
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'app',
  components: {
    'Navigation': Navigation
  }
}
</script>

<style>
body {
  margin: 0;
  background-image: url('assets/background.jpg');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
