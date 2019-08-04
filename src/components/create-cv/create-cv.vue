<template>
  <div class="content-my-profile">
    <div class="content">
      <h1>This is create-cv component</h1>
      <h1>This is create-cv component</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "createCV",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-my-profile {
  flex: 3 auto;
  display: block;
}
.content-my-profile .content {
  display: flex;
  flex-direction: row;
  padding: 60px;
}
</style>
