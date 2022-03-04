<template>
  <div id="app">
    <!-- <router-link to="/a">A Component</router-link> /
    <router-link to="/b">B Component</router-link> /
    <router-link to="/c">C Component</router-link> -->

    <!-- <button @click="changeRoute('a')">A Component</button>
    <button @click="changeRoute('b')">B Component</button>
    <button @click="changeRoute('c')">C Component</button>

    <router-view></router-view> -->

    <button @click="changeComponent('a')">A Component</button>
    <button @click="changeComponent('b')">B Component</button>
    <button @click="changeComponent('c')">C Component</button>

    <a-component v-if="currentComponent === 'a'"></a-component>
    <b-component v-else-if="currentComponent === 'b'">></b-component>
    <c-component v-else-if="currentComponent === 'c'">></c-component>

    <!-- <a-component v-show="currentComponent === 'a'"></a-component>
    <b-component v-show="currentComponent === 'b'"></b-component>
    <c-component v-show="currentComponent === 'c'"></c-component> -->
  </div>
</template>

<script>
import AComponent from "./components/AComponent.vue";
import BComponent from "./components/BComponent.vue";
import CComponent from "./components/CComponent.vue";

export default {
  name: "App",
  components: {
    AComponent,
    BComponent,
    CComponent,
  },

  data() {
    return {
      currentComponent: "b",
    };
  },

  methods: {
    changeComponent(value) {
      console.log("changeComponent", value);
      this.currentComponent = value;
    },

    changeRoute(value) {
      console.log("changeRoute", value);

      // this.$router.push("/" + value);
      this.$router.push(`/${value}`);

      // switch (value) {
      //   case "a":
      //     this.$router.push("/a");
      //     break;
      //   case "b":
      //     this.$router.push("/b");
      //     break;
      //   case "c":
      //     this.$router.push("/c");
      //     break;
      // }
    },
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
</style>
