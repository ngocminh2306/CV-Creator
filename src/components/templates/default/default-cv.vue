<template>
  <div class="editor-container">
    <div class="introduction">
      <div class="introduction-left" style="display:block">
        <img @click="img_click" ref="preview" src="@/assets/saitama.jpg" class="avatar-img">
        <input style="display: none" ref="input-img" type="file" @change="onFileSelected">
        <div style="text-align: left;"><i>Tên của bạn:</i></div>
        <quill-editor placeholder="name" v-model="params.introduction.fullName" :options="editorOption">
        </quill-editor>
      </div>
      <div class="introduction-right">
        <quill-editor draggable="true" v-model="params.introduction.birthday" :options="editorOption"></quill-editor>
        <quill-editor draggable="true" v-model="params.introduction.phonenumber" :options="editorOption"></quill-editor>
        <quill-editor draggable="true" v-model="params.introduction.email" :options="editorOption"></quill-editor>
        <quill-editor draggable="true" v-model="params.introduction.address" :options="editorOption"></quill-editor>
      </div>
    </div>
    <div class="career">
      <h1 style="text-align: left;">CAREER GOALS</h1>
      <div class="career-left">
        <quill-editor   :options="editorOption"></quill-editor>
      </div>
      <div class="career-right">
        <quill-editor   :options="editorOption"></quill-editor>
        <quill-editor   :options="editorOption"></quill-editor>
        <quill-editor   :options="editorOption"></quill-editor>
        <quill-editor   :options="editorOption"></quill-editor>
        <quill-editor   :options="editorOption"></quill-editor>
      </div>
    </div>
    <div class="education">
      <h1 style="text-align: left;">EDUCATION</h1>
      <div class="introduction-right">
        <quill-editor v-model="params.education.graduationPlace" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.education.rankings" :options="editorOption"></quill-editor>
        <quill-editor v-model="params.education.name" :options="editorOption"></quill-editor>
      </div>
    </div>
    <div class="career">
      <h1 style="text-align: left;">WORK EXPERIENCE</h1>
      <div class="introduction-left">
        <quill-editor   :options="editorOption"></quill-editor>
      </div>
      <div class="introduction-right">
        <quill-editor   :options="editorOption"></quill-editor>
        <quill-editor   :options="editorOption"></quill-editor>
        <quill-editor   :options="editorOption"></quill-editor>
        <quill-editor   :options="editorOption"></quill-editor>
        <quill-editor   :options="editorOption"></quill-editor>
      </div>
    </div>
    <div class="career">
      <h1 style="text-align: left;">LANGUAGES</h1>
      <div class="introduction-left">
        <quill-editor   :options="editorOption"></quill-editor>
      </div>
      <div class="introduction-right">
        <quill-editor   :options="editorOption"></quill-editor>
        <quill-editor   :options="editorOption"></quill-editor>
        <quill-editor   :options="editorOption"></quill-editor>
        <quill-editor   :options="editorOption"></quill-editor>
        <quill-editor   :options="editorOption"></quill-editor>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "default-cv",
  props: [],
  data() {
    return {
      editorOption: {
        // some quill options
        theme: "bubble",
        // placeholder: "",
        modules: {
          toolbar: [[], []]
        }
      },
      params: {
        title: "Title from 6 to 260 characters",
        introduction: {
          fullName: "Tên của bạn",
          birthday: "",
          phonenumber: "Số điện thoại",
          email: "email@gmail.com",
          address: "Việt Nam"
        },
        education: {
          graduationPlace: "Đại học của bạn",
          name: "",
          rankings: ""
        }
      },
      selectedFile: null
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
  mounted() {
    let userInfo = JSON.parse(localStorage.getItem("user"));
    if (userInfo) {
      this.params.introduction.fullName = userInfo.fullName;
      this.params.introduction.birthday = userInfo.birthday;
      this.params.introduction.phonenumber = userInfo.phone_number;
      this.params.introduction.email = userInfo.emailAddress;
      this.params.introduction.address = userInfo.address;
      // education
      // this.params.education.graduationPlace =userInfo.graduationPlace;
      // this.params.education.name = userInfo.name;
      // this.params.education.rankings = userInfo.rankings;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editor-container {
  padding: 0 5vw;
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
.education {
  border-bottom: 1px solid #bbb;
}
.quill-editor:hover {
  background: #cdebf650;
  border: 1px dotted gainsboro;
}
/* .introduction .introduction-left {
  justify-content: space-between;
  flex: 1;
  display: flex;
  align-items: center;
}
.introduction .introduction-right {
  flex: 1;
} */
.avatar-img {
  margin-top: 16px;
  height: 160px;
  width: 120px;
}
</style>
