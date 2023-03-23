<template>
  <div id="app">
    <navbar />
    <div style="margin: 9rem 6rem 0px 6rem">
      <router-view />
    </div>
  </div>
</template>

<script>
import navbar from "./components/navbar";
export default {
  components: {
    navbar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
