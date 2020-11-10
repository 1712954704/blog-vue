<template>
  <div id="app" :style="styleHeight">
    <el-container :style="styleHeight">
      <el-container>
        <el-aside :style="styleWidth">
          <admin-sidebar v-if="!$route.meta.adminSideBar" :collapse="collapse"></admin-sidebar>
        </el-aside>
        <el-container class="flex_column">
          <el-Header :style="styleHeader">
            <admin-header
              v-if="!$route.meta.adminHeader"
              @childFn="folding"
            ></admin-header>
          </el-Header>
          <el-main v-if="!$route.meta.main">
            <!-- <div id="nav">
              <router-link to="/">Home</router-link> |
              <router-link to="/home/one">Home/One</router-link> |
              <router-link to="/about">About</router-link>|
              <router-link to="/blog">Blog</router-link>|
              <router-link to="/lang">Lang</router-link> |
              <router-link to="/admin/index">admin/index</router-link> |
              <router-link to="/admin/login">admin/login</router-link> |
            </div> -->
            <router-view />
          </el-main>
        </el-container>
      </el-container>
      <el-footer v-if="!$route.meta.tail">footer</el-footer>
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
      },
      collapse: false,
    };
  },
  methods: {
    folding(value){
      console.log(value)
      this.collapse = value;
    }
  },
  components: {
    "admin-header": Header,
    "admin-sidebar": Sidebar
  }
};
</script>

<style scoped lang="less">
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

.flex_column {
  flex-direction: column;
}
</style>
