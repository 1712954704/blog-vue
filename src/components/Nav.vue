<template>
  <div class="navList">
    <template v-for="item in list">
      <template v-if="item.children">
        <el-submenu :index="item.index" :key="item.index">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span v-show="!collapse">{{ item.text }}</span>
          </template>
          <el-menu-item-group>
            <navList :list="item.children"></navList>
          </el-menu-item-group>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="item.index" :key="item.index">
          <i class="el-icon-setting"></i>
          <span slot="title">{{ item.text }}</span>
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
    },
    // 折叠 true:是 false: 否
    collapse: {
      type: Boolean,
      default: false
    }
  }
};
</script>
