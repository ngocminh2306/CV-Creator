<template>
  <div class="content-my-profile">
    <div class="content">
      <div class="slide">
        <!-- <router-link :to="{ name: 'infomation', params: { userId: 123 }}">User</router-link> -->
        <router-link to="/my-profile/infomation">Infomation</router-link>
        <router-link to="/my-profile/career-goal">Career Goal</router-link>
        <router-link to="/my-profile/education">Education</router-link>
        <router-link to="/my-profile/project">Project</router-link>
        <router-link to="/my-profile/achievement">Achievement</router-link>
        <router-link to="/my-profile/LanguageAndHobby">Language And Hobby</router-link>
        <router-link to="/my-profile/WorkingExperience">Working Experience</router-link>
        <router-link to="/my-profile/WorkingSkill">Working Skill</router-link>
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
  name: "my-profile",
  data() {
    return {};
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
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  padding: 60px;
  max-width: 1180px;
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
  display: flex;
  flex: 1;
  padding-left: 80px;
}
</style>
