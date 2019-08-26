<template>
  <div class="editor-container" style="background-color: orange;">
    <div class="introduction">
      <div class="introduction-left">
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
      </div>
      <div class="introduction-right">
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
      </div>
    </div>
    <div class="career">
      <div class="introduction-left">
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
      </div>
      <div class="introduction-right">
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
      </div>
    </div>
    <div class="career">
      <div class="introduction-left">
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
      </div>
      <div class="introduction-right">
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
      </div>
    </div>
    <div class="career">
      <div class="introduction-left">
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
      </div>
      <div class="introduction-right">
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
      </div>
    </div>
    <div class="career">
      <div class="introduction-left">
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
      </div>
      <div class="introduction-right">
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.introduction.name" :options="editorOption"></quill-editor>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "spring-cv",
  props: [],
  data() {
    return {
      editorOption: {
        // some quill options
        theme: "bubble",
        placeholder: "Name",
        modules: {
          toolbar: [[], []]
        }
      },
      params: {
        title: "Title from 6 to 260 characters",
        introduction: {
          name: "MINH"
        }
      }
    };
  },
  computed: {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editor-container {
  background-color: white;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
}
.introduction {
  display: flex;
  border-bottom: 1px solid #bbb;
}
.career {
  border-bottom: 1px solid #bbb;
}
.quill-editor:hover {
  background: #cdebf650;
  border: 1px dotted gainsboro;
}
.introduction .introduction-left {
  justify-content: space-between;
  flex: 1;
  display: flex;
  align-items: center;
}
.introduction .introduction-right {
  flex: 1;
}
</style>