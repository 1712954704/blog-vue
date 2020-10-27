<style></style>
<template>
  <div class="lang">
    <h2>blog</h2>
    <h2>{{ lang }}</h2>
    <h2>{{ $t("message.hello") }}</h2>
    <button @click="add">切换</button>
  </div>
</template>
<script>
export default {
  name: "Lang",
  data() {
    return {
      lang: "zh",
      n: ""
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
