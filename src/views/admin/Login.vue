<template>
  <div class="adminLogin">
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      :class="loginFrom"
      label-width="80px"
    >
      <h3 class="title">系统登录</h3>
      <el-form-item prop="name">
        <el-input
          v-model="form.name"
          prefix-icon="el-icon-user-solid"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          type="password"
          v-model="form.pwd"
          prefix-icon="el-icon-s-cooperation"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="button" type="primary" @click="onSubmit"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {login} from "@/api/admin/login";

export default {
  name: "AdminLogin",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    };
    return {
      form: {
        name: "",
        pwd: ""
      },
      loginFrom: "loginFrom",
      rules: {
        name: [{ required: true, trigger: "blur" }],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      let params = {
        name: this.form.name,
        password: this.form.pwd
      };
      login(params)
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
<style scoped lang="less">
.adminLogin {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
}
.loginFrom {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}
.title {
  font-size: 26px;
  color: #eee;
  margin: 0 auto 40px auto;
  text-align: center;
  font-weight: 700;
}
.button {
  width: 100%;
  margin-bottom: 30px;
}
</style>
