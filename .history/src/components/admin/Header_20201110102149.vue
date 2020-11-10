<template>
  <div class="header">
    <i class="el-icon-delete"></i>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
import { getWeather } from '@/api/weather';

export default {
  name: "Header",
  data() {
    return {
      activeIndex: '1',
    };
  },
  props:{
      my: {
        type: String,
        default: "子组件-我的",
        required: true
      }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getTest() {
      let params = {
          'city': '上海'
      }
      getWeather(params).then((response) => {
        // success
        console.log(response);
        console.log('----------');
        console.log(process.env.NODE_ENV);
      })
        .catch((error) => {
          // error
          console.log(error)
        })
    }
  }
};
</script>
