<template>
  <div class="editor-container">
    <div class="">
      <!-- <img src="@/assets/spring.png"/> -->
        <cvAvatar></cvAvatar>
        <div style="display: flex;">
          <img class="cv-icon" src="@/assets/icon/icons8-user-50.png"/>
          <input class="cv-input" v-model="user.fullName">
        </div>
        <div style="display: flex;">
          <img class="cv-icon" src="@/assets/icon/icons8-phone-50.png"/>
          <input class="cv-input" v-model="user.phone_number">
        </div>
        <div style="display: flex;">
          <img class="cv-icon" src="@/assets/icon/icons8-birthday-cake-80.png"/>
          <input class="cv-input" v-model="user.birthday">
        </div>
        <div style="display: flex;">
          <img class="cv-icon" src="@/assets/icon/icons8-email-open-32.png"/>
          <input class="cv-input" v-model="user.emailAddress">
        </div>
        <div style="display: flex;">
          <img class="cv-icon" src="@/assets/icon/icons8-address-50.png"/>
          <input class="cv-input" v-model="user.address">
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
    <education ref="education" :data="data.user.education"></education>
    <div style="display: flex" class="block">
      <h2 style="text-align: left; flex: 1">WORK EXPERIENCE</h2>
      <b-button class="add-button" @click="addExpericenceElement()">Thêm</b-button>
    </div>
    <expericence ref="expericence" class="expericence" :data="data.user.experience"></expericence>
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
        user: this.data.user,
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
    console.log(this.data)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (max-width: 768px) {
  .editor-container {
    padding: 0 10px !important;
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
  background-color: #f8f0da63;
  padding: 1rem 60px;
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
h2 {
  color: orange
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
