<template>
  <div class="header">
    <el-container class="header">
      <i :class="{'el-icon-s-fold':fold,'el-icon-s-unfold':unfold}" @click="control"></i>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </el-container>
  </div>
</template>
<script>
import { getWeather } from '@/api/weather';

export default {
  name: "Header",
  data() {
    return {
      activeIndex: '1',
      fold: false,
      unfold: true,
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
    // 切换显示图标
    control() {
      if(this.fold){
        this.fold = false
        this.unfold = true
      }else{
        this.fold = true
        this.unfold = false
      }
    },
    // 测试天气接口
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
<style scoped>
.header {
  height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
</style>
