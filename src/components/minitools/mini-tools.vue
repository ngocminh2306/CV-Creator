<template>
  <div class="content-my-profile">
    <div class="content">
      <div class="slide">
        <router-link class="router-link-exact-active router-link-active" to="/mini-tools/salary-calculate">Tính lương Gross sang Net</router-link>
      </div>
      <div class="main">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  components: {},
  name: "mini-tools",
  data() {
    return {}
  },
  mounted () {},
  created() {}
};
</script>
<style scoped>
.content-my-profile {
  flex: 3 auto;
  display: block;
}
.content-my-profile .content {
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  padding: 60px;
  max-width: 80%;
}
.slide {
  display: flex;
  flex-direction: column;
}
.slide a {
  display: block;
  padding: 10px 30px;
  line-height: 30px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
  color: #4a4a4a;
  background-color: #f8f8f8;
  border-bottom: 1px solid #d8d8d8;
}
.slide a:active {
  color: #096dd9;
}
.slide a:hover {
  color: #096dd9;
  background: #fff;
}
.main {
  display: flex;
  flex: 1;
  padding-left: 80px;
}
.router-link-active{
     background-color: white !important;
    color: #096dd9 !important;
}
</style>
