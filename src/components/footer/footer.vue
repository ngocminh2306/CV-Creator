<template>
  <div class="footer__main">
    <div class="footer__main_content">
      <h1 style>This is Footer</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterMain",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer__main_content {
}
.footer__main {
  color: white;
  background-color: #2a2b50;
  display: block;
  flex: 1 auto;
  /* height: 400px; */
  height: 250px;
  max-height: 250px;
}
</style>
