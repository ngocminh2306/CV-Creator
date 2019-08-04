<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="body-wrapper">
      <div class="content-wrapper">
        <HeaderMain></HeaderMain>

        <router-view/>

        <FooterMain></FooterMain>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMain from "@/components/header/header";
import FooterMain from "@/components/footer/footer";
export default {
  components: { HeaderMain, FooterMain },
  name: "App"
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
}
</style>
