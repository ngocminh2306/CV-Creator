<template>
  <div id="app">
    <div class="body-wrapper">
      <div class="content-wrapper">
        <HeaderMain :key="header_key" @reset="reloadHeader()"></HeaderMain>
        <router-view class="content-struct" />
        <FooterMain class="footer-struct"></FooterMain>
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
}
.body-wrapper {
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100vh;
  background-color: #f0f2f5;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.content-struct {
  flex: 1 0 auto;
}
.footer-struct {
  flex-shrink: 0;
}
</style>
