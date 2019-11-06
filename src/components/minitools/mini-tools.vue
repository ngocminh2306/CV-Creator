<template>
  <div class="">
    <div class="content">
      <b-nav tabs >
          <b-nav-item to="/mini-tools/salary-calculate">Tính lương</b-nav-item>
          <b-nav-item to="/mini-tools/image-upload">Upload ảnh</b-nav-item>
      </b-nav>
      <router-view/>
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
  @media only screen and (max-width: 768px) {
    .content {
      padding: 5vh 4vw !important;
    }
  }
  .content {
    padding: 5vh 20vw
  }
  .router-link-active {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  }
</style>
