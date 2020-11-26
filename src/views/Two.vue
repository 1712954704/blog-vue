<template>
  <div class="Two">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: "One",
  data() {
    return {
      msg: "Hi, I am Two Page!"
    };
  },
  created(){
    // localStorage.setItem('code','Two');
  }
};
</script>

<style scoped></style>
