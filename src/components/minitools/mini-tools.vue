<template>
  <div class="">
    <div class="content">
      <b-card no-body>
        <b-tabs pills>
          <b-tab to="/mini-tools/salary-calculate" title="Gross <-> Net" active></b-tab>
          <b-tab title="Tab 2"></b-tab>
          <b-tab title="Tab 3"></b-tab>
        </b-tabs>
      </b-card>
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
</style>
