<template>
  <component v-bind:is="component" :data="data" v-if="component" :key="componentKey"></component>
</template>
<script>
export default {
  name: "cvtemplate",
  props: ["data", "type"],
  data() {
    return {
      component: null,
      componentKey: 0
    };
  },
  computed: {
    loader() {
      if (!this.type) {
        this.renderComponentKey();
        return () => import("@/components/templates/default/default-cv");
      }
      this.renderComponentKey();
      return () => import(`@/components/templates/${this.type}`);
    }
  },
  methods: {
    renderComponentKey() {
      this.componentKey += 1;
    }
  },
  mounted() {
    this.loader()
      .then(() => {
        this.component = () => this.loader();
      })
      .catch(() => {
        this.component = () =>
          import("@/components/templates/default/default-cv");
      });
  }
};
</script>
