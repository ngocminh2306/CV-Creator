<template>
    <div class="career">
        <h2 style="text-align: left;">LANGUAGES</h2>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
</template>
<script>
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

export default {
  name: "language",
  props: ['data'],
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ck.ck-content:hover {
        background: #cdebf650;
    }
</style>
