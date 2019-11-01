<template>
  <div class="content-my-profile">
    <div class="content">
      <div class="slide">
        <router-link to="/my-profile/infomation">Infomation</router-link>
        <router-link to="/my-profile/career-goal">Career Goal</router-link>
        <router-link to="/my-profile/education">Education</router-link>
        <router-link to="/my-profile/achievement">Achievement</router-link>
        <router-link to="/my-profile/WorkingExperience">Working Experience</router-link>
        <router-link to="/my-profile/project">Project</router-link>
        <router-link to="/my-profile/WorkingSkill">Working Skill</router-link>
        <router-link to="/my-profile/LanguageAndHobby">Language And Hobby</router-link>
      </div>
      <div class="main">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { reject } from 'q';
export default {
  components: {},
  name: "my-profile",
  data() {
    return {
      userInfo: {
        fullName: ''
      }
    };
  },
  mounted () {
    this.$http.get(`/User/user`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }).then(res => {
          localStorage.setItem("user", JSON.stringify(res.data.result));
          this.userInfo.fullName = res.data.result.fullName;
        }).catch (e=> {
          reject();
        });
  },
  created() {}
};
</script>
<style scoped>
.content-my-profile {
  flex: 3 auto;
  display: block;
}
.content-my-profile .content {
  margin: 5vh 5vw;
  display: flex;
  flex-direction: row;
  /* max-width: 90%; */
}
.slide {
  display: flex;
  flex-direction: column;
  max-width: 30vw;
}
.slide a {
  display: block;
  padding: 1vh 1vw;
  line-height: 30px;
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
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
  width: calc(100% - 30vw);
  padding-left: 5vw;
}
.router-link-active{
     background-color: white !important;
    color: #096dd9 !important;
}
</style>
