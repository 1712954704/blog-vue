<template>
  <div class="test">
    <el-container>
      <el-header>
        <el-dropdown @command="sumTypeCkeck">
          <span class="el-dropdown-link">
            {{ sumType }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" v-for="item in hos" :key="item.id">
            <!-- <el-dropdown-item>{{ item.h_name }}</el-dropdown-item> -->

            <el-dropdown-item v-for="item in hos" :key="item.id"
                    v-text="item.h_name"
                    :command="item"
            ></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
    </el-container>
  </div>
</template>
<script>
import { getInfor } from "@/api/admin/purui/infor";
export default {
  name: "Test",
  data() {
    return {
      h_id: "",
      hos: "",
      keshi: "",
      sumType: "请选择",
    };
  },
  methods: {
    infor() {
      let params = {
        m: "purui",
        c: "ajaxdata",
        a: "info"
        // city: '上海'
      };
      let self = this;
      getInfor(params)
        .then(response => {
          // success
          //   console.log(response);
          let data = response.data;
          self.hos = data.hos;
          self.keshi = data.keshi;
          console.log(self.hos);
          console.log("----------");
          console.log(process.env.NODE_ENV);
        })
        .catch(error => {
          // error
          console.log(error);
        });
    },
    sumTypeCkeck(type){  // 下拉列表的点击事件
      this.sumType=type.h_name
      this.h_id = type;
    },
  },
  mounted() {
    this.infor();
  }
};
</script>
<style></style>
