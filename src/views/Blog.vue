<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
<template>
  <div class="blog">
    <div>
      <h2>blog</h2>
      <h2>{{ lang }}</h2>
      <h2>{{ $t("message.hello") }}</h2>
      <button @click="add">切换</button>
    </div>
    <div>
      <el-button @click="show3 = !show3">Click Me</el-button>

      <div style="margin-top: 20px; height: 200px;">
        <el-collapse-transition>
          <div v-show="show3">
            <div class="transition-box">el-collapse-transition</div>
            <div class="transition-box">el-collapse-transition</div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Blog",
  data() {
    return {
      isShow: false,
      lang: "zh",
      n: "",
      show3: true
    };
  },
  methods: {
    add() {
      if (this.n == "") {
        console.log("zh");
        this.n = 1;
        this.lang = "en";
        this.$i18n.locale = this.lang;
      } else {
        console.log("en");
        this.n = "";
        this.lang = "zh";
        this.$i18n.locale = this.lang;
      }
    }
  }
};
</script>
