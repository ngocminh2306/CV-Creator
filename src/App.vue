<template>
  <div id="app">
    <div class="body-wrapper">
      <div class="content-wrapper">
        <HeaderMain :key="header_key" @reset="reloadHeader()"></HeaderMain>
        <router-view/>
        <!-- <FooterMain></FooterMain> -->
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMain from "@/components/header/header";
import FooterMain from "@/components/footer/footer";
import Vue from "vue";

export default {
  components: { HeaderMain, FooterMain },
  name: "App",
  data() {
    return {
      header_key: 0
    };
  },
  methods: {
    reloadHeader(){
      this.header_key += 1;
    }
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.body-wrapper {
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100vh;
}
.content-wrapper {
  background-color: #f0f2f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
