<template>
  <MainComponent msg="Welcome to Your Vue.js App 2" />
</template>

<script>
// import 'primevue/resources/themes/saga-blue/theme.css';
// import 'primevue/resources/primevue.min.css';
// import 'primeicons/primeicons.css';

import MainComponent from "./components/Two-MainComponent.vue";

export default {
  name: "App",
  components: {
    MainComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* @import "primevue/resources/themes/saga-blue/theme.css";
@import "primevue/resources/primevue.min.css";
@import "primeicons/primeicons.css"; */

</style>
