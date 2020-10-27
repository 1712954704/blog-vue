<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <p>
      导航 ： <router-link to="/home">首页</router-link> |
      <router-link to="/home/one">-子页面1</router-link> |
      <router-link to="/home/two">-子页面2</router-link>
    </p>
    <!-- 子页面展示部分 -->
    <router-view />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: "Home Page!"
    };
  }
};
</script>
