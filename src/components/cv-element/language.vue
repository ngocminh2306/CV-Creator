<template>
  <b-row>
    <b-col class="col-content" cols="12" sm="6" md="12"  v-for="(item, index) in editorData" :key="index">
        <b-button class="remove-button" @click="removeElement(index)" variant="danger">Remove</b-button>
        <ckeditor :editor="editor" v-model="editorData[index]" :config="editorConfig"></ckeditor>
    </b-col>
  </b-row>
</template>
<script>
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

export default {
  name: "language",
  props: ['data'],
  data() {
    return {
      selectedFile: null,
      defaultData: [`<h4>Tiếng Anh</h4>
                <ul>
                    <li>Trinh độ A1</li>
            </ul>
        `],
      editor: InlineEditor,
      editorData: [`<h4>Tiếng Anh</h4>
                <ul>
                    <li>Trinh độ A1</li>
            </ul>
        `],
      editorConfig: {
          // The configuration of the editor.
      }
    };
  },
  methods: {
     removeElement(index) {
          this.editorData.splice(index, 1)
      },
      addElement() {
          this.editorData.unshift(this.defaultData?this.defaultData[0]:'')
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ck.ck-content:hover {
      background: #cdebf650;
    }
    .remove-button {
      position: absolute;
      top: 5px;
      right: 20px;
    }
    .col-content .remove-button {
      display: none;
    }
    .col-content:hover .remove-button {
      display: inline-block;
    }
</style>
