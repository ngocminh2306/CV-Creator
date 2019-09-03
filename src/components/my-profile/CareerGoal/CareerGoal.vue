<template>
  <div class="career-goal">
    <form>
      <div class="input-content">
        <div class="label">
          <label>
            Career Goal
            <span class="required">*</span>
          </label>
        </div>
        <quill-editor
          v-model="careerGoal"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
        ></quill-editor>
        <div style="text-align:left">
          <i>Description of your career goal</i>
        </div>
      </div>
      <div class="update-button">
        <button type="submit" v-on:click="commitCareerGoal()">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CareerGoal",
  data() {
    return {
      careerGoal: "",
      editorOption: {
        // some quill options
        placeholder: "Career Goal",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }]
          ]
        }
      }
    };
  },
  methods: {
    commitCareerGoal: function() {
      const parsed = JSON.stringify(this.careerGoal);
      localStorage.setItem("careerGoal", parsed);
    },
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.careerGoal = html;
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.career-goal {
  width: 100%;
}
.update-button {
  display: flex;
}
.label {
  text-align: left;
}
.label .required {
  color: red;
}
.update-button button {
  z-index: 100;
  width: 80px;
  height: 30px;
  border-radius: 12px;
  border: 1px solid #5488c7;
  background-color: #5488c7;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}
</style>
