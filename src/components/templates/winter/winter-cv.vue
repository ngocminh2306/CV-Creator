<template>
  <div class="editor-container">
    <div class="introduction">
      <div class="introduction-left" style="display:block">
        <img @click="img_click" ref="preview" src="@/assets/saitama.jpg" class="avatar-img">
        <input style="display: none" ref="input-img" type="file" @change="onFileSelected">
        <quill-editor placeholder="name" :options="editorOption">
        </quill-editor>
      </div>
      <div class="introduction-right">
        <quill-editor draggable="true" :options="editorOption"></quill-editor>
        <quill-editor draggable="true" :options="editorOption"></quill-editor>
        <quill-editor draggable="true" :options="editorOption"></quill-editor>
        <quill-editor draggable="true" :options="editorOption"></quill-editor>
      </div>
    </div>
    <div class="career">
      <h2 style="text-align: left;">CAREER GOALS</h2>
      <div class="career-left">
        <quill-editor   :options="editorOption"></quill-editor>
      </div>
      <div class="career-right">
        <quill-editor :options="editorOption"></quill-editor>
        <quill-editor :options="editorOption"></quill-editor>
        <quill-editor :options="editorOption"></quill-editor>
        <quill-editor :options="editorOption"></quill-editor>
        <quill-editor :options="editorOption"></quill-editor>
      </div>
    </div>
    <div class="education">
      <h2 style="text-align: left;">EDUCATION</h2>
      <div class="introduction-right">
        <quill-editor :options="editorOption"></quill-editor>
        <quill-editor :options="editorOption"></quill-editor>
        <quill-editor :options="editorOption"></quill-editor>
      </div>
    </div>
    <div class="career">
      <h2 style="text-align: left;">WORK EXPERIENCE</h2>
      <div class="introduction-left">
        <quill-editor   :options="editorOption"></quill-editor>
      </div>
      <div class="introduction-right">
        <quill-editor :options="editorOption"></quill-editor>
        <quill-editor :options="editorOption"></quill-editor>
        <quill-editor :options="editorOption"></quill-editor>
        <quill-editor :options="editorOption"></quill-editor>
        <quill-editor :options="editorOption"></quill-editor>
      </div>
    </div>
    <div class="career">
      <h2 style="text-align: left;">LANGUAGES</h2>
      <div class="introduction-left">
        <quill-editor :options="editorOption"></quill-editor>
      </div>
      <div class="introduction-right">
        <quill-editor :options="editorOption"></quill-editor>
        <quill-editor :options="editorOption"></quill-editor>
        <quill-editor :options="editorOption"></quill-editor>
        <quill-editor :options="editorOption"></quill-editor>
        <quill-editor :options="editorOption"></quill-editor>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'winter-cv',
  props: [],
  data () {
    return {
      editorOption: {
        // some quill options
        theme: 'bubble',
        placeholder: 'Name',
        modules: {
          toolbar: [[], []]
        }
      },
      params: {
        title: 'Title from 6 to 260 characters',
        introduction: {
          name: 'MINH'
        }
      }
    }
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
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
