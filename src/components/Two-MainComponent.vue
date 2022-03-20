<template>
  <div class="hello">
    <div class="login-info">
      <div class="logged" v-if="logged">Logged in with token {{ token }}</div>
      <div class="not-logged" v-else>Not Logged</div>
    </div>
    <h1>{{ "Micro Frontend Two (Vue 3 + Element Plus)" }}</h1>
    <ChildComponent v-if="logged" />
    <br />
    <span style="color: #409eff">{{ message }}</span>
  </div>
</template>

<script>
import { ref } from "vue";
import ChildComponent from "./Two-ChildComponent.vue";
import { auth$ } from "org/auth";

export default {
  components: {
    ChildComponent,
  },
  props: {},

  setup() {
    const count = ref(0);
    const message = ref("");

    const logged = ref(false);
    const user = ref("");
    const token = ref("");

    window.addEventListener("hello-event", () => {
      message.value = "Hello!";
    });

    auth$.subscribe((payload) => {
      token.value = payload.sessionToken;
      user.value = payload.user;
      logged.value = payload.sessionToken !== null;
    });

    // expose to template and other options API hooks
    return {
      count,
      message,
      logged,
      user,
      token,
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
.not-logged {
  background-color: pink;
  width: 100px;
}
.logged {
  background-color: greenyellow;
  width: 250px;
}
</style>
