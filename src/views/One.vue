<template>
  <div class="One">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: "One",
  data() {
    return {
      msg: "Hi, I am One Page!"
    };
  },
  created() {
    // localStorage.setItem('code','One');
  }
};
</script>

<style scoped></style>
