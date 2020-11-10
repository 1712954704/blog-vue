<template>
  <div class="sidebar">
    <el-menu
      default-active="1-2-1"
      class="el-menu-demo"
      mode="vertical"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      menu-trigger="hover"
      :collapse="collapse"
    >
      <navList :list="itemlist" :collapse="collapse"></navList>
    </el-menu>
  </div>
</template>
<script>
import navList from "@/components/Nav.vue";
export default {
  name: "Sidebar",
  components: {
    navList: navList
  },
  data() {
    return {
      list: [
        {
          mouduleurl: "/home",
          text: "后台管理",
          value: "00010001",
          index: "5",
          children: [
            {
              mouduleurl: "pages/config/config_list.html",
              text: "系统参数",
              value: "00010001",
              index: "5-1"
            },
            {
              mouduleurl: "pages/dmp/table_list.html",
              text: "数据表结构",
              value: "00010002",
              index: "5-2"
            },
            {
              mouduleurl: "pages/module/module_settinglist.html",
              text: "模块地址",
              value: "00010003",
              index: "5-3"
            }
          ]
        }
      ],
      itemlist: [
        {
          mouduleurl: "/home",
          text: "后台管理",
          value: "0001",
          index: "1",
          children: [
            {
              mouduleurl: "pages/config/config_list.html",
              text: "系统参数",
              value: "00010001",
              index: "1-1"
            },
            {
              mouduleurl: "pages/dmp/table_list.html",
              text: "数据表结构",
              value: "00010002",
              index: "1-2",
              children: [
                {
                  mouduleurl: "pages/config/config_list.html",
                  text: "数据表关联管理",
                  value: "00010002001",
                  index: "1-2-1"
                }
              ]
            },
            {
              mouduleurl: "pages/module/module_settinglist.html",
              text: "模块地址",
              value: "00010003",
              index: "1-3"
            }
          ]
        },
        {
          mouduleurl: "",
          text: "文章管理",
          value: "0002",
          index: "2",
          children: [
            {
              mouduleurl: "pages/article/article_list.html",
              text: "文章列表",
              value: "00020001",
              index: "2-1"
            }
          ]
        },
        {
          mouduleurl: "",
          text: "爬虫专题",
          value: "0003",
          index: "3",
          children: [
            {
              mouduleurl: "pages/spider/music/music_search.html",
              text: "网易云音乐",
              value: "00030001",
              index: "3-1"
            }
          ]
        },
        {
          mouduleurl: "",
          text: "测试4",
          value: "0004",
          index: "4"
        }
      ]
    };
  },
  props:{
    collapse: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
/* 左侧菜单栏 */
.el-submenu .el-menu-item {
  min-width: 100px;
}
</style>
