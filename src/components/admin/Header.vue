<template>
  <div class="header">
    <i
      class="control nav_left"
      :class="{ 'el-icon-s-fold': fold, 'el-icon-s-unfold': unfold }"
      @click="control"
    ></i>
    <el-breadcrumb class="nav_breadcrumb nav_left" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item
        ><span @click="infor">接口测试</span></el-breadcrumb-item
      >
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="right_menu">
      <img
        src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
        alt=""
        class="avatar"
      />
    </div>
  </div>
</template>
<script>
import { getWeather } from "@/api/weather";
import { getInfor } from "@/api/test/user";

export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      fold: false,
      unfold: true
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // 切换显示图标
    control() {
      if (this.fold) {
        this.fold = false;
        this.unfold = true;
        this.$emit("childFn", false);
      } else {
        this.fold = true;
        this.unfold = false;
        this.$emit("childFn", true);
      }
    },
    // hcrm接口测试
    infor() {
      // console.log('infor')
      let key = "2EeFLh76UZgjy6MLh76Oa0JJD84EdAPL";
      let timestamp = Date.parse(new Date());
      let sign = this.$md5(timestamp + key);
      let params = {
        timestamp: timestamp,
        sign: sign
        // 'number': '90896784'
      };
      getInfor(params)
        .then(response => {
          // success
          console.log(response);
          console.log("----------");
          console.log(process.env.NODE_ENV);
        })
        .catch(error => {
          // error
          console.log(error);
        });
    },
    // 测试天气接口
    getTest() {
      let params = {
        city: "上海"
      };
      getWeather(params)
        .then(response => {
          // success
          console.log(response);
          console.log("----------");
          console.log(process.env.NODE_ENV);
        })
        .catch(error => {
          // error
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.header {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.control {
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;
}
.nav_breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
}
.right_menu {
  float: right;
  height: 100%;
  line-height: 50px;
}
.avatar {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 10px;
}
.nav_left {
  float: left;
}
.nav_right {
  float: right;
}
</style>
