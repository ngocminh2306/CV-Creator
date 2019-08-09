<template>
  <div class="workingExperience">
   <form>
      <div class="input-content">
        <div class="label">
          <label>
            Company
            <span class="required">*</span>
          </label>
        </div>
        <input v-model="workingExperience.company" placeholder="Company">
      </div>
      <div class="input-content">
        <div class="label">
          <label>
            Time
            <span class="required">*</span>
          </label>
        </div>
        <input v-model="workingExperience.time" placeholder="Time">
      </div>
       <div class="input-content">
        <div class="label">
          <label>
            Position
            <span class="required">*</span>
          </label>
        </div>
        <input v-model="workingExperience.position" placeholder="Position">
      </div>
      <div class="input-content">
        <div class="label">
          <label>
            Description of the work process
            <span class="required">*</span>
          </label>
        </div>
        <quill-editor v-model="workingExperience.description" :options="editorOption"></quill-editor>
      </div>
      <div class="add-button">
        <button type="button">New</button>
      </div>
      <div class="update-button">
        <button type="submit" v-on:click="commitCareerGoal()">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "WorkingExperience",
  data() {
    return {
      editorOption: {
        // some quill options
        placeholder: "Study process",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }]
          ]
        }
      },
       workingExperience: {
        company: "",
        time: "",
        position: '',
        description: ""
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.workingExperience {
  width: 100%;
}
.workingExperience .input-content input {
  width: 100%;
}
.label {
  text-align: left;
}
.label .required {
  color: red;
}
.update-button {
  display: flex;
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
.add-button {
  display: flex;
}
.add-button button {
  z-index: 100;
  width: 80px;
  height: 30px;
  border-radius: 12px;
  border: 1px solid #069c06;
  background-color: #069c06;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}
</style>
