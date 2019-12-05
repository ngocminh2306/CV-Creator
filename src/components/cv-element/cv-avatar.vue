<template>
   <div>
       <img @click="img_click" ref="preview" src="@/assets/saitama.jpg" class="avatar-img">
        <input style="display: none" ref="input-img" type="file" @change="onFileSelected">
    </div>
</template>
<script>

export default {
  name: "cv-avatar",
  props: ['data'],
  data() {
    return {
    };
  },
  methods: {
    img_click() {
      this.$refs["input-img"].click();
    },
    onFileSelected(event) {
      var file = event.target.files[0];
      var reader = new FileReader();
      var preview = this.$refs["preview"];
      reader.addEventListener(
        "load",
        function() {
          preview.src = reader.result;
        },
        false
      );
      if (file) {
        reader.readAsDataURL(file);
      }
      this.selectedFile = window.URL.createObjectURL(event.target.files[0]);
    },
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avatar-img {
  height: 12rem;
  width: calc(12rem * 3/4);
}
@media only screen and (max-width: 768px) {
  .avatar-img {
    height: 8rem !important;
    width: calc(8rem * 3/4) !important;
  }
}
</style>
