<template>
  <div class="hello">
    <h1>{{ "Micro Frontend Two (Vue 3 + Element Plus)" }}</h1>
    <ChildComponent />
    <br />
    <span style="color: #409eff">{{ message }}</span>
  </div>
</template>

<script>
import { ref } from "vue";
import ChildComponent from "./Two-ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },
  props: {},

  setup() {
    const count = ref(0);
    const message = ref("");

    window.addEventListener("hello-event", () => {
      message.value = "Hello!";
    });

    // expose to template and other options API hooks
    return {
      count,
      message,
    };
  },

  mounted() {
    console.log(this.count); // 0
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
