<template>
  <div class="editor-container">
    <div class="introduction">
      <div class="introduction-left" style="display:block">
        <cvAvatar></cvAvatar>
        <div style="display: flex;">
          <img class="cv-icon" src="@/assets/icon/icons8-user-50.png"/>
          <input class="cv-input" v-model="data.introduction.fullName">
        </div>
      </div>
      <div class="introduction-right">
        <div style="display: flex;">
          <img class="cv-icon" src="@/assets/icon/icons8-phone-50.png"/>
          <input class="cv-input" v-model="data.introduction.phonenumber">
        </div>
        <div style="display: flex;">
          <img class="cv-icon" src="@/assets/icon/icons8-birthday-cake-80.png"/>
          <input class="cv-input" v-model="data.introduction.birthday">
        </div>
        <div style="display: flex;">
          <img class="cv-icon" src="@/assets/icon/icons8-email-open-32.png"/>
          <input class="cv-input" v-model="data.introduction.email">
        </div>
        <div style="display: flex;">
          <img class="cv-icon" src="@/assets/icon/icons8-address-50.png"/>
          <input class="cv-input" v-model="data.introduction.address">
        </div>
      </div>
    </div>
    <div class="career">
      <h2 style="text-align: left;">CAREER GOALS</h2>
      <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
    <div style="display: flex" class="block">
      <h2 style="text-align: left;flex: 1">EDUCATION</h2>
      <b-button class="add-button" @click="addEducationElement()">Thêm</b-button>
    </div>
    <education ref="education" :data="data.education"></education>
    <div style="display: flex" class="block">
      <h2 style="text-align: left; flex: 1">WORK EXPERIENCE</h2>
      <b-button class="add-button" @click="addExpericenceElement()">Thêm</b-button>
    </div>
    <expericence ref="expericence" class="expericence" :data="data.experience"></expericence>
    <div style="display: flex" class="block">
      <h2 style="text-align: left; flex: 1">LANGUAGES</h2>
      <b-button class="add-button" @click="addLanguageElement()">Thêm</b-button>
    </div>
    <Language ref="language"></Language>
  </div>
</template>
<script>
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import Language from '@/components/cv-element/language';
import cvAvatar from '@/components/cv-element/cv-avatar'
import expericence from '@/components/cv-element/expericence';
import education from '@/components/cv-element/education'
export default {
  name: "default-cv",
  props: ['data'],
  components: {
    Language,
    cvAvatar,
    education,
    expericence
  },
  data() {
    return {
        editor: InlineEditor,
        editorData: `<ul>
          <li>Mong muốn học hỏi kinh nghiệm ở môi trường làm việc chuyên nghiệp, năng động.&nbsp;</li>
          <li>Có cơ hội thăng tiên cao thành công trong công việc</li>
        </ul>`,
        editorConfig: {
          // The configuration of the editor.
      }
    };
  },
  methods: {
    addEducationElement() {
      this.$refs.education.addElement()
    },
    addExpericenceElement() {
      this.$refs.expericence.addElement()
    },
    addLanguageElement() {
      this.$refs.language.addElement()
    }
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (max-width: 768px) {
  .editor-container {
    padding: 0 10px !important;
    background-color: #f0f2f5c4;
  }
}
.block .add-button {
  display: none;
}
.block:hover {
  background-color: #cacaca8c;
}
.block:hover .add-button{
  display: inline-block;
}

.editor-container {
  padding: 0 60px;
  background-color: #f0f2f5c4;
}
.introduction {
  padding-left: 2%;
  padding-top: 2%;
  display: grid;
  grid-template-columns: repeat(5,1fr);
}
.introduction-left {
  text-align: left;
}
.introduction-right {
  grid-column: 2 / span 4
}
.quill-editor:hover {
  background: #cdebf650;
}
h2 {
  font-size: 32px
}
.cv-input {
  width: 100%;
  border-color: transparent;
  background-color: transparent;
  padding: 10px 0px 10px 0px;
}
.cv-icon {
  padding: 0 1rem 0 0; 
  height: 1.5rem; 
  align-self: center;
}
</style>
