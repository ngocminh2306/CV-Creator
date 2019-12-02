<template>
  <div class="editor-container">
    <div class="introduction">
      <div class="introduction-left" style="display:block">
        <img @click="img_click" ref="preview" src="@/assets/saitama.jpg" class="avatar-img">
        <input style="display: none" ref="input-img" type="file" @change="onFileSelected">
        <quill-editor placeholder="name" v-model="data.introduction.fullName" :options="data.editorOption">
        </quill-editor>
      </div>
      <div class="introduction-right">
        <quill-editor v-model="data.introduction.birthday" :options="data.editorOption"></quill-editor>
        <quill-editor v-model="data.introduction.phonenumber" :options="data.editorOption"></quill-editor>
        <quill-editor v-model="data.introduction.email" :options="data.editorOption"></quill-editor>
        <quill-editor v-model="data.introduction.address" :options="data.editorOption"></quill-editor>
      </div>
    </div>
    <div class="career">
      <h2 style="text-align: left;">CAREER GOALS</h2>
      <div class="career-left">
        <quill-editor :options="data.editorOption"></quill-editor>
      </div>
      <div class="career-right">
        <quill-editor :options="data.editorOption"></quill-editor>
        <quill-editor :options="data.editorOption"></quill-editor>
        <quill-editor :options="data.editorOption"></quill-editor>
        <quill-editor :options="data.editorOption"></quill-editor>
        <quill-editor :options="data.editorOption"></quill-editor>
      </div>
    </div>
    <div class="education">
      <h2 style="text-align: left;">EDUCATION</h2>
      <div class="introduction-right">
        <quill-editor v-model="data.education.graduationPlace" :options="data.editorOption"></quill-editor>
        <quill-editor v-model="data.education.rankings" :options="data.editorOption"></quill-editor>
        <quill-editor v-model="data.education.name" :options="data.editorOption"></quill-editor>
      </div>
    </div>
    <expericence :data="data.experience"></expericence>
    <Language></Language>
  </div>
</template>
<script>
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import Language from '@/components/cv-element/language';
import expericence from '@/components/cv-element/expericence';
export default {
  name: "default-cv",
  props: ['data'],
  components: {
    Language,
    expericence
  },
  data() {
    return {
      selectedFile: null,
      editor: InlineEditor,
      editorData: '',
      editorConfig: {
          // The configuration of the editor.
      }
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
    }
  },
  computed: {},
  created() {
    console.log(this.data)
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block {
  display: flex
}
@media only screen and (max-width: 768px) {
  .editor-container {
    padding: 0 10px !important;
    background-color: #f0f2f5c4;
  }
  .avatar-img {
    height: 8rem !important;
    width: calc(8rem * 3/4) !important;
  }
}
.editor-container {
  padding: 0 60px;
  background-color: #f0f2f5c4;
}
.ql-tooltip {
  z-index: 1 !important;
}
.introduction {
    padding-top: 2%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
}
.introduction-left {
  text-align: left;
}
.introduction-right {
  grid-column: 2 / span 3
}
.quill-editor:hover {
  background: #cdebf650;
}
.avatar-img {
  height: 15rem;
  width: calc(15rem * 3/4);
}
.input-effect {
  background-color: white;
  border: none;
  border-radius: 0;
}
input:hover.input-effect {
  background: #cdebf650;
  border: 1px dotted gainsboro;
}
h2 {
  font-size: 32px
}
</style>
