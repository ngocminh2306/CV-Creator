<template>
  <div class="content-my-profile">
    <div class="content">
      <div class="slide">
        <!-- <a href="/my-profile/infomation">Infomation</a> -->
        <router-link to="/my-profile/infomation">/user/foo</router-link>
        <a href="#">Career Goal</a>
        <a href="#">Education</a>
        <a href="#">Achievement</a>
        <a href="#">Project</a>
      </div>
      <div class="main">
        <div>
          <h3>Education</h3>
          <router-view name='tabs'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Router from 'vue-router'
import Vue from "vue";
import infomation from "@/components/my-profile/infomation/infomation";

export default {
  components: { infomation },
  name: "my-profile",
  data() {
    console.log(this.$children);
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {}
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
}
.slide {
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
}
</style>
