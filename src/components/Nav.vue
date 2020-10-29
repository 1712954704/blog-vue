<template>
  <div class="navList">
    <template v-for="item in list">
      <template v-if="item.children == null">
        <el-submenu index="item.index" :key="item.index">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>1{{ item.text }}</span>
          </template>
            <el-menu-item index="5-1">
                <i class="el-icon-setting"></i>
                <span slot="title">选项2-1</span>
            </el-menu-item>
            
            <el-menu-item index="5-1">
                <i class="el-icon-setting"></i>
                <span slot="title">选项2-1</span>
            </el-menu-item>
            
          <!-- <el-menu-item-group> -->
            <!-- <navList :list="item.children"></navList> -->
          <!-- </el-menu-item-group> -->
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item index="item.index" :key="item.index">
          <i class="el-icon-setting"></i>
          <span slot="title">2{{ item.text }}</span>
        </el-menu-item>
      </template>
    </template>
  </div>
</template>
<script>
export default {
  name: "navList",
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
      required: true
    }
  }
};
</script>
