<template>
  <div class="content-my-profile">
    <div class="content">
      <div class="slide">
        <!-- <router-link :to="{ name: 'infomation', params: { userId: 123 }}">User</router-link> -->
        <router-link to="/my-profile/infomation">Infomation 333</router-link>
        <router-link to="/my-profile/education">Education</router-link>
        <router-link to="/my-profile/project">Project</router-link>
        <router-link to="/my-profile/achievement">achievement</router-link>
        <router-link to="/my-profile/career-goal">CareerGoal</router-link>
        <router-link to="/my-profile/LanguageAndHobby">LanguageAndHobby</router-link>
        <router-link to="/my-profile/WorkingExperience">WorkingExperience</router-link>
        <router-link to="/my-profile/WorkingSkill">WorkingSkill</router-link>
      </div>
      <div class="main">
        <div>
          <h3>Education</h3>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  components: {},
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
  padding: 60px;
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
  background: #f8f8f8;
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
  flex: 1;
}
</style>
