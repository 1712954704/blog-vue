<template>
  <div id="app" :style="styleHeight">
    <el-container :style="styleHeight">
      <el-Header :style="styleHeader">
        <admin-header
          v-show="$route.meta.adminHeader"
          my="父组件-我的"
        ></admin-header>
      </el-Header>
      <el-container>
        <el-aside :style="styleWidth">
          <admin-sidebar v-show="$route.meta.adminSideBar"></admin-sidebar>
        </el-aside>
        <el-main>
          <div id="nav" v-if="$route.meta.nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>|
            <router-link to="/blog">Blog</router-link>|
            <router-link to="/lang">Lang</router-link> |
            <router-link to="/admin/index">admin/index</router-link> |
          </div>
          <!-- <router-view /> -->
          <router-view v-if="$route.meta.keep"></router-view>
        </el-main>
      </el-container>
      <el-footer>footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/admin/Header.vue";
import Sidebar from "@/components/admin/Sidebar.vue";

export default {
  name: "App",
  data() {
    return {
      styleHeader: {
        height: "auto"
      },
      styleHeight: {
        height: "100%"
      },
      styleWidth: {
        width: "auto"
      }
    };
  },
  components: {
    "admin-header": Header,
    "admin-sidebar": Sidebar
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// element ui 样式改变
.el-header,
.el-footer,
.el-main {
  padding: 0;
}
</style>
